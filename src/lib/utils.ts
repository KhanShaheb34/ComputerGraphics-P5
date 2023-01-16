export const fixCoordinates = (
  i: number,
  j: number,
  resolution: number,
  centerOrigin: boolean
) => {
  i = Math.round(centerOrigin ? i + resolution / 2 : i);
  j = Math.round(centerOrigin ? j + resolution / 2 : j);

  if (i < 0 || i >= resolution || j < 0 || j >= resolution) return [null, null];
  return [i, j];
};
