import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'resume', component: ResumePageComponent },
    { path: 'portfolio', component: PortfolioPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
