import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetquahoctapComponent } from './ketquahoctap.component';

describe('KetquahoctapComponent', () => {
  let component: KetquahoctapComponent;
  let fixture: ComponentFixture<KetquahoctapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquahoctapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetquahoctapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
