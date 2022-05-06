export const prop =
  <T>(key: keyof T, fallback: any = undefined) =>
  (props: T) =>
    props[key] ?? fallback;

export const isSafari = () =>
  navigator.userAgent.includes("Safari") &&
  !navigator.userAgent.includes("Chrome");

function hexToRGB(hex: string) {
  hex = hex[0] === "#" ? hex.slice(1) : hex;
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return r + ", " + g + ", " + b;
}

export function transparentize(color: string, alpha: number) {
  return `rgba(${hexToRGB(color)}, ${alpha})`;
}
