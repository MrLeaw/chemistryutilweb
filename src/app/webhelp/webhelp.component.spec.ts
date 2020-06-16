import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhelpComponent } from './webhelp.component';

describe('WebhelpComponent', () => {
  let component: WebhelpComponent;
  let fixture: ComponentFixture<WebhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
