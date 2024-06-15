import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { AlertService } from 'src/app/services/alert.service';
import { SkillListService } from 'src/app/services/skill-list.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @ViewChild('tabGroup', { static: false }) tabGroup: MatTabGroup | undefined;
  submitClickFlag: boolean = false;
  modalType = '';
  skillLevel = new FormControl();
  ratingForm = new FormControl();
  tagsForm = new FormControl();
  yoeForm = new FormControl();
  expType = new FormControl();
  filterData: any = {
    levels: [],
    ownRating: [1, 2, 3, 4, 5],
    tags: ['web development', 'framework', 'frontend', 'library', 'tool', 'backend', 'design library', 'graphics design', 'engineering', 'languages', 'miscellaneous'],
    yoeObj: [{
      value: 0.9,
      title: 'less than year'
    }, {
      value: 1,
      title: 'one year'
    }, {
      value: 2,
      title: 'two years'
    }, {
      value: 3,
      title: 'three years'
    }, {
      value: 3.1,
      title: 'more than three years'
    },],
    experiance_type: [{
      value: 1,
      title: 'from college'
    }, {
      value: 2,
      title: 'from corporate'
    }, {
      value: 3,
      title: 'by self learning'
    },]
  }

  //sort
  sortOptions: string[] = ['ascending', 'descending'];
  yoeSort: string = '';
  ratingSort: string = '';
  // selectedValue:string = '';


  close(): void {
    this.filterModalRef.close();
  }
  submitClick() {
    this.submitClickFlag = true;
    this.filterApply()
  }
  constructor(
    public filterModalRef: MatDialogRef<FilterComponent>,
    private skillsListService: SkillListService,
    private alertService: AlertService,
  ) { }
  removeDuplicates(arr: any) {
    return arr.filter((item: any,
      index: any) => arr.indexOf(item) === index);
  }
  setFilterData(skills: any) {
    const levels = this.removeDuplicates(skills.map((elem: any) => elem?.level) || []);
    this.filterData = {
      ...this.filterData,
      levels,
    }
    console.log('setFilterData::', skills, levels, this.filterData);
  }
  setActiveTab(index: number) {
    // mat tab set tab
    setTimeout(() => {
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = index;
      }
    }, 500)
  }

  ngAfterViewInit(): void {
    // Here you can safely access this.tabGroup
    this.modalType = this.filterModalRef?._containerInstance?._config?.data?.dataKey;
    if (this.modalType === 'sort' && this.tabGroup) {
      this.setActiveTab(0);
    } else if (this.modalType === 'filter' && this.tabGroup) {
      this.setActiveTab(1);
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.skillsListService?.skillData, this.skillsListService?.filterValuesPrev);
    const filterValuesPrev = this.skillsListService?.filterValuesPrev;
    if (Object.keys(filterValuesPrev).length !== 0) {
      console.log('here::: sort', filterValuesPrev?.ratingSort, 'yoeSort::', filterValuesPrev?.yoeSort);
      for (const [key, value] of Object.entries(filterValuesPrev)) {
        if (Array.isArray(value) && value?.length > 0) {
          console.log('value:: sort', value, 'key::', key);
          switch (key) {
            case 'skillLevel': {
              this.skillLevel.setValue(filterValuesPrev?.skillLevel);
              break;
            }
            case 'tags': {
              this.tagsForm.setValue(filterValuesPrev?.tags);
              break;
            }
            case 'rating': {
              this.ratingForm.setValue(filterValuesPrev?.rating);
              break;
            }
            case 'ratingSort': {
              this.ratingSort = filterValuesPrev?.ratingSort?.[0];
              break;
            }
            case 'yoeSort': {
              this.yoeSort = filterValuesPrev?.yoeSort?.[0];
              break;
            }
            default:
              console.log('Unknown fruit.');
          }
        }
      }
      // if (filterValuesPrev?.skillLevel) {
      //   this.skillLevel.setValue(filterValuesPrev?.skillLevel);
      //   console.log('this.skillLevel::', this.skillLevel);
      // }
    }
    this.setFilterData(this.skillsListService?.skillData);
  }
  resetClick() {
    this.skillsListService.resetSkills();
    this.alertService.changeAlertType('Filter reset successfully', 'success');
    this.close();
  }
  filterApply() {
    const filterObj = {
      expType: this.expType.value,
      yoe: this.tagsForm.value,
      rating: this.ratingForm.value,
      skillLevel: this.skillLevel.value,
      tags: this.tagsForm.value,
      yoeSort: [this.yoeSort],
      ratingSort: [this.ratingSort],
    }
    console.log('filterApply::', filterObj)
    this.skillsListService.getSkills(filterObj);
    this.alertService.changeAlertType('Filter applied successfully', 'success');
    this.close();
  }
}
