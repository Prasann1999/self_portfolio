import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css']
})
export class DataContainerComponent implements OnInit {
  locationUrl:any = window.location.pathname?.toString()?.slice(1);
  constructor(private router : Router) { }

  ngOnInit(): void {
    // this.href = this.router.url;
    // console.log('url::',this.router.url);
  }

}
