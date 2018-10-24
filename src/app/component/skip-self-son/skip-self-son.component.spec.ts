import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipSelfSonComponent } from './skip-self-son.component';

describe('SkipSelfSonComponent', () => {
  let component: SkipSelfSonComponent;
  let fixture: ComponentFixture<SkipSelfSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipSelfSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipSelfSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
