import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienkhokhanComponent } from './sinhvienkhokhan.component';

describe('SinhvienkhokhanComponent', () => {
  let component: SinhvienkhokhanComponent;
  let fixture: ComponentFixture<SinhvienkhokhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhvienkhokhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienkhokhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
