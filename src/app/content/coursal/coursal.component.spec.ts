import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursalComponent } from './coursal.component';

describe('CoursalComponent', () => {
  let component: CoursalComponent;
  let fixture: ComponentFixture<CoursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
