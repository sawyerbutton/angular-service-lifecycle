import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProviderSonComponent } from './view-provider-son.component';

describe('ViewProviderSonComponent', () => {
  let component: ViewProviderSonComponent;
  let fixture: ComponentFixture<ViewProviderSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProviderSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProviderSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
