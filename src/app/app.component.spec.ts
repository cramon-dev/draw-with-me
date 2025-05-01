import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the app-canvas component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const canvasElement = fixture.debugElement.query(By.css('app-canvas'));
    expect(canvasElement).toBeTruthy();
    expect(canvasElement.componentInstance).toBeTruthy();
  });

  it('should render the app-toolbar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const toolbarElement = fixture.debugElement.query(By.css('app-toolbar'));
    expect(toolbarElement).toBeTruthy();
    expect(toolbarElement.componentInstance).toBeTruthy();
  });
});
