# Computer Graphics with p5.js

Computer Graphic algorithm experiments using [p5.js](https://p5js.org/).

## Algorithms

- [DDA Line Drawing](/algorithms/lineDrawing/dda.ts)
- [Bresenham Line Drawing](/algorithms/lineDrawing/bresenhamLine.ts)
- [Bresenham Circle Drawing](/algorithms/circleDrawing/bresenhamCircle.ts)
- [Midpoint Circle Drawing](/algorithms/circleDrawing/midPoint.ts)
- [Cohen Sutherland Line Clipping](/algorithms/lineClipping/cohenSutherland.ts)
- [Region Filling](algorithms/filling/regionFilling.ts)
- Transformation
  - [Translation](/algorithms/transformation/translate.ts)
  - [Rotation](/algorithms/transformation/rotate.ts)
  - [Scaling](/algorithms/transformation/scale.ts)
  - [Reflection](/algorithms/transformation/reflect.ts)

## Add a new algorithm:

1. Create a new file in the `algorithms` folder.
2. Write a function for the algorithm with `display: Display` as a parameter.
3. Use `display.setPixel(x, y)` to set a pixel on the canvas.
4. Call the function in the `draw` function in `src/main.ts`.

## How to run

Installed necessary packages:

```sh
yarn
```

To run the development build:

```sh
yarn dev
```

To run the production build:

```sh
yarn build
```

To preview the production build:

```sh
yarn preview
```
