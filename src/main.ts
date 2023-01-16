import { CohenSutherland } from './algorithms/lineClipping/cohenSutherland';
import { Display } from './lib/display';
import './style.css';
import P5 from 'p5';

let W = Math.min(window.innerWidth, window.innerHeight) * 0.8;
let RESOLUTION = 100;
let GRID_SIZE = W / RESOLUTION;

let display: Display;

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(W, W);
    display = new Display(RESOLUTION, GRID_SIZE, W);
  };

  p5.draw = () => {
    display.draw(p5);
    // DDA(display, 10, 12, 35, 42);
    // BresenhamLine(display, 10, 7, 35, 37);
    // BresenhamCircle(display, 0, 0, 15);
    // MidPointCircle(display, 0, 0, 5);

    CohenSutherland(display, 10, 12, 35, 42);
    CohenSutherland(display, 10, 30, 95, 42);
    CohenSutherland(display, 15, 85, 65, 90);
    CohenSutherland(display, 50, 95, 95, 30);
  };
};

new P5(sketch);
