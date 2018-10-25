import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProviderFatherComponent } from './view-provider-father.component';

describe('ViewProviderFatherComponent', () => {
  let component: ViewProviderFatherComponent;
  let fixture: ComponentFixture<ViewProviderFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProviderFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProviderFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
