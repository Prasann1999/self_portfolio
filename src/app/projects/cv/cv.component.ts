import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  host: {
    'class': 'custom-class-component_common'
  }
})
export class CvComponent implements OnInit {
  resume: any = {};
  selectedValue: string = 'profile_id';


  onSelectionChange(value: string): void {
    this.selectedValue = value;
    // this.scrollToElementWithOffset(value, 50);
    const selectedElem = document.getElementById(value);
    if (selectedElem) {
      document.getElementById(value)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    console.log(`Selected value: ${value}`);
    // You can add more logic here based on the selected value
  }
  download(url:any) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  downloadResume(){
    console.log('download resume');
    this.download("assets/prasann_web_dev_116.pdf");
    this.alertService.changeAlertType('Resume successfully downloaded','success');
  }
  constructor(
    private resumeService: ResumeService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.resume = this.resumeService.resume;
    console.log('this.resume::', this.resume);
  }

}
