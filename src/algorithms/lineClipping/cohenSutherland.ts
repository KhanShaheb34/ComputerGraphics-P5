import { Display } from '../../lib/display';
import { drawBoundingBox } from './drawBoundingBox';

const BoundingBox = {
  xMin: 20,
  xMax: 80,
  yMin: 20,
  yMax: 80,
};

const getRegionCode = (x: number, y: number) => {
  let code = 0;
  if (x < BoundingBox.xMin) code |= 1;
  if (x > BoundingBox.xMax) code |= 2;
  if (y < BoundingBox.yMin) code |= 4;
  if (y > BoundingBox.yMax) code |= 8;
  return code;
};

export const CohenSutherland = (
  display: Display,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  drawBoundingBox(display, BoundingBox);
  display.drawLine(x1, y1, x2, y2, 'red');

  let code1 = getRegionCode(x1, y1);
  let code2 = getRegionCode(x2, y2);
  let m = (y2 - y1) / (x2 - x1);

  while ((code1 | code2) > 0) {
    if ((code1 & code2) > 0) {
      return;
    }

    let xi = x1,
      yi = y1;
    let code = code1;

    if (code === 0) {
      xi = x2;
      yi = y2;
      code = code2;
    }

    let [x, y] = [0, 0];

    if ((code & 8) > 0) {
      x = xi + (1 / m) * (BoundingBox.yMax - yi);
      y = BoundingBox.yMax;
    } else if ((code & 4) > 0) {
      x = xi + (1 / m) * (BoundingBox.yMin - yi);
      y = BoundingBox.yMin;
    } else if ((code & 2) > 0) {
      x = BoundingBox.xMax;
      y = yi + m * (BoundingBox.xMax - xi);
    } else if ((code & 1) > 0) {
      x = BoundingBox.xMin;
      y = yi + m * (BoundingBox.xMin - xi);
    } else {
      return;
    }

    if (code === code1) {
      x1 = x;
      y1 = y;
      code1 = getRegionCode(x1, y1);
    }

    if (code === code2) {
      x2 = x;
      y2 = y;
      code2 = getRegionCode(x2, y2);
    }
  }
  display.drawLine(x1, y1, x2, y2, 'green');
};
