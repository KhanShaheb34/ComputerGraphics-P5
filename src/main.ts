import { BresenhamCircle } from './algorithms/circleDrawing/bresenhamCircle';
import { MidPointCircle } from './algorithms/circleDrawing/midPoint';
import { Display } from './lib/display';
import './style.css';
import P5 from 'p5';

let W = Math.min(window.innerWidth, window.innerHeight) * 0.8;
let RESOLUTION = 50;
let GRID_SIZE = W / RESOLUTION;

let display: Display;

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(W, W);
    display = new Display(RESOLUTION, GRID_SIZE, W, { centerOrigin: true });
  };

  p5.draw = () => {
    display.draw(p5, { showCoordinate: true, showGrid: false });
    // DDA(display, 10, 12, 35, 42);
    // BresenhamLine(display, 10, 7, 35, 37);
    BresenhamCircle(display, 0, 0, 15);
    MidPointCircle(display, 0, 0, 5);

    display.putPixel(0, 0);
  };
};

new P5(sketch);
