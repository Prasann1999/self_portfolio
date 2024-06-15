import { Injectable } from '@angular/core';
import { SkillListService } from './skill-list.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishList: object[] = [];
  removeFromList(skill: any) {
    this.wishList = this.wishList.filter((elem: any, index) => elem?.id !== skill?.id)
    this.skillListService.updateSkillList(skill, 'remove');
  }
  addToList(skill: any) {
    const skillIsPresent = this.wishList?.filter((elem: any, index) => elem?.id === skill?.id)?.length > 0 ? true : false;
    if (skillIsPresent === false) {
      skill.wishList = true;
      this.wishList = [...this.wishList, skill];
      console.log('this.wishList::',this.wishList);
      //update skillList
      this.skillListService.updateSkillList(skill, 'add');
    }
  }
  constructor(
    private skillListService: SkillListService,
  ) { }
}
