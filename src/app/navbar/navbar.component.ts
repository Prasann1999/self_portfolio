import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';
import { SkillListService } from '../services/skill-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    'class': 'custom-class-component_common'
  }
})
export class NavbarComponent implements OnInit {
  selectedMenu: any = 'home';
  openSideBar: any = false;
  skillList: any = [];
  menus = [{
    name: 'Menu',
    value: 'menu',
    url: ''
  }, {
    name: 'Home',
    value: 'home',
    url: '/'
  }, {
    name: 'Wishlist',
    value: 'wish',
    url: '/save-for-later'
  }, {
    name: 'My Resume',
    value: 'resume',
    url: '/projects/prasann-patil-senior-web-dev-resume'
  }, {
    name: 'Projects',
    value: 'projects',
    url: '/projects'
  }, {
    name: 'skills',
    value: 'skills',
    url: '/skills'
  }]
  showSearchResultFlag: boolean = false;
  searchResults: any = [];
  sideModalOpen() {
    this.openSideBar = true;
    this.globalService.changeSideBar(true);
    console.log('HERE', this.openSideBar);
  }
  selectMenu(menu: any) {
    console.log('menu::', menu);
    if (menu.value === 'menu') {
      this.globalService.changeSideBar(true);
    }
    this.selectedMenu = menu?.value;
  }
  searchBySubstring(array: any, key: any, substring: any) {
    const result1 = array.filter((object: any) => object[key]?.toLowerCase().includes(substring?.toLowerCase()));
    return result1
  }
  showSearchResult(show: boolean, searchText: any) {
    if (show) {
      console.log('TSS showSearchResult::', show, 'searchText::', searchText);
      const data = this.skillList;
      const result = this.searchBySubstring(data, 'heading', searchText);
      this.searchResults = result;
      console.log('result::', result);
    }
    this.showSearchResultFlag = show;
  }
  go(elem: any) {
    this.router.navigate([`../skills/${elem?.slug}`], { relativeTo: this.route });
  }
  elemClick(elem: any) {
    console.log('here:::', `/skills/${elem?.slug}`);
    this.go(elem);
    // window.open(`/skills/${elem?.slug}`, '_self')
    // this.router.navigate([`/skills/${elem?.slug}`]); 
  }
  constructor(
    private globalService: GlobalsService,
    private skillListService: SkillListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.skillList = this.skillListService.skillData;
    console.log('TSS skillListService', this.skillList);
    window.addEventListener('scroll', function () {
      const fixedDiv = document.getElementById('menu_list_id');
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust the scroll position threshold as needed
      const threshold = 200;
      if (fixedDiv) {
        if (scrollY > threshold) {
          fixedDiv.classList.add('menu_fixed');
          fixedDiv.classList.remove('menu_relative');
        } else {
          fixedDiv.classList.add('menu_relative');
          fixedDiv.classList.remove('menu_fixed');
        }
      }

    });
  }

}
