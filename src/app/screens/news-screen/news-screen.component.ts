import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';

@Component({
    selector: 'app-news-screen',
    templateUrl: './news-screen.component.html',
    styleUrls: ['./news-screen.component.css'],
})
export class NewsScreenComponent implements OnInit {
    screenTitle: string = 'News || News Portal';

    constructor(private spinner: SpinnerService, private titleService: Title) {
        this.titleService.setTitle(this.screenTitle);
    }

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => {
            this.spinner.hide();
        }, 700);
    }
}
