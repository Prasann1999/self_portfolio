import { Component, OnInit, AfterViewInit } from '@angular/core';
// import {Swiper} from 'swiper';
import Swiper from 'swiper';
// import {Pagination} from 'swiper';
// import {Navigation} from 'swiper';

// Swiper.use([Pagination, Navigation]); 

@Component({
  selector: 'app-skillslider',
  templateUrl: './skillslider.component.html',
  styleUrls: ['./skillslider.component.css']
})
export class SkillsliderComponent implements OnInit {

  constructor() { }

  AfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
  ngOnInit(): void {
  }

}
