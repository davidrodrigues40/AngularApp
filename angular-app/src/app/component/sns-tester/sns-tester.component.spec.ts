import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsTesterComponent } from './sns-tester.component';

describe('SnsTesterComponent', () => {
  let component: SnsTesterComponent;
  let fixture: ComponentFixture<SnsTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
