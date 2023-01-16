import { Display } from '../../src/lib/display';
import { plotEightWaySymmetric } from './plotEightWaySymmetric';

export const MidPointCircle = (
  display: Display,
  x0: number,
  y0: number,
  radius: number
) => {
  let x = 0;
  let y = radius;

  let decision = 1 - radius;

  plotEightWaySymmetric(display, x0, y0, x, y);

  while (y > x) {
    x++;
    if (decision > 0) {
      y--;
      decision = decision + 2 * (x - y) + 5;
    } else {
      decision = decision + 2 * x + 3;
    }
    plotEightWaySymmetric(display, x0, y0, x, y);
  }
};
