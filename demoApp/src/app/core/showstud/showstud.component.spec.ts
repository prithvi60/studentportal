import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstudComponent } from './showstud.component';

describe('ShowstudComponent', () => {
  let component: ShowstudComponent;
  let fixture: ComponentFixture<ShowstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
