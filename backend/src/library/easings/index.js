/**
 * https://easings.net
 * 緩動函數
 */
export const easeOutElastic = x => {
  const c4 = (2 * Math.PI) / 3
  const ease =
    x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
  return ease
}
export const easeInSine = x => {
  const ease = 1 - Math.cos((x * Math.PI) / 2)
  return ease
}
