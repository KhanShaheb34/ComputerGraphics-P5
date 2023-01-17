import { Points } from '../polygonDrawing/polygonDrawing';

export const Translate = (points: Points, ti: number, tj: number) => {
  return points.map(({ i, j }) => ({ i: i + ti, j: j + tj }));
};
