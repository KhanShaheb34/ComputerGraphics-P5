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
  };
};

new P5(sketch);
