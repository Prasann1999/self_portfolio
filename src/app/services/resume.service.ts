import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  resume = {
    "personal_details": {
      "name": "Prasann D Patil",
      "title": "Senior Software Development Engineer (Frontend)",
      "contact": {
        "linkedin": "https://linkedin.com/in/prasann-p-81aa1b1b9",
        "linkedinUserName": 'prasann-p-81aa1b1b9',
        "linkedin_icon": "assets/linkedIn.png",
        "email_icon": "assets/mail.png",
        "phone_icon": "assets/phone.png",
        "github_icon": "assets/github.png",
        "email": "prasann1411999@gmail.com",
        "phone": "9022368410",
        "github": "https://github.com/Prasann1999",
        "githubUserName": 'Prasann1999'
      }
    },
    "experience": [
      {
        "company": "Adda247 (Metis Eduventures Pvt. Ltd)",
        "position": "Senior Software Development Engineer (Frontend)",
        "location": "Gurgaon",
        "duration": "Jun 2021 – Present",
        "responsibilities": [
          "3 years of experience in web development with Next.js, React.js, and Angular.",
          "Implemented dynamic and responsive feeds features, end-to-end developed answer writing, question bank, and assessment features.",
          "Delivered complex projects like 'my purchases' section, test series features, and optimized page speed.",
          "Implemented dynamic & responsive feeds feature for dynamic chat, like, reply, share thoughts like Facebook.",
          "End-to-end development of answer writing, question bank, and assessment feature on web and admin end.",
          "Delivered complex projects like 'my purchases' section and fixed mock test feature.",
          "Implemented test series attempt and solution features, 'my purchases' section, and fixed mock test in an Agile environment.",
          "Developed complex projects including course details page, buy now, and CRM flow.",
          "Optimized page speed LCP, CLS, Total blocking time improving user experience.",
          "Implemented Moengage and Firebase events.",
          "Fixed critical issues and bugs, collaborating toward optimized code."
        ]
      },
      {
        "company": "College Of Engineering Pune (COEP)",
        "position": "Graphics Design Head (UI/UX)",
        "location": "Pune",
        "duration": "Jun 2019 – Oct 2020",
        "responsibilities": [
          "More than 1 year of experience in graphics designing and HTML/CSS.",
          "Developed posters, banners, certificates, website UI, and web pages using HTML and CSS.",
          "Developed posters, banners, certificates, website UI, web pages, and used Photoshop scripting automation.",
          "Extensively used Photoshop scripting automation with JavaScript and Google Apps scripting automation for bulk edit and create applications.",
          "Developed GIFs, animations, and SVG icons using vector graphics."
        ]
      }
    ],
    "education": {
      "institution": "Govt. College Of Engineering Pune (COEP)",
      "degree": "B Tech Electrical Engineering",
      "grade": "7.5/10",
      "duration": "2016 - 2020",
      "location": "Pune",
      "details": "COEP is considered one of the premier & top-tier 1 engineering colleges in India,In Maharashtra COEP is often positioned after IIT Bombay in terms of reputation and academic excellence."
    },
    "skills": {
      "coding_skills": [
        "Next.js",
        "React.js",
        "Angular",
        "JavaScript",
        "Ecmascript",
        "TypeScript",
        "Redux State Management",
        "HTML",
        "CSS",
        "jQuery",
        "Material UI",
        "Ant Design",
        "Radix UI",
        "Swiper.js",
        "Chart.js",
        "Bootstrap",
        "Reactstrap",
        "Postman",
        "Swagger",
        "Figma",
        "Git",
        "GitHub",
        "Jira",
        "PHP",
        "node",
        "MySQL",
        "Google Apps Scripting",
        "Jenkins CI/CD",
        "Bitbucket",
        "Visual Studio Code",
        "API Testing & Integration",
        "Time Management",
        "Problem-Solving"
      ],
      "graphics_designing": [
        "Photoshop CC",
        "Photoshop scripting using JS",
        "Illustrator",
        "Animations",
        "Vector Graphics",
        "GIFs"
      ]
    },
    "summary": [
      `Web developer with 3 years of experience in React,Next.js, and Angular. Skilled in creating dynamic,responsive web applications that enhance user experience.`,
      "Strong academic background & TRIPLE placement holder from a tier 1 college with robust problem-solving, complex logic building, analytical reasoning, and top-level mathematical skills",
    ],
    "references": [
      "https://www.adda247.com/",
      "https://www.coep.org.in/",
      "https://resuminator.in/"
    ]
  };

  constructor() { }
}
