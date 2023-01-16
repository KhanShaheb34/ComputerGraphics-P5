import P5 from 'p5';
import { Grid } from './grids';
import { fixCoordinates } from './utils';
import { DDA } from '../../algorithms/lineDrawing/dda';

export class Display {
  public grids: Grid[][];
  public resolution: number;
  public gridSize: number;
  public W: number;
  public centerOrigin: boolean;

  constructor(
    resolution: number,
    gridSize: number,
    W: number,
    { centerOrigin }: { centerOrigin?: boolean } = {}
  ) {
    this.resolution = resolution;
    this.gridSize = gridSize;
    this.grids = this.createEmptyGrids();
    this.W = W;
    this.centerOrigin = !!centerOrigin;
  }

  private createEmptyGrids() {
    const grids: Grid[][] = [];
    for (let i = 0; i < this.resolution; i++) {
      grids[i] = [];
      for (let j = 0; j < this.resolution; j++) {
        grids[i][j] = new Grid(i, j);
      }
    }
    return grids;
  }

  public draw(
    p5: P5,
    {
      showCoordinate,
      showGrid,
    }: { showCoordinate?: boolean; showGrid?: boolean } = {}
  ) {
    p5.background('#f5ebe0');
    p5.translate(0, this.W);
    p5.scale(1, -1);

    if (showGrid) p5.stroke(255);
    else p5.noStroke();

    for (const row of this.grids) {
      for (const grid of row) {
        grid.draw(p5, this.gridSize);
      }
    }

    if (showCoordinate) this.drawCoordinate(p5);
  }

  public putPixel(i: number, j: number, color?: string) {
    let [x, y] = fixCoordinates(i, j, this.resolution, this.centerOrigin);
    if (x === null || y === null) return;
    this.grids[y][x].changeColor(color || '#001219');
  }

  public removePixel(i: number, j: number) {
    let [x, y] = fixCoordinates(i, j, this.resolution, this.centerOrigin);
    if (x === null || y === null) return;
    this.grids[y][x].changeColor('#f5ebe0');
  }

  public get(i: number, j: number) {
    return this.grids[i][j];
  }

  public reset = () => {
    this.grids = this.createEmptyGrids();
  };

  public drawCoordinate = (p5: P5) => {
    p5.stroke('#001219');
    p5.line(
      this.W / 2 + this.gridSize / 2,
      0,
      this.W / 2 + this.gridSize / 2,
      this.W
    );
    p5.line(
      0,
      this.W / 2 + this.gridSize / 2,
      this.W,
      this.W / 2 + this.gridSize / 2
    );
  };

  public drawLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color?: string
  ) => {
    DDA(this, x1, y1, x2, y2, color);
  };
}
