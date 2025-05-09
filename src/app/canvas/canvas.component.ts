import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToolbarService } from '../canvas-drawing/toolbar.service';
import { CanvasDrawingModule } from 'app/canvas-drawing/canvas-drawing.module';

@Component({
  selector: 'app-canvas',
  imports: [ CanvasDrawingModule ],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent {
  width: number = 800; // TODO - establish default size somewhere else
  height: number = 800;

  @ViewChild('whiteboard') canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private toolbarService: ToolbarService) {}
  
  draw(event: MouseEvent): void {
    const context = this.canvas.nativeElement.getContext("2d");
    const strokePx = this.toolbarService.strokePx();
    const x = event.offsetX - (strokePx / 2);
    const y = event.offsetY - (strokePx / 2);
    context?.fillRect(x, y, strokePx, strokePx);
  }
}
