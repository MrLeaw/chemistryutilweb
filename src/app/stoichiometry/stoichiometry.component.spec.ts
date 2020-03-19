import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StoichiometryComponent } from "./stoichiometry.component";

describe("StoichiometryComponent", () => {
  let component: StoichiometryComponent;
  let fixture: ComponentFixture<StoichiometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoichiometryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoichiometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
