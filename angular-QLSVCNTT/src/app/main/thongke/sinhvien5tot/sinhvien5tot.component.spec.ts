import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinhvien5totComponent } from './sinhvien5tot.component';

describe('Sinhvien5totComponent', () => {
  let component: Sinhvien5totComponent;
  let fixture: ComponentFixture<Sinhvien5totComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinhvien5totComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinhvien5totComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
