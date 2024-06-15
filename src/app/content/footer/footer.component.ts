import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  host: {
    'class': 'custom-class-component_common'
  }

})
export class FooterComponent implements OnInit {
  openwhatsapp() {
    const str = `https://wa.me/9075916336?text= + ${encodeURIComponent('Hello Prasann! ,I would like to connect you regarding your resume !')}`;
    console.log('str::',str);
    window.open(str);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
