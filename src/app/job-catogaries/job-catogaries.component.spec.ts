import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCatogariesComponent } from './job-catogaries.component';

describe('JobCatogariesComponent', () => {
  let component: JobCatogariesComponent;
  let fixture: ComponentFixture<JobCatogariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCatogariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCatogariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
