import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowComponent } from './stackoverflow.component';

describe('StackoverflowComponent', () => {
  let component: StackoverflowComponent;
  let fixture: ComponentFixture<StackoverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackoverflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
