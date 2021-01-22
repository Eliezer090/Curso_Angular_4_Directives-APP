import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainnerComponent } from './ng-containner.component';

describe('NgContainnerComponent', () => {
  let component: NgContainnerComponent;
  let fixture: ComponentFixture<NgContainnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContainnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
