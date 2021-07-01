import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvientbyeuComponent } from './sinhvientbyeu.component';

describe('SinhvientbyeuComponent', () => {
  let component: SinhvientbyeuComponent;
  let fixture: ComponentFixture<SinhvientbyeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhvientbyeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvientbyeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
