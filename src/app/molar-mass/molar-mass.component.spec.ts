import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolarMassComponent } from './molar-mass.component';

describe('MolarMassComponent', () => {
  let component: MolarMassComponent;
  let fixture: ComponentFixture<MolarMassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolarMassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolarMassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
