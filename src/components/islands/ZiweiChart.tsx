import { useMemo, useState } from 'react';

// 紫微斗數命盤視覺化 island 的骨架(client:visible)。
// 這裡先提供 12 宮格版面與互動選格,實際命盤演算法可後續接入。
// §4 src/components/islands/ZiweiChart.tsx

const PALACES = [
  '命宮', '兄弟', '夫妻', '子女',
  '財帛', '疾厄', '遷移', '交友',
  '官祿', '田宅', '福德', '父母',
] as const;

// 標準紫微命盤:4x4 外圈 12 宮,中央 2x2 為命主資訊
const GRID_ORDER = [
  0, 1, 2, 3,
  11, -1, -1, 4,
  10, -1, -1, 5,
  9, 8, 7, 6,
];

export default function ZiweiChart() {
  const [active, setActive] = useState<number | null>(0);
  const activeName = useMemo(
    () => (active === null ? '—' : PALACES[active]),
    [active]
  );

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="grid aspect-square grid-cols-4 grid-rows-4 gap-1 rounded-lg border p-1"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
      >
        {GRID_ORDER.map((idx, cell) => {
          if (idx === -1) {
            // 中央資訊格只渲染一次(左上角那格),跨 2x2
            if (cell === 5) {
              return (
                <div
                  key="center"
                  className="col-span-2 row-span-2 flex flex-col items-center justify-center rounded-md text-center"
                  style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}
                >
                  <div className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    命盤中宮
                  </div>
                  <div className="mt-1 text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                    {activeName}
                  </div>
                </div>
              );
            }
            return null;
          }
          return (
            <button
              key={cell}
              type="button"
              onClick={() => setActive(idx)}
              className="flex items-center justify-center rounded-md border text-sm transition-colors"
              style={{
                borderColor: active === idx ? 'var(--color-primary)' : 'var(--color-border)',
                background: 'var(--color-bg)',
                color: active === idx ? 'var(--color-primary)' : 'var(--color-text)',
                fontWeight: active === idx ? 700 : 400,
              }}
            >
              {PALACES[idx]}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-center text-sm" style={{ color: 'var(--color-muted)' }}>
        點選任一宮位查看(示範骨架,命盤演算法待接入)
      </p>
    </div>
  );
}
