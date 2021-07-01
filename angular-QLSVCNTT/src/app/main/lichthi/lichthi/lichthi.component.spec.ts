import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichthiComponent } from './lichthi.component';

describe('LichthiComponent', () => {
  let component: LichthiComponent;
  let fixture: ComponentFixture<LichthiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichthiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
