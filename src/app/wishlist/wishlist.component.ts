import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  host: {
    'class': 'custom-class-component_common'
  }
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
