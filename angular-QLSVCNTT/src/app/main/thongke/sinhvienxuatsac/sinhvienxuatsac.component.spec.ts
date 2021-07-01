import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienxuatsacComponent } from './sinhvienxuatsac.component';

describe('SinhvienxuatsacComponent', () => {
  let component: SinhvienxuatsacComponent;
  let fixture: ComponentFixture<SinhvienxuatsacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhvienxuatsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienxuatsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
