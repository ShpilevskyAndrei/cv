import { Component } from '@angular/core';
import { CERTIFICATES } from '../../shared/certificates/consts/certificates';

@Component({
    selector: 'app-resume-page',
    templateUrl: './resume-page.component.html',
    styleUrls: ['./resume-page.component.scss'],
})
export class ResumePageComponent {
    public birthday = new Date('1991.11.28');
    public timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    public age = Math.floor(this.timeDiff / (1000 * 3600 * 24) / 365.25) || 30;

    public certificates = Object.values(CERTIFICATES);
    public aboutMeInfo = 'more...';
    public aboutMeInfoOpened = false;

    public changeAboutMeInfo(): void {
        if (this.aboutMeInfo === 'more...') {
            this.aboutMeInfo = '...less';
        } else {
            this.aboutMeInfo = 'more...';
        }

        this.openAboutMeInfo();
    }

    private openAboutMeInfo(): void {
        this.aboutMeInfoOpened = !this.aboutMeInfoOpened;
    }
}
