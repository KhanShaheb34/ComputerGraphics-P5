import { Points } from '../polygonDrawing/polygonDrawing';

export const Rotate = (points: Points, angle: number) => {
  return points.map(({ i, j }) => ({
    i: i * Math.cos(angle) - j * Math.sin(angle),
    j: i * Math.sin(angle) + j * Math.cos(angle),
  }));
};
