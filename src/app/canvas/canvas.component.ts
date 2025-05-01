import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent {
  width: number = 800; // TODO - establish default size somewhere else
  height: number = 800;

  @ViewChild('whiteboard') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() {}
  
  // draw(event: MouseEvent): void {
  //   const context = this.canvas.nativeElement.getContext("2d");
  //   const x = event.offsetX - (this.strokePx() / 2);
  //   const y = event.offsetY - (this.strokePx() / 2);
  //   context?.fillRect(x, y, this.strokePx(), this.strokePx());
  // }
}
