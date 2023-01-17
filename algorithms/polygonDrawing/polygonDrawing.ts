import { Display } from '../../src/lib/display';

export type Points = Array<{ i: number; j: number }>;

export const PolygonDrawing = (display: Display, points: Points) => {
  for (let i = 0; i < points.length; i++) {
    display.drawLine(
      points[i].i,
      points[i].j,
      points[(i + 1) % points.length].i,
      points[(i + 1) % points.length].j,
      'red'
    );
  }
};
