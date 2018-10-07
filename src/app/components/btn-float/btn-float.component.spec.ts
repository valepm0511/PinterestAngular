import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFloatComponent } from './btn-float.component';

describe('BtnFloatComponent', () => {
  let component: BtnFloatComponent;
  let fixture: ComponentFixture<BtnFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
