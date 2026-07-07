import { useState } from 'react';

// 可嵌入 MDX 文章的互動 demo 範本(§4)。
// 用法(於 .mdx):
//   import LiveDemo from '../../components/islands/LiveDemo.tsx';
//   <LiveDemo client:visible />

export default function LiveDemo({ label = '點我' }: { label?: string }) {
  const [count, setCount] = useState(0);
  return (
    <div
      className="my-6 flex items-center gap-4 rounded-lg border p-4"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
    >
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-md px-3 py-1.5 text-sm font-medium text-white"
        style={{ background: 'var(--color-primary)' }}
      >
        {label}
      </button>
      <span style={{ color: 'var(--color-muted)' }}>已點擊 {count} 次</span>
    </div>
  );
}
