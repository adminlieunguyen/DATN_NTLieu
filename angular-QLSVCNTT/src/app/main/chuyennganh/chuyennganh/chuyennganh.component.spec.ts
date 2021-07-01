import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyennganhComponent } from './chuyennganh.component';

describe('ChuyennganhComponent', () => {
  let component: ChuyennganhComponent;
  let fixture: ComponentFixture<ChuyennganhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyennganhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyennganhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
