import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSonComponent } from './self-son.component';

describe('SelfSonComponent', () => {
  let component: SelfSonComponent;
  let fixture: ComponentFixture<SelfSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
