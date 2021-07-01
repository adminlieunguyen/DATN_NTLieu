import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienkhaComponent } from './sinhvienkha.component';

describe('SinhvienkhaComponent', () => {
  let component: SinhvienkhaComponent;
  let fixture: ComponentFixture<SinhvienkhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhvienkhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienkhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
