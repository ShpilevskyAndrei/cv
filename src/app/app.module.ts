import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectComponent } from './shared/project/project.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ResumePageComponent,
        PortfolioPageComponent,
        ContactPageComponent,
        MainPageComponent,
        ProjectComponent,
        ErrorPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTabsModule,
        MatProgressBarModule,
        MatExpansionModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
