import P5 from 'p5';

export class Grid {
  public color: string;
  public i: number;
  public j: number;
  public f: number;
  public g: number;
  public h: number;

  constructor(i: number, j: number, color?: string) {
    this.color = color || '#f5ebe0';
    this.i = i;
    this.j = j;
    this.f = Infinity;
    this.g = Infinity;
    this.h = 0;
  }

  public draw(p5: P5, gridSize: number) {
    const { i, j, color } = this;
    const x = j * gridSize;
    const y = i * gridSize;

    p5.fill(color);
    p5.rect(x, y, gridSize, gridSize);
  }

  public changeColor(color: string) {
    this.color = color;
  }
}
