import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalreportsComponent } from './medicalreports.component';

describe('MedicalreportsComponent', () => {
  let component: MedicalreportsComponent;
  let fixture: ComponentFixture<MedicalreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
