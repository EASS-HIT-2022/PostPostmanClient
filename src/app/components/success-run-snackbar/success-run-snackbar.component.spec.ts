import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRunSnackbarComponent } from './success-run-snackbar.component';

describe('SuccessRunSnackbarComponent', () => {
  let component: SuccessRunSnackbarComponent;
  let fixture: ComponentFixture<SuccessRunSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRunSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessRunSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
