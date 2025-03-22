export class MatrixSymbol {
  x: number;
  y: number;
  value: string;
  speed: number;
  opacity: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.value = String.fromCharCode(0x30A0 + Math.random() * 96);
    this.speed = speed;
    this.opacity = Math.random() * 0.5 + 0.5; // Brighter base opacity
  }

  update(height: number): void {
    this.y += this.speed;
    
    if (this.y > height) {
      this.y = 0;
      this.opacity = Math.random() * 0.5 + 0.5;
    }
    
    if (Math.random() > 0.98) {
      this.value = String.fromCharCode(0x30A0 + Math.random() * 96);
    }
  }
}