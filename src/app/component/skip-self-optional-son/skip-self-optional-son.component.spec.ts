import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipSelfOptionalSonComponent } from './skip-self-optional-son.component';

describe('SkipSelfOptionalSonComponent', () => {
  let component: SkipSelfOptionalSonComponent;
  let fixture: ComponentFixture<SkipSelfOptionalSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipSelfOptionalSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipSelfOptionalSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
