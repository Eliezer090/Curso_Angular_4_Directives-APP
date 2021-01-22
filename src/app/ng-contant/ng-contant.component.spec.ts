import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContantComponent } from './ng-contant.component';

describe('NgContantComponent', () => {
  let component: NgContantComponent;
  let fixture: ComponentFixture<NgContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
