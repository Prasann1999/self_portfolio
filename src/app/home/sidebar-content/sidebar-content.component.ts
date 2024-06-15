import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FoodNode } from 'src/app/interfacesGlobals';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})


export class SidebarContentComponent implements OnInit {
  TREE_DATA: object[] = [
    {
      name: 'My technologies / skills',
      children: [
        { name: 'Next js' },
        { name: 'React js' },
        { name: 'Redux state management' },
        { name: 'angular' },
        {
          name: 'javascript',
          children: [
            { name: 'core javascript' },
            { name: 'ecmascript' },
            { name: 'typescript' },
          ]
        },
        {
          name: 'design libraries',
          children: [
            { name: 'material UI' },
            { name: 'ant design' },
            { name: 'radix ui' },
            { name: 'bootstrap' },
            { name: 'react strap' },
          ]
        },
        {
          name: 'miscellaneous',
          children: [
            { name: 'Figma' },
            { name: 'Git commands' },
            { name: 'Atlassian JIRA' },
            { name: 'Jenkins' },
            { name: 'C , c++ ,python ,DSA' },
            {
              name: 'Backend',
              children: [
                { name: 'php' },
                { name: 'mysql' },
              ]
            },
            {
              name: 'Graphics Design',
              children: [
                { name: 'photoshop' },
                { name: 'illustrator' },
                { name: 'vector graphics' },
                { name: 'animations & gifs develooment' },
                { name: 'photoshop automation using js' },
              ]
            },
            {
              name: 'Advertisements',
              children: [
                { name: 'facebooks ads' },
                { name: 'google adwards' },
                { name: 'seo' },
              ]
            },
            {
              name: 'Operating Systems',
              children: [
                { name: 'linux Ubuntu' },
                { name: 'windows' },
              ]
            },
            {
              name: 'Engineering',
              children: [
                { name: 'matlab simulink' },
                { name: 'eagle PCB design' },
                { name: 'PSIM simulation' },
                { name: 'Atmel studio' },
                { name: 'Atmega32 microcontroller' },
                { name: 'MSP430 microcontroller' },
                { name: 'microcontroller programming' },
              ]
            },
          ]
        }

      ]
    },
    {
      name: 'Experience',
      children: [
        {
          name: 'Senior Web Developer (SDE1)',
        }, 
        {
          name: 'Graphics Design Head',
        },
      ]
    },
    {
      name: 'Support',
      children: [
        {
          name: 'Contact: 9022368410',
        }, 
        {
          name: 'email: prasann1411999@gmail.com',
        },
      ]
    },
  ];

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

}
