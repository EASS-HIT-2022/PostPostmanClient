import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorsDashboardComponent } from './monitors-dashboard.component';

describe('MonitorsDashboardComponent', () => {
  let component: MonitorsDashboardComponent;
  let fixture: ComponentFixture<MonitorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
