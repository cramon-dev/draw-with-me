import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasComponent } from './canvas.component';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize with 800px width and 800px height', () => {
    expect(component.width).toBe(800);
    expect(component.height).toBe(800);
    expect(component).toBeTruthy();
  });
});
