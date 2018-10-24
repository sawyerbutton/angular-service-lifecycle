import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSonComponent } from './host-son.component';

describe('HostSonComponent', () => {
  let component: HostSonComponent;
  let fixture: ComponentFixture<HostSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
