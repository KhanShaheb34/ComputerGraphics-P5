import { Display } from '../lib/display';
import { Line } from './line';

export type Points = Array<{ i: number; j: number }>;

export const Polygon = (
  display: Display,
  points: Points,
  { dotted }: { dotted?: boolean } = {}
) => {
  for (let i = 0; i < points.length - 1; i++) {
    Line(display, points[i].i, points[i].j, points[i + 1].i, points[i + 1].j, {
      dotted,
    });
  }
};
