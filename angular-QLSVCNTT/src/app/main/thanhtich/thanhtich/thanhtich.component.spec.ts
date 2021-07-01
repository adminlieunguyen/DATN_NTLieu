import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhtichComponent } from './thanhtich.component';

describe('ThanhtichComponent', () => {
  let component: ThanhtichComponent;
  let fixture: ComponentFixture<ThanhtichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhtichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhtichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
