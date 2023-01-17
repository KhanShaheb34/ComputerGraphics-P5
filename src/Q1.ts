import P5 from 'p5';
import { Display } from './lib/display';
import { GRID_SIZE, RESOLUTION, W } from './main';
import { Line } from './exam/line';
import { Polygon } from './exam/polygon';
import { Circle } from './exam/circle';
import { Translate } from '../algorithms/transformation/translate';

export const Q1 = (p5: P5) => {
  let display: Display;

  p5.setup = () => {
    p5.createCanvas(W, W);
    display = new Display(RESOLUTION, GRID_SIZE, W);
  };

  p5.draw = () => {
    display.draw(p5, { showGrid: false });

    // Base
    Polygon(display, [
      { i: 5, j: 15 },
      { i: 110, j: 15 },
      { i: 105, j: 10 },
      { i: 10, j: 10 },
      { i: 5, j: 15 },
    ]);

    // Lower Base
    Polygon(
      display,
      [
        { i: 10, j: 10 },
        { i: 15, j: 5 },
        { i: 100, j: 5 },
        { i: 105, j: 10 },
      ],
      { dotted: true }
    );

    // Left Side
    Polygon(display, [
      { i: 25, j: 15 },
      { i: 25, j: 60 },
      { i: 35, j: 60 },
      { i: 35, j: 15 },
    ]);

    // Center
    Polygon(display, [
      { i: 45, j: 15 },
      { i: 45, j: 60 },
      { i: 55, j: 70 },
      { i: 65, j: 70 },
      { i: 55, j: 60 },
      { i: 55, j: 45 },
    ]);

    Line(display, 55, 34, 55, 15);

    Polygon(display, [
      { i: 65, j: 70 },
      { i: 75, j: 70 },
      { i: 65, j: 60 },
      { i: 65, j: 15 },
    ]);

    Circle(display, 55, 40, 5);

    // Right Side
    Polygon(
      display,
      Translate(
        [
          { i: 25, j: 15 },
          { i: 25, j: 60 },
          { i: 35, j: 60 },
          { i: 35, j: 15 },
        ],
        50,
        0
      )
    );
  };
};
