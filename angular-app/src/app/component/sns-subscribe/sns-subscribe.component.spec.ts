import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsSubscribeComponent } from './sns-subscribe.component';

describe('SnsSubscribeComponent', () => {
  let component: SnsSubscribeComponent;
  let fixture: ComponentFixture<SnsSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
