import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projests',
  templateUrl: './projests.component.html',
  styleUrls: ['./projests.component.css']
})
export class ProjestsComponent implements OnInit {
  projectLists:any = [];
  projectListsStatic = [
    {
      id: 3,
      name: 'Skill detail page',
      des: 'developed from scratch consisits of multiple functionallity like contact form ,validations,wishlist,..',
      img: 'assets/sdp.jpg',
      slug:'skills/next',
      showHome:false,

    },
    {
      id: 54444,
      name: 'My Resume',
      des: 'My resume/CV in details',
      img: 'assets/resume_thumb.jpeg',
      slug:'projects/prasann-patil-senior-web-dev-resume',
      showHome:true,
    },
    {
      id: 4,
      name: 'Weather app',
      des: 'developed from scratch consists of multiple functionallity like api calls, form,..',
      img: 'assets/weather.jpg',
      slug:'projects/weather',
      showHome:true,

    },
    {
      id: 4,
      name: 'To do list',
      des: 'developed from scratch consists of create,delete,edit,update functions',
      img: 'assets/todo.jpg',
      slug:'projects/todo',
      showHome:true,
    },
    {
      id: 1,
      name: 'Countdown Timer',
      des: 'developed from scratch by using angular services and setInterval',
      img: 'assets/timer.jpg',
      slug:'projects/timer',
      showHome:false,

    },
    {
      id: 2,
      name: 'Skills Listing page',
      des: 'developed from scratch,consists of multiple functionallity like filter,wishlist,sort,cards ,...',
      img: 'assets/skillss.jpg',
      slug:'skills',
      showHome:true,

    },
  ]
  @Input() from:any='list';
  constructor() { }

  ngOnInit(): void {
    if(this.from === 'home'){
      this.projectLists = this.projectListsStatic?.filter((elem,index)=>elem?.showHome);
    }else{
      this.projectLists = this.projectListsStatic;
    }
  }

}
