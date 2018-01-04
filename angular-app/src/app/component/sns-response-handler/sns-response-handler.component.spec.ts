import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsResultsComponent } from './sns-results.component';

describe('SnsResultsComponent', () => {
  let component: SnsResultsComponent;
  let fixture: ComponentFixture<SnsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
