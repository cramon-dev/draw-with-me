import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  strokeMin = 1;
  strokeMax = 80;
  strokePx = signal(5);

  constructor() { }
  
  clearCanvas(): void {
    // TODO - make ref to canvas available, maybe via service?
    // const context = this.canvas.nativeElement.getContext("2d")!;
    // context.reset();
  }

  // TODO - thinking this should be within a drawing tool within this component
  updateStroke(event: Event): void {
    this.strokePx.set(+(event.target as HTMLInputElement).value);
  }
}
