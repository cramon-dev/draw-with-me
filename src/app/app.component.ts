import { AfterViewChecked, AfterViewInit, Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';
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
  strokeMin = 1;
  strokeMax = 80;
  strokePx = signal(5);

  @ViewChild('whiteboard') canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngAfterViewInit(): void {
    console.info('after view init');
  }

  ngAfterViewChecked(): void {
    console.info('view checked');
  }

  draw(event: MouseEvent): void {
    const context = this.canvas.nativeElement.getContext("2d");
    const x = event.offsetX - (this.strokePx() / 2);
    const y = event.offsetY - (this.strokePx() / 2);
    context?.fillRect(x, y, this.strokePx(), this.strokePx());
  }

  clearCanvas(): void {
    const context = this.canvas.nativeElement.getContext("2d")!;
    context?.reset(); // Not sure why getContext can be null unless it's not supported by the browser
  }

  updateStroke(event: Event): void {
    this.strokePx.set(+(event.target as HTMLInputElement).value);
  }
}
