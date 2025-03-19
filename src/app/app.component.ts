import { AfterViewChecked, AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  width = 800;
  height = 800;
  strokeWidth = signal(20);
  strokeHeight = signal(20);
  canvasState = signal(null);

  @ViewChild('whiteboard') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngAfterViewInit(): void {
    console.info('after view init');
  }

  ngAfterViewChecked(): void {
    console.info('view checked');
  }

  draw(event: MouseEvent): void {
    const context = this.canvas.nativeElement.getContext("2d"); // can I save the context in component or service state?
    const x = event.offsetX - (this.strokeWidth() / 2);
    const y = event.offsetY - (this.strokeHeight() / 2);
    context?.fillRect(x, y, this.strokeWidth(), this.strokeHeight());
  }

  clearCanvas(): void {
    const context = this.canvas.nativeElement.getContext("2d");
    context?.reset(); // Not sure why getContext can be null unless it's not supported by the browser

    this.canvasState.update((state) => null);
  }
}
