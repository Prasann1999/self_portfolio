import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjestsComponent } from './projests.component';

describe('ProjestsComponent', () => {
  let component: ProjestsComponent;
  let fixture: ComponentFixture<ProjestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
