import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostFatherComponent } from './host-father.component';

describe('HostFatherComponent', () => {
  let component: HostFatherComponent;
  let fixture: ComponentFixture<HostFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
