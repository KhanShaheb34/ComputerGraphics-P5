import P5 from 'p5';
import { Display } from './lib/display';
import { GRID_SIZE, RESOLUTION, W } from './main';
import { Line } from './exam/line';

export const Q2 = (p5: P5) => {
  let display: Display;

  p5.setup = () => {
    p5.createCanvas(W, W);
    display = new Display(RESOLUTION, GRID_SIZE, W);
  };

  p5.draw = () => {
    display.draw(p5, { showGrid: false });

    // S
    Line(display, 20, 40, 10, 30);
    Line(display, 10, 30, 20, 30, { dotted: true });
    Line(display, 20, 30, 10, 20);

    // U
    Line(display, 25, 40, 25, 20);
    Line(display, 25, 20, 40, 20);
    Line(display, 40, 20, 40, 40);

    // S
    Line(display, 45, 20, 60, 20);
    Line(display, 60, 30, 60, 20);
    Line(display, 45, 30, 60, 30);
    Line(display, 45, 30, 45, 40);
    Line(display, 45, 40, 60, 40);

    // T
    Line(display, 65, 40, 85, 40, { dotted: true });
    Line(display, 75, 40, 75, 20, { dotted: true });
  };
};
