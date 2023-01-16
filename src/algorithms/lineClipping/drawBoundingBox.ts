import { Display } from '../../lib/display';

export const drawBoundingBox = (
  display: Display,
  BoundingBox: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
  }
) => {
  display.drawLine(
    BoundingBox.xMin,
    BoundingBox.yMin,
    BoundingBox.xMax,
    BoundingBox.yMin,
    '#f4a261'
  );
  display.drawLine(
    BoundingBox.xMax,
    BoundingBox.yMin,
    BoundingBox.xMax,
    BoundingBox.yMax,
    '#f4a261'
  );
  display.drawLine(
    BoundingBox.xMax,
    BoundingBox.yMax,
    BoundingBox.xMin,
    BoundingBox.yMax,
    '#f4a261'
  );
  display.drawLine(
    BoundingBox.xMin,
    BoundingBox.yMax,
    BoundingBox.xMin,
    BoundingBox.yMin,
    '#f4a261'
  );
};
