import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InWinComponent } from './in-win.component';

describe('InWinComponent', () => {
  let component: InWinComponent;
  let fixture: ComponentFixture<InWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
