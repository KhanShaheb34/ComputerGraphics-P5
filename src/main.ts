import { fillOnMouseClick } from '../algorithms/filling/regionFilling';
import { PolygonDrawing } from '../algorithms/polygonDrawing/polygonDrawing';
import { RectanglePoints } from '../algorithms/polygonDrawing/rectangleExample';
import { Reflect } from '../algorithms/transformation/reflect';
import { Rotate } from '../algorithms/transformation/rotate';
import { Scale } from '../algorithms/transformation/scale';
import { Translate } from '../algorithms/transformation/translate';
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
    // BresenhamLine(display, 10, 90, 80, 10);
    // BresenhamCircle(display, 0, 0, 15);
    // MidPointCircle(display, 0, 0, 5);

    // CohenSutherland(display, 10, 12, 35, 42);
    // CohenSutherland(display, 10, 30, 95, 42);
    // CohenSutherland(display, 15, 85, 65, 90);
    // CohenSutherland(display, 50, 95, 95, 30);

    PolygonDrawing(display, RectanglePoints);

    PolygonDrawing(
      display,
      Translate(
        Reflect(
          Scale(Rotate(Translate(RectanglePoints, -50, -45), 45), 1.2, 1.5),
          'y'
        ),
        50,
        45
      )
    );
  };

  p5.mousePressed = () => fillOnMouseClick(display, p5, GRID_SIZE, W);
};

new P5(sketch);
