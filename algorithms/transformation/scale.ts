import { Points } from '../polygonDrawing/polygonDrawing';

export const Scale = (points: Points, si: number, sj: number) => {
  return points.map(({ i, j }) => ({ i: i * si, j: j * sj }));
};
