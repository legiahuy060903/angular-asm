import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRightComponent } from './control-right.component';

describe('ControlRightComponent', () => {
  let component: ControlRightComponent;
  let fixture: ComponentFixture<ControlRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlRightComponent]
    });
    fixture = TestBed.createComponent(ControlRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
