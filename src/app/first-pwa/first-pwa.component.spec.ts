import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPwaComponent } from './first-pwa.component';

describe('FirstPwaComponent', () => {
  let component: FirstPwaComponent;
  let fixture: ComponentFixture<FirstPwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
