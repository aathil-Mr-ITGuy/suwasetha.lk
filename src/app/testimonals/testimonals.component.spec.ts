import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalsComponent } from './testimonals.component';

describe('TestimonalsComponent', () => {
  let component: TestimonalsComponent;
  let fixture: ComponentFixture<TestimonalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
