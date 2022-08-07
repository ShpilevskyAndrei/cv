import { Component } from '@angular/core';

import { TabsEnum } from './enums/tabs.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public tabs = {
        resume: {
            title: TabsEnum.resume,
            active: false,
            route: 'resume',
        },
        portfolio: {
            title: TabsEnum.portfolio,
            active: false,
            route: 'portfolio',
        },
        contact: {
            title: TabsEnum.contact,
            active: false,
            route: 'contact',
        },
    };

    public tabss = [this.tabs.resume, this.tabs.portfolio, this.tabs.contact];

    public allTabsInactive(): void {
        this.tabs.resume.active = false;
        this.tabs.portfolio.active = false;
        this.tabs.contact.active = false;
    }

    public activeTab(tab: TabsEnum): void {
        this.allTabsInactive();
        switch (tab) {
            case TabsEnum.resume:
                this.tabs.resume.active = true;
                break;
            case TabsEnum.portfolio:
                this.tabs.portfolio.active = true;
                break;
            case TabsEnum.contact:
                this.tabs.contact.active = true;
                break;
        }
    }
}
