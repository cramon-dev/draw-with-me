import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarService } from './toolbar.service';

describe('ToolbarService', () => {
  let service: ToolbarService;

  beforeEach(async () => {
    service = TestBed.inject(ToolbarService);
  });

  it('should initialize with default stroke width of 5px', () => {
    expect(service.strokePx()).toEqual(5);
  });
});
