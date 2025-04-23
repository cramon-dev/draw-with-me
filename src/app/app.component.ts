import { AfterViewChecked, AfterViewInit, Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  width = 800;
  height = 800;
  strokeMin = 1;
  strokeMax = 80;
  strokePx = signal(5);

  @ViewChild('whiteboard') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  draw(event: MouseEvent): void {
    const context = this.canvas.nativeElement.getContext("2d");
    const x = event.offsetX - (this.strokePx() / 2);
    const y = event.offsetY - (this.strokePx() / 2);
    context?.fillRect(x, y, this.strokePx(), this.strokePx());
  }

  clearCanvas(): void {
    const context = this.canvas.nativeElement.getContext("2d")!;
    context.reset();
  }

  updateStroke(event: Event): void {
    this.strokePx.set(+(event.target as HTMLInputElement).value);
  }
}
