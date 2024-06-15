import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {
  starsArray: number[] = [];
  emptyStars: number[] = [];
  constructor() { }
  @Input() rating = 0;
  ngOnInit(): void {
    let newArray = new Array();
    for (let i = 0; i < this.rating; i++) {
      newArray.push(i + 1);
    }
    this.starsArray = newArray;
    newArray = [];
    for (let i = 0; i < (5 - this.rating); i++) {
      newArray.push(i + 1);
    }
    this.emptyStars = newArray;
  }

}
