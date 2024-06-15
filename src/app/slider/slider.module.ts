import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsliderComponent } from './skillslider/skillslider.component';



@NgModule({
  declarations: [
    SkillsliderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SkillsliderComponent
  ]
})
export class SliderModule { }
