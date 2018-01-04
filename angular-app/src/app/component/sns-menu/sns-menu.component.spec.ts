import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsMenuComponent } from './sns-menu.component';

describe('SnsMenuComponent', () => {
  let component: SnsMenuComponent;
  let fixture: ComponentFixture<SnsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
