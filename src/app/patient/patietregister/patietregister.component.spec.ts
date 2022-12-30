import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatietregisterComponent } from './patietregister.component';

describe('PatietregisterComponent', () => {
  let component: PatietregisterComponent;
  let fixture: ComponentFixture<PatietregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatietregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatietregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
