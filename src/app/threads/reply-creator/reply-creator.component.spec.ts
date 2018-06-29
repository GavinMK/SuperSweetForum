import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyCreatorComponent } from './reply-creator.component';

describe('ReplyCreatorComponent', () => {
  let component: ReplyCreatorComponent;
  let fixture: ComponentFixture<ReplyCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
