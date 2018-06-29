import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDetailsPresentationComponent } from './thread-details-presentation.component';

describe('ThreadDetailsPresentationComponent', () => {
  let component: ThreadDetailsPresentationComponent;
  let fixture: ComponentFixture<ThreadDetailsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDetailsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
