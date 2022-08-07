import { Component } from '@angular/core';

import { PROJECTS } from './consts/projects';

@Component({
    selector: 'app-portfolio-page',
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent {
    public projectsArray = Object.values(PROJECTS);
}
