import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToClassBindingComponent } from './template-to-class-binding.component';

describe('TemplateToClassBindingComponent', () => {
  let component: TemplateToClassBindingComponent;
  let fixture: ComponentFixture<TemplateToClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateToClassBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateToClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
