const HEXADECIMAL_BASE = 16;

function decimalToHexadecimal(value: string) {
  return parseInt(value, HEXADECIMAL_BASE);
}

export function hexToRgbVar(hexColor: string | null | undefined) {
  try {
    if (!hexColor) return null;

    const twoLettersRegex = /\w\w/g;
    const [r, g, b] = hexColor.match(twoLettersRegex)?.map(decimalToHexadecimal) ?? [];

    return `${r}, ${g}, ${b}`;
  } catch (err) {
    return null;
  }
}
