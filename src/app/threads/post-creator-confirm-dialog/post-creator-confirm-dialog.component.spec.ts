import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatorConfirmDialogComponent } from './post-creator-confirm-dialog.component';

describe('PostCreatorConfirmDialogComponent', () => {
  let component: PostCreatorConfirmDialogComponent;
  let fixture: ComponentFixture<PostCreatorConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreatorConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreatorConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
