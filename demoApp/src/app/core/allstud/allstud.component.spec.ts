import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudComponent } from './allstud.component';

describe('AllstudComponent', () => {
  let component: AllstudComponent;
  let fixture: ComponentFixture<AllstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
