import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPhotoComponent } from './container-photo.component';

describe('ContainerPhotoComponent', () => {
  let component: ContainerPhotoComponent;
  let fixture: ComponentFixture<ContainerPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
