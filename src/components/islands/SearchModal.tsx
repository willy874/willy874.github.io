import { useCallback, useEffect, useRef, useState } from 'react';

// §7.1 Pagefind 全文搜尋(CJK)+ ⌘K modal(client:idle)
// Pagefind 於 `pnpm build` 後產生 /pagefind/pagefind.js;dev 環境不存在,搜尋會提示先 build。

interface PagefindResult {
  url: string;
  meta: { title?: string };
  excerpt: string;
}
interface PagefindApi {
  search: (q: string) => Promise<{
    results: { data: () => Promise<PagefindResult> }[];
  }>;
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [ready, setReady] = useState<boolean | null>(null);
  const pagefind = useRef<PagefindApi | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 動態載入 pagefind bundle(僅第一次開啟時)
  const ensureLoaded = useCallback(async () => {
    if (pagefind.current || ready === false) return;
    try {
      const mod = (await import(
        /* @vite-ignore */ `${import.meta.env.BASE_URL}pagefind/pagefind.js`
      )) as PagefindApi;
      await (mod as unknown as { init?: () => Promise<void> }).init?.();
      pagefind.current = mod;
      setReady(true);
    } catch {
      setReady(false);
    }
  }, [ready]);

  // ⌘K / Ctrl+K 開啟,Esc 關閉
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      void ensureLoaded();
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setQuery('');
      setResults([]);
    }
  }, [open, ensureLoaded]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!query.trim() || !pagefind.current) {
        setResults([]);
        return;
      }
      const search = await pagefind.current.search(query);
      const data = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
      if (!cancelled) setResults(data);
    })();
    return () => {
      cancelled = true;
    };
  }, [query]);

  return (
    <>
      <button
        type="button"
        aria-label="搜尋(⌘K)"
        onClick={() => setOpen(true)}
        className="ml-1 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs transition-colors hover:bg-[var(--color-surface)]"
        style={{ color: 'var(--color-muted)' }}
      >
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
        <kbd className="hidden sm:inline">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[12vh]"
          style={{ background: 'rgba(0,0,0,0.4)' }}
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="站內搜尋"
            className="w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl"
            style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋文章…"
              className="w-full border-b bg-transparent px-4 py-3 outline-none"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            />
            <div className="max-h-[50vh] overflow-y-auto">
              {ready === false && (
                <p className="px-4 py-6 text-sm" style={{ color: 'var(--color-muted)' }}>
                  搜尋索引尚未產生。請先執行 <code>pnpm build</code>(dev 環境無 Pagefind 索引)。
                </p>
              )}
              {ready !== false && query && results.length === 0 && (
                <p className="px-4 py-6 text-sm" style={{ color: 'var(--color-muted)' }}>
                  找不到「{query}」的結果。
                </p>
              )}
              <ul>
                {results.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      className="block border-b px-4 py-3 hover:bg-[var(--color-surface)]"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <div className="font-medium" style={{ color: 'var(--color-text)' }}>
                        {r.meta.title ?? r.url}
                      </div>
                      <p
                        className="mt-0.5 line-clamp-2 text-sm"
                        style={{ color: 'var(--color-muted)' }}
                        dangerouslySetInnerHTML={{ __html: r.excerpt }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
