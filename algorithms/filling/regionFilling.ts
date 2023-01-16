import { Display } from '../../src/lib/display';

export const RegionFilling = (
  display: Display,
  i: number,
  j: number,
  fillColor: string
) => {
  const emptyPixelColor = '#f5ebe0';
  if (emptyPixelColor === fillColor) return;
  console.log(i, j);

  const stack: { i: number; j: number }[] = [];
  const visited: { i: number; j: number }[] = [];
  stack.push({ i, j });
  console.log(stack.length, stack);
  while (stack.length > 0) {
    const { i, j } = stack.pop()!;
    visited.push({ i, j });
    console.log(i, j);

    display.get(i, j).changeColor(fillColor);
    if (validPixel(i + 1, j, display, visited, emptyPixelColor))
      stack.push({ i: i + 1, j });
    if (validPixel(i - 1, j, display, visited, emptyPixelColor))
      stack.push({ i: i - 1, j });
    if (validPixel(i, j + 1, display, visited, emptyPixelColor))
      stack.push({ i, j: j + 1 });
    if (validPixel(i, j - 1, display, visited, emptyPixelColor))
      stack.push({ i, j: j - 1 });
  }
};

const validPixel = (
  i: number,
  j: number,
  display: Display,
  visited: { i: number; j: number }[],
  emptyPixelColor: string
) => {
  return (
    display.get(i, j).color === emptyPixelColor &&
    i >= 0 &&
    i < display.resolution &&
    j >= 0 &&
    j < display.resolution &&
    !visited.some(({ i: i1, j: j1 }) => i1 === i && j1 === j)
  );
};
