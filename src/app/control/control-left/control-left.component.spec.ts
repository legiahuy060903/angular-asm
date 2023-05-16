import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlLeftComponent } from './control-left.component';

describe('ControlLeftComponent', () => {
  let component: ControlLeftComponent;
  let fixture: ComponentFixture<ControlLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlLeftComponent]
    });
    fixture = TestBed.createComponent(ControlLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
