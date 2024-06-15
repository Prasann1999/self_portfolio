import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class SkillListService {
  myObservableSkill: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  skillData: any = [
    {
      id: 1,
      heading: 'Next Js',
      logo: "assets/nextLogo.svg",
      thumbnail: "assets/next.png",
      description: 'Next.js is a React framework that enables server-side rendering, static site generation, and seamless API routes, enhancing performance and scalability. It provides a robust environment for building highly optimized, SEO-friendly web applications.',
      level: 'expert',
      slug: 'next',
      tags: ['web development', 'framework', 'frontend'],
      ratingNum: 5,
      yoeObj: 3.5,
      features: [
        { featureTitle: 'Server-side Rendering', featureDescription: 'Pre-renders pages on the server for faster load times.' },
        { featureTitle: 'Static Site Generation', featureDescription: 'Generates static pages at build time for optimal performance.' },
        { featureTitle: 'API Routes', featureDescription: 'Build API endpoints directly within the Next.js app.' }
      ]
    },
    {
      id: 2,
      heading: 'React Js',
      logo: "assets/react.webp",
      thumbnail: "assets/react.jpg",
      description: 'React.js is a JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture. It allows developers to create reusable UI components and manage state efficiently with a declarative programming style.',
      level: 'expert',
      slug: 'react',
      yoeObj: 3.5,
      ratingNum: 5,
      tags: ['web development', 'framework', 'frontend', 'library'],
      features: [
        { featureTitle: 'Component-Based', featureDescription: 'Build encapsulated components that manage their own state.' },
        { featureTitle: 'Virtual DOM', featureDescription: 'Efficiently updates and renders only the necessary components.' },
        { featureTitle: 'Hooks', featureDescription: 'Use state and other React features without writing a class.' }
      ]

    },
    {
      id: 3,
      heading: 'Angular',
      logo: "assets/angular_logo.png",
      thumbnail: "assets/angular.webp",
      description: 'Angular is a comprehensive, TypeScript-based web application framework developed by Google, designed for building dynamic, single-page applications. It offers robust features like two-way data binding, dependency injection, and a modular architecture, enabling scalable and maintainable web development.',
      level: 'expert',
      slug: 'angular',
      ratingNum: 5,
      yoeObj: 3.5,
      tags: ['web development', 'framework', 'frontend'],
      features: [
        { featureTitle: 'Two-Way Data Binding', featureDescription: 'Synchronizes data between model and view automatically.' },
        { featureTitle: 'Dependency Injection', featureDescription: 'Provides an efficient way to inject dependencies in components and services.' },
        { featureTitle: 'Component-Based Architecture', featureDescription: 'Encourages modular development with encapsulated components.' }
      ]
    },
    {
      id: 5,
      heading: 'Javascript',
      description: 'JavaScript is a versatile, high-level programming language widely used for creating interactive and dynamic web content.',
      level: 'expert',
      yoeObj: 5,
      ratingNum: 5,
      tags: ['web development', 'frontend', 'languages'],
      features: [
        { featureTitle: 'Dynamic Typing', featureDescription: 'Allows variables to hold multiple types of values.' },
        { featureTitle: 'First-Class Functions', featureDescription: 'Treats functions as first-class citizens, allowing functions to be passed as arguments.' },
        { featureTitle: 'Prototypal Inheritance', featureDescription: 'Objects can inherit properties directly from other objects.' }
      ]
    },
    {
      id: 6,
      heading: 'Ecmascript',
      description: 'ECMAScript is the standardized scripting language specification that serves as the foundation for JavaScript and other implementations.',
      level: 'expert',
      ratingNum: 5,
      yoeObj: 3.5,
      tags: ['web development', 'frontend', 'languages'],
      features: [
        { featureTitle: 'Standardized Scripting Language', featureDescription: 'Defines the core features of JavaScript.' },
        { featureTitle: 'Arrow Functions', featureDescription: 'Provides a concise syntax for writing function expressions.' },
        { featureTitle: 'Classes', featureDescription: 'Enables the creation of object-oriented code using class syntax.' }
      ]
    }, {
      id: 7,
      heading: 'Typescript',
      description: 'TypeScript is a statically typed superset of JavaScript that adds optional type checking and modern JavaScript features, enhancing code quality and maintainability.',
      level: 'expert',
      ratingNum: 5,
      yoeObj: 3.5,
      tags: ['web development', 'frontend', 'languages'],
      features: [
        { featureTitle: 'Static Typing', featureDescription: 'Adds type annotations to JavaScript for improved code quality.' },
        { featureTitle: 'Interfaces', featureDescription: 'Defines custom types for object shapes and contract enforcement.' },
        { featureTitle: 'Compile-Time Error Checking', featureDescription: 'Detects errors during development before code is run.' }
      ]
    },
    {
      id: 8,
      heading: 'Redux State Management',
      tags: ['frontend', 'library', 'tool', 'engineering', 'miscellaneous'],
      description: 'Redux is a predictable state management library for JavaScript applications, enabling centralized and consistent state updates through actions and reducers.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Single Source of Truth', featureDescription: 'Stores the entire application state in a single state tree.' },
        { featureTitle: 'Predictable State Updates', featureDescription: 'Uses pure functions called reducers to describe state changes.' },
        { featureTitle: 'Middleware Support', featureDescription: 'Enhances dispatching actions with custom middleware logic.' }
      ]
    },
    {
      id: 9,
      heading: 'HTML',
      tags: ['web development', 'frontend', 'languages'],
      description: 'HTML (HyperText Markup Language) is used for structuring and presenting content on the World Wide Web, consisting of elements like tags, attributes, and text.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Markup Language', featureDescription: 'Defines the structure of web pages using tags.' },
        { featureTitle: 'Semantic Elements', featureDescription: 'Uses tags to convey the meaning of content for better accessibility and SEO.' },
        { featureTitle: 'Forms and Inputs', featureDescription: 'Provides elements to create interactive forms for user input.' }
      ]
    }, {
      id: 10,
      heading: 'CSS',
      tags: ['web development', 'framework', 'languages'],
      description: 'CSS (Cascading Style Sheets) is used for styling and formatting web documents, enhancing their visual appearance and layout across different devices and screen sizes.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Styling Language', featureDescription: 'Describes how HTML elements are to be displayed on screen.' },
        { featureTitle: 'Flexbox', featureDescription: 'Provides a layout model for arranging elements in one-dimensional space.' },
        { featureTitle: 'Grid Layout', featureDescription: 'Defines a two-dimensional grid-based layout system.' }
      ]
    },
    {
      id: 11,
      heading: 'JQuery',
      tags: ['web development', 'frontend', 'library', 'languages', 'miscellaneous'],
      description: 'jQuery is a fast, small, and feature-rich JavaScript library that simplifies interaction between HTML and JavaScript, providing powerful methods for DOM manipulation, event handling, and AJAX requests.',
      level: 'expert',
      ratingNum: 5,
      features: [
        { featureTitle: 'DOM Manipulation', featureDescription: 'Simplifies HTML document traversing, event handling, and animating.' },
        { featureTitle: 'Cross-Browser Compatibility', featureDescription: 'Ensures scripts work across different browsers.' },
        { featureTitle: 'AJAX Support', featureDescription: 'Simplifies asynchronous HTTP requests.' }
      ],
      yoeObj: 3.5,
    },
    {
      id: 12,
      heading: 'Material UI',
      tags: ['web development', 'frontend', 'library', 'design library'],
      description: `Material-UI is a popular React UI framework that implements Google's Material Design guidelines, offering pre-designed components and styles for building modern, responsive web applications.`,
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'React Components', featureDescription: 'Provides pre-built React components following Material Design guidelines.' },
        { featureTitle: 'Theming', featureDescription: 'Allows customization of component themes.' },
        { featureTitle: 'Responsive Design', featureDescription: 'Ensures components adapt to different screen sizes.' }
      ]
    }, {
      id: 13,
      heading: 'Ant Design',
      tags: ['web development', 'frontend', 'library', 'design library'],
      description: `Ant Design is a comprehensive React UI library with a full suite of components and design principles for building enterprise-level web applications with ease.`,
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Enterprise-Grade Components', featureDescription: 'Offers a comprehensive suite of components for enterprise applications.' },
        { featureTitle: 'Internationalization', featureDescription: 'Supports multiple languages and locales.' },
        { featureTitle: 'Design System', featureDescription: 'Follows a cohesive design system for building UIs.' }
      ]
    },
    {
      id: 14,
      heading: 'Radix UI',
      tags: ['web development', 'framework', 'frontend', 'library', 'tool', 'backend', 'design library', 'graphics design', 'engineering', 'languages', 'miscellaneous'],
      description: 'Radix UI is a design system and component library for building accessible, performant, and themeable user interfaces in React.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Primitives', featureDescription: 'Provides low-level UI components with high customizability.' },
        { featureTitle: 'Accessibility', featureDescription: 'Ensures components are accessible out of the box.' },
        { featureTitle: 'Unstyled Components', featureDescription: 'Allows complete control over component styling.' }
      ]
    },
    {
      id: 15,
      heading: 'Swiper Js',
      tags: ['web development', 'frontend', 'library', 'design library'],
      description: 'Swiper.js is a modern, mobile-friendly JavaScript library for creating touch-enabled sliders and carousels on websites and web applications.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Touch Slider', featureDescription: 'Enables touch-friendly carousels and sliders.' },
        { featureTitle: 'Mobile-Friendly', featureDescription: 'Optimized for mobile devices with native-like touch gestures.' },
        { featureTitle: 'Modular Architecture', featureDescription: 'Allows importing only the features you need.' }
      ]
    },
    {
      id: 16,
      heading: 'Chart js',
      tags: ['web development', 'frontend', 'library', 'design library'],
      description: 'JavaScript library for creating interactive charts and graphs.',
      level: 'intermediate',
      ratingNum: 5,
      yoeObj: 2,
      features: [
        { featureTitle: 'Simple Yet Flexible', featureDescription: 'Provides easy-to-use charting tools with flexibility for customization.' },
        { featureTitle: 'Interactive Charts', featureDescription: 'Supports interactive features like tooltips and animations.' },
        { featureTitle: 'Multiple Chart Types', featureDescription: 'Includes bar, line, pie, and other common chart types.' }
      ]
    },
    {
      id: 17,
      heading: 'Bootstrap',
      tags: ['web development', 'frontend', 'library', 'design library'],
      description: 'Front-end framework for designing responsive and mobile-first websites.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'Responsive Design', featureDescription: 'Provides a grid system and responsive classes for adaptive layouts.' },
        { featureTitle: 'Pre-styled Components', featureDescription: 'Offers a variety of ready-to-use UI components.' },
        { featureTitle: 'Customizable', featureDescription: 'Allows easy theming and customization through variables and mixins.' }
      ]
    },
    {
      id: 18,
      heading: 'Reactstrap',
      tags: ['web development', 'frontend', 'library', 'design library'],
      description: 'React components library based on Bootstrap for faster and easier web development.',
      level: 'expert',
      ratingNum: 5,
      yoeObj: 3.5,
      features: [
        { featureTitle: 'Bootstrap 4 Components', featureDescription: 'Provides React components based on Bootstrap 4.' },
        { featureTitle: 'Customizable', featureDescription: 'Easily customizable through Bootstrap variables and classes.' },
        { featureTitle: 'Flexibility', featureDescription: 'Integrates seamlessly with React applications.' }
      ]
    },
    {
      id: 19,
      heading: 'Postman',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'API client that simplifies the testing and development of APIs.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 5,
      features: [
        { featureTitle: 'API Testing', featureDescription: 'Facilitates the testing and debugging of APIs.' },
        { featureTitle: 'Automated Testing', featureDescription: 'Allows creation of automated API test suites.' },
        { featureTitle: 'Collaboration', featureDescription: 'Enables sharing and collaboration on API requests and collections.' }
      ]
    },
    {
      id: 20,
      heading: 'Swagger',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'Framework for designing, building, and documenting RESTful APIs.',
      level: 'intermediate',
      yoeObj: 2,
      ratingNum: 4,
      features: [
        { featureTitle: 'API Documentation', featureDescription: 'Automatically generates interactive API documentation.' },
        { featureTitle: 'API Design', featureDescription: 'Assists in designing and defining RESTful APIs.' },
        { featureTitle: 'Code Generation', featureDescription: 'Generates client and server code from API definitions.' }
      ]
    },
    {
      id: 21,
      heading: 'Figma',
      tags: ['tool', 'design library', 'graphics design', 'miscellaneous'],
      description: 'Collaborative interface design tool for creating user interfaces and prototypes.',
      level: 'intermediate',
      yoeObj: 3.5,
      ratingNum: 4,
      features: [
        { featureTitle: 'Collaborative Design', featureDescription: 'Enables real-time collaboration on design projects.' },
        { featureTitle: 'Prototyping', featureDescription: 'Allows creation of interactive prototypes.' },
        { featureTitle: 'Design Systems', featureDescription: 'Helps manage and maintain design systems.' }
      ]
    },
    {
      id: 22,
      heading: 'Git',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'Version control system for tracking changes in source code during software development.',
      level: 'expert',
      ratingNum: 4,
      yoeObj: 3.5,
      features: [
        { featureTitle: 'Version Control', featureDescription: 'Tracks changes in source code over time.' },
        { featureTitle: 'Branching', featureDescription: 'Supports branching and merging for collaborative development.' },
        { featureTitle: 'Distributed System', featureDescription: 'Allows multiple developers to work on a project simultaneously.' }
      ]
    },
    {
      id: 22,
      heading: 'GitHub',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'Platform for hosting Git repositories and collaboration on code projects.',
      level: 'expert',
      yoeObj: 3.5,
      ratingNum: 4,
      features: [
        { featureTitle: 'Repository Hosting', featureDescription: 'Hosts Git repositories for version control and collaboration.' },
        { featureTitle: 'Pull Requests', featureDescription: 'Facilitates code reviews and merges through pull requests.' },
        { featureTitle: 'Issue Tracking', featureDescription: 'Provides issue tracking and project management features.' }
      ]
    },
    {
      id: 23,
      heading: 'Jira',
      tags: ['tool', 'miscellaneous'],
      description: 'Issue tracking and project management tool for agile teams.',
      level: 'intermediate',
      yoeObj: 3.5,
      ratingNum: 4,
      features: [
        { featureTitle: 'Project Management', featureDescription: 'Supports agile project management with boards and sprints.' },
        { featureTitle: 'Issue Tracking', featureDescription: 'Tracks issues and tasks within projects.' },
        { featureTitle: 'Reporting', featureDescription: 'Offers comprehensive reporting tools for project insights.' }
      ]
    },
    {
      id: 24,
      heading: 'PHP',
      tags: ['web development', 'backend', 'languages'],
      description: 'Server-side scripting language for web development, widely used for building dynamic websites.',
      level: 'intermediate',
      ratingNum: 3,
      yoeObj: 1,
      features: [
        { featureTitle: 'Server-Side Scripting', featureDescription: 'Executes code on the server to generate dynamic web content.' },
        { featureTitle: 'Database Integration', featureDescription: 'Easily integrates with various databases like MySQL.' },
        { featureTitle: 'Wide Adoption', featureDescription: 'Used widely for building web applications and services.' }
      ]
    },
    {
      id: 25,
      heading: 'Node.js',
      tags: ['backend', 'languages'],
      description: 'JavaScript runtime environment that allows developers to run JavaScript code outside a web browser.',
      level: 'intermediate',
      yoeObj: 1,
      ratingNum: 2,
      features: [
        { featureTitle: 'Event-Driven', featureDescription: 'Uses an event-driven architecture for handling asynchronous operations.' },
        { featureTitle: 'Non-Blocking I/O', featureDescription: 'Performs non-blocking I/O operations for high performance.' },
        { featureTitle: 'JavaScript Runtime', featureDescription: 'Runs JavaScript on the server-side using the V8 engine.' }
      ]
    },
    {
      id: 26,
      heading: 'MySQL',
      tags: ['backend', 'miscellaneous'],
      description: 'Open-source relational database management system for storing and managing data.',
      level: 'intermediate',
      yoeObj: 1,
      ratingNum: 3,
      features: [
        { featureTitle: 'Relational Database', featureDescription: 'Organizes data into tables with relationships between them.' },
        { featureTitle: 'SQL Support', featureDescription: 'Uses Structured Query Language (SQL) for database operations.' },
        { featureTitle: 'Scalability', featureDescription: 'Scales easily for both small and large applications.' }
      ]
    },
    {
      id: 27,
      heading: 'Google Apps Scripting',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'JavaScript-based platform for extending Google Workspace applications and automating tasks.',
      level: 'intermediate',
      ratingNum: 3,
      yoeObj: 1,
      features: [
        { featureTitle: 'Automation', featureDescription: 'Automates tasks across Google Workspace applications.' },
        { featureTitle: 'Scripting Language', featureDescription: 'Uses JavaScript to interact with Google services.' },
        { featureTitle: 'Custom Functions', featureDescription: 'Allows creation of custom functions and add-ons for Google Apps.' }
      ]
    },
    {
      id: 28,
      heading: 'Jenkins CI/CD',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'Automation server used for continuous integration and continuous delivery/continuous deployment.',
      level: 'intermediate',
      yoeObj: 2,
      ratingNum: 3,
      features: [
        { featureTitle: 'Continuous Integration', featureDescription: 'Automates the process of integrating code changes frequently.' },
        { featureTitle: 'Continuous Deployment', featureDescription: 'Automates deployment of applications to production.' },
        { featureTitle: 'Plugins', featureDescription: 'Offers a wide range of plugins to extend functionality.' }
      ]
    },
    {
      id: 29,
      heading: 'Bitbucket',
      tags: ['tool', 'engineering', 'miscellaneous'],
      description: 'Git repository management solution for hosting and collaborating on code projects.',
      level: 'intermediate',
      yoeObj: 1.1,
      ratingNum: 2,
      features: [
        { featureTitle: 'Git Repository Management', featureDescription: 'Provides hosting for Git repositories.' },
        { featureTitle: 'Pull Requests', featureDescription: 'Enables collaborative code review and merges.' },
        { featureTitle: 'Integrations', featureDescription: 'Integrates with Jira, Jenkins, and other development tools.' }
      ]
    },
  ]
  skillDataFilter: any = this.skillData;
  filterValuesPrev: any = {};

  filterSkillsValue(value: any, key: any, filterData: any): any {
    console.log('value::', value, 'key::', key, 'filterData::', filterData);
    let data: any[] = [];
    if (key === 'tags') {
      for (let i = 0; i < value.length; i++) {
        let selectedTag = value[i];
        for (let j = 0; j < filterData.length; j++) {
          let tagsofSkill = filterData[j]?.tags;
          console.log('tagsofSkill::', tagsofSkill);
          if (tagsofSkill?.includes(selectedTag)) {
            const isElemPresentInData = data?.filter((elem, index) => elem?.id === filterData[j]?.id);
            if (isElemPresentInData?.length === 0) {
              data.push(filterData[j]);
            }

          }
        }

      }
    } else {
      for (let i = 0; i < value.length; i++) {
        data = filterData.filter((elem: any, index: any) => {
          if (Array.isArray(elem?.[key]) && elem?.[key]?.length > 0) {
            for (let i = 0; i < elem?.[key].length; i++) {
              if (value.includes(elem?.[key][i])) {
                return true; // If found, return true
              } else {
                return false;
              }
            }
          } else {
            return value.includes(elem?.[key])
          }
        })
      }
    }
    console.log('data::', data);
    return data;
  }
  resetSkills(): any {
    this.filterValuesPrev = {};
    this.updateSkillDataFilter(this.skillData);
  }
  sortSkillsValue(value: any, key: any, filterData: any): any {
    const sortType = value?.[0];
    let data: any = filterData;
    if (key === 'ratingNum') {
      if (sortType === 'ascending') {
        data.sort((a: any, b: any) => a.ratingNum - b.ratingNum);
      } else {
        data.sort((a: any, b: any) => b.ratingNum - a.ratingNum);
      }
    } else if (key === 'yoeObj') {
      console.log('HERE yoeObj', key);
      if (sortType === 'ascending') {
        data.sort((a: any, b: any) => a.yoeObj - b.yoeObj);
      } else {
        data.sort((a: any, b: any) => b.yoeObj - a.yoeObj);
      }
    }
    console.log('value::sort', value, 'key::', key, 'filterData::', filterData);
    return data;
  }

  getSkills(filterObj: any): any {
    this.filterValuesPrev = filterObj;
    console.log('inside getSkills', filterObj);
    let filterData = this.skillData;
    for (const [key, value] of Object.entries(filterObj)) {
      if (Array.isArray(value) && value?.length > 0) {
        console.log('value::', value, 'key::', key);
        switch (key) {
          case 'skillLevel': {
            filterData = this.filterSkillsValue(value, 'level', filterData);
            console.log('skillLevel:', value, 'filterData::', filterData);
            break;
          }
          case 'tags': {
            filterData = this.filterSkillsValue(value, 'tags', filterData);
            console.log('tags::', value, 'filterData::', filterData);
            break;
          }
          case 'rating': {
            filterData = this.filterSkillsValue(value, 'ratingNum', filterData);
            console.log('tags::', value, 'filterData::', filterData);
            break;
          }
          case 'ratingSort': {
            filterData = this.sortSkillsValue(value, 'ratingNum', filterData);
            console.log('tags::', value, 'filterData::', filterData);
            break;
          }
          case 'yoeSort': {
            if (value?.[0] !== '') {
              filterData = this.sortSkillsValue(value, 'yoeObj', filterData);
              console.log('tags::', value, 'filterData::', filterData);
            }

            break;
          }

          default:
            console.log('Unknown fruit.');
        }
      }
    }

    this.skillDataFilter = filterData;
    this.updateSkillDataFilter(filterData);
    return filterData
  }
  updateSkillList(skill: any, addRemove: string) { // wishlist add and remove function

    console.log('skillDataFilter::', this.skillDataFilter, 'wishlist::', skill);
    let wishListFilterData = this.skillDataFilter?.map((elem: any, index: any) => {
      if (elem?.id === skill?.id) {
        const skillElem = this.skillData.find((elem: { id: any; }, index: any) => elem?.id === skill?.id);
        skillElem.wishList = addRemove === 'add' ? true : false;
        return {
          ...elem,
          wishList: addRemove === 'add' ? true : false,
        }
      } else {
        return {
          ...elem,
        }
      }
    })
    this.skillDataFilter = wishListFilterData;
    // this.skillData = wishListFilterData;
    console.log('wishListFilterData::', wishListFilterData, this.skillData);
    this.updateSkillDataFilter(wishListFilterData);
    // wishList changes
    if (addRemove === 'add') {
      this.alertService.changeAlertType('Added to wishlist', 'success');
    } else {
      this.alertService.changeAlertType('removed from wishlist successfully', 'warning');
    }

  }

  constructor(
    private alertService: AlertService,
  ) {
    // executes at time = 0
    this.updateSkillDataFilter(this.skillDataFilter);
  }
  updateSkillDataFilter(newData: any[]): void {
    this.skillDataFilter = newData;
    this.myObservableSkill.next(this.skillDataFilter); // Emit new value
  }
}
