import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolbarContainerComponent } from './app-toolbar-container.component';

describe('AppToolbarContainerComponent', () => {
  let component: AppToolbarContainerComponent;
  let fixture: ComponentFixture<AppToolbarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppToolbarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToolbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
