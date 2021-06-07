import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteracterComponentComponent } from './interacter-component.component';

describe('InteracterComponentComponent', () => {
  let component: InteracterComponentComponent;
  let fixture: ComponentFixture<InteracterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteracterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteracterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
