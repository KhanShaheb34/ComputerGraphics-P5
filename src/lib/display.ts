import P5 from 'p5';
import { Grid } from './grids';

export class Display {
  public grids: Grid[][];
  public resolution: number;
  public gridSize: number;
  public W: number;

  constructor(resolution: number, gridSize: number, W: number) {
    this.resolution = resolution;
    this.gridSize = gridSize;
    this.grids = this.createEmptyGrids();
    this.W = W;
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

  public draw(p5: P5) {
    p5.background('#f5ebe0');
    p5.translate(0, this.W);
    p5.scale(1, -1);
    for (const row of this.grids) {
      for (const grid of row) {
        grid.draw(p5, this.gridSize);
      }
    }
  }

  public putPixel(i: number, j: number) {
    i = Math.round(i);
    j = Math.round(j);
    if (i < 0 || i >= this.resolution || j < 0 || j >= this.resolution) return;
    this.grids[i][j].changeColor('#001219');
  }

  public removePixel(i: number, j: number) {
    i = Math.round(i);
    j = Math.round(j);
    if (i < 0 || i >= this.resolution || j < 0 || j >= this.resolution) return;
    this.grids[i][j].changeColor('#f5ebe0');
  }

  public get(i: number, j: number) {
    return this.grids[i][j];
  }

  public reset = () => {
    this.grids = this.createEmptyGrids();
  };
}
