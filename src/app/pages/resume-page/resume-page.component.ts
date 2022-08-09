import { Component } from '@angular/core';

@Component({
    selector: 'app-resume-page',
    templateUrl: './resume-page.component.html',
    styleUrls: ['./resume-page.component.scss'],
})
export class ResumePageComponent {
    public birthday = new Date('1991.11.28');
    public timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    public age = Math.floor(this.timeDiff / (1000 * 3600 * 24) / 365.25) || 30;
}
