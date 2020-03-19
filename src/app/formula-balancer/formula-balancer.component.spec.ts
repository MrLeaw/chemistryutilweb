import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaBalancerComponent } from './formula-balancer.component';

describe('FormulaBalancerComponent', () => {
  let component: FormulaBalancerComponent;
  let fixture: ComponentFixture<FormulaBalancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaBalancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaBalancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
