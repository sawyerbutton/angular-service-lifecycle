import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualInjectorSonComponent } from './manual-injector-son.component';

describe('ManualInjectorSonComponent', () => {
  let component: ManualInjectorSonComponent;
  let fixture: ComponentFixture<ManualInjectorSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualInjectorSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualInjectorSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
