# Computer Graphics with p5.js

Computer Graphic algorithm experiments using [p5.js](https://p5js.org/).

## Algorithms

- [DDA](/src/algorithms/dda.ts)

## Add a new algorithm:

1. Create a new file in the `src/algorithms` folder.
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