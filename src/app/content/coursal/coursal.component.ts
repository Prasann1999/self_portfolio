import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
	selector: 'app-coursal',
	templateUrl: './coursal.component.html',
	styleUrls: ['./coursal.component.css'],
	host: {
		'class': 'custom-class-component_common'
	  }
})
export class CoursalComponent implements OnInit {
	images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	resume: any = {};
	selectedValue: string = 'profile_id';

	@ViewChild('carousel', { static: true }) carousel?: NgbCarousel;
	togglePaused() {
		if (this.paused) {
			this.carousel?.cycle();
		} else {
			this.carousel?.pause();
		}
		this.paused = !this.paused;
	}
	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
	constructor(
		private resumeService: ResumeService,
	) { }

	ngOnInit(): void {
		this.resume = this.resumeService.resume;
	}

}
