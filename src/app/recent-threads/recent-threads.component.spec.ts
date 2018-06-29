import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentThreadsComponent } from './recent-threads.component';

describe('RecentPostsComponent', () => {
  let component: RecentThreadsComponent;
  let fixture: ComponentFixture<RecentThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
