import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsUnsubscribeComponent } from './sns-unsubscribe.component';

describe('SnsUnsubscribeComponent', () => {
  let component: SnsUnsubscribeComponent;
  let fixture: ComponentFixture<SnsUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
