import { Component } from '@angular/core';
import { ToolbarService } from '../../canvas-drawing/toolbar.service';
import { CanvasDrawingModule } from 'app/canvas-drawing/canvas-drawing.module';

@Component({
  selector: 'app-toolbar',
  imports: [ CanvasDrawingModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  strokeMin = 1;
  strokeMax = 80;

  constructor(private toolbarService: ToolbarService) { }

  get strokePx() {
    return this.toolbarService.strokePx();
  }
  
  // TODO - implement
  erase() { }

  // TODO - thinking this should be within a drawing tool within this component
  updateStroke(event: Event): void {
    this.toolbarService.strokePx.set(+(event.target as HTMLInputElement).value);
  }
}
