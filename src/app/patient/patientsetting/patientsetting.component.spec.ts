import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsettingComponent } from './patientsetting.component';

describe('PatientsettingComponent', () => {
  let component: PatientsettingComponent;
  let fixture: ComponentFixture<PatientsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
