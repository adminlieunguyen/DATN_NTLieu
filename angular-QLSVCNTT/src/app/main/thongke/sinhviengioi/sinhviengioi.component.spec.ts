import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhviengioiComponent } from './sinhviengioi.component';

describe('SinhviengioiComponent', () => {
  let component: SinhviengioiComponent;
  let fixture: ComponentFixture<SinhviengioiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhviengioiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhviengioiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
