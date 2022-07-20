import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Use1Component } from './use1.component';

describe('Use1Component', () => {
  let component: Use1Component;
  let fixture: ComponentFixture<Use1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Use1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Use1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
