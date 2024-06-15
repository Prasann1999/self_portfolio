import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsliderComponent } from './skillslider.component';

describe('SkillsliderComponent', () => {
  let component: SkillsliderComponent;
  let fixture: ComponentFixture<SkillsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
