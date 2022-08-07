import { Component } from '@angular/core';

import { TabsEnum } from './enums/tabs.enum';
import { TABS } from './consts/tabs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public tabs = TABS;
    public tabsArray = Object.values(this.tabs);

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
