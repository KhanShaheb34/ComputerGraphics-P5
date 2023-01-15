import { DDA } from './algorithms/dda';
import { Display } from './lib/display';
import './style.css';
import P5 from 'p5';

let W = Math.min(window.innerWidth, window.innerHeight) * 0.8;
let RESOLUTION = 60;
let GRID_SIZE = W / RESOLUTION;

let display: Display;

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(W, W);
    display = new Display(RESOLUTION, GRID_SIZE);
  };

  p5.draw = () => {
    display.draw(p5, W);
    DDA(display, 10, 12, 35, 42);
  };
};

new P5(sketch);
