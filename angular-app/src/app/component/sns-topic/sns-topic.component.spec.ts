import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsTopicComponent } from './sns-topic.component';

describe('SnsTopicComponent', () => {
  let component: SnsTopicComponent;
  let fixture: ComponentFixture<SnsTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
