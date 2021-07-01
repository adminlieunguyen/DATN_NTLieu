import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatrinhhoctapComponent } from './quatrinhhoctap.component';

describe('QuatrinhhoctapComponent', () => {
  let component: QuatrinhhoctapComponent;
  let fixture: ComponentFixture<QuatrinhhoctapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuatrinhhoctapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatrinhhoctapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
