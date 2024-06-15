import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  bgColorStyleBinding = 'green';
  bgColorStyleBindingLogo = 'green';
  lightTitle = 'green';
  wishList(skill:any){
    console.log('wishlist clicked',skill);
    this.wishListService.addToList(skill);
  }
  getRandomDarkColor():string {
    const randomValue = () => Math.floor(Math.random() * 128); // Generates a number between 0 and 127
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    return `rgb(${r}, ${g}, ${b})`;
  }
  getRandomLightColor() {
    const randomValue = () => Math.floor(Math.random() * 128) + 128; // Generates a number between 128 and 255
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    return `rgb(${r}, ${g}, ${b})`;
  }
  


  removeWishList(skill:any){
    this.wishListService.removeFromList(skill);
  }
  constructor(
    private wishListService: WishlistService,
  ) { }
  @Input() skill:any = {};
  @Input() from:any = 'list';
  ngOnInit(): void {
    console.log('wishListService::',this.wishListService.wishList);
    this.bgColorStyleBinding = this.getRandomDarkColor();
    this.bgColorStyleBindingLogo = this.getRandomDarkColor();
    this.lightTitle = this.getRandomLightColor();
  }

}
