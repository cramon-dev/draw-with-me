import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from "./canvas/canvas.component";
import { ToolbarComponent } from './canvas/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CanvasComponent,
    ToolbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() { }
}
