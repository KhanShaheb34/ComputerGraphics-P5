import { Points } from '../polygonDrawing/polygonDrawing';

export const Reflect = (
  points: Points,
  axis: 'x' | 'y' | 'xy' | 'yx'
): Points => {
  const newPoints: Points = [];
  for (const point of points) {
    switch (axis) {
      case 'x':
        newPoints.push({ i: point.i, j: -point.j });
        break;
      case 'y':
        newPoints.push({ i: -point.i, j: point.j });
        break;
      case 'xy':
        newPoints.push({ i: -point.i, j: -point.j });
        break;
      case 'yx':
        newPoints.push({ i: point.j, j: point.i });
        break;
    }
  }
  return newPoints;
};
