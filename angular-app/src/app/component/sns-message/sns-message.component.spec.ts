import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsMessageComponent } from './sns-message.component';

describe('SnsMessageComponent', () => {
  let component: SnsMessageComponent;
  let fixture: ComponentFixture<SnsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
