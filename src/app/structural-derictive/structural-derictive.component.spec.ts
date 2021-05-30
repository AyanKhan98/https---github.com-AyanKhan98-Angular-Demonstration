import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDerictiveComponent } from './structural-derictive.component';

describe('StructuralDerictiveComponent', () => {
  let component: StructuralDerictiveComponent;
  let fixture: ComponentFixture<StructuralDerictiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDerictiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDerictiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
