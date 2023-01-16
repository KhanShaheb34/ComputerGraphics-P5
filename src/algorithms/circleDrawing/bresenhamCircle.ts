import { Display } from '../../lib/display';
import { plotEightWaySymmetric } from './plotEightWaySymmetric';

export const BresenhamCircle = (
  display: Display,
  x0: number,
  y0: number,
  radius: number
) => {
  let x = 0;
  let y = radius;

  let decision = 3 - 2 * radius;

  plotEightWaySymmetric(display, x0, y0, x, y);

  while (y > x) {
    x++;
    if (decision > 0) {
      y--;
      decision = decision + 4 * (x - y) + 10;
    } else {
      decision = decision + 4 * x + 6;
    }
    plotEightWaySymmetric(display, x0, y0, x, y);
  }
};
