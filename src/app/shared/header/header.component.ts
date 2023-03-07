import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { TabsEnum } from './enums/tabs.enum';
import { TABS } from './consts/tabs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public currentPath: string | undefined;
    public tabs = TABS;
    public tabsArray = Object.values(this.tabs);

    public constructor(private router: Router) {}

    public ngOnInit(): void {
        this.defineCurrentPath();
    }

    public defineCurrentPath(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = this.router.url;
              console.log(this.currentPath);
            }
        });
    }

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
