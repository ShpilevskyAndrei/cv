import { ProjectsEnum } from '../enums/projects.enum';
import { ProjectInterface } from '../interfaces/project.interface';

export const PROJECTS: Record<ProjectsEnum, ProjectInterface> = {
    SBS: {
        logo: 'assets/projects/sbs.jpg',
        title: 'Squared Business Solution',
        type: 'Report generator',
        participants: '7',
        dates: '2022.08.01 - in progress',
        FeTechnologies: 'HTML, CSS, TypeScript, Angular, RxJS',
        BeTechnologies:
            'C#, .Net 5 WebApi, MS SQL Server, Entity Framework, Azure',
        difficulty: '80',
        description:
            'Squared Business Solution is a platform that helps US medical institutions to keep in-depth statistics based on their data and static data',
        adaptivity: '',
        url: '/error', //change
        role: 'Fullstack Software Engineer',
        stack: 'HTML, CSS, Angular, .Net 5 WebApi, MS SQL Server, Entity Framework, Spire.Xls, MongoDB, Azure Functions, Azure SignalR, Azure Queue',
        achievements:
            '<span>- Design Angular application architecture</br>- Setting up the project environment</br>- Regulation of code style and code writing rules</br>- Code review & refactoring</br>- Development of new features on the front-end and back-end </br>- Bug hunting, bug fixing</br></span>',
    },
    agroex: {
        logo: 'assets/projects/agroex.svg',
        title: 'Agroex',
        type: 'B2B Auction',
        participants: '8',
        dates: '2022.04.01 - 2022.08.01',
        FeTechnologies:
            'HTML, SCSS, TypeScript, Angular, Angular Material, BEM, ngRX, RxJS, Docker',
        BeTechnologies:
            'Node.js , Nest.js, TypeScript, Express.js, PostgreSQL,TypeORM, Swagger, Docker compose, Firebase, Heroku',
        MobileTechnologies:
            'React Native, Redux Toolkit, Redux Persist,TypeScript,Firebase',
        layout: 'Yes',
        difficulty: '75',
        description:
            'Agroex is an Uzbek b2b marketplace for trading agricultural products based on an auction.',
        adaptivity: 'Yes',
        url: 'https://agroex-ita.herokuapp.com/',
        role: 'Frontend Software Engineer',
        stack: 'HTML, SCSS, TypeScript, Angular, Angular Material, BEM, ngRX, RxJS, Docker, Webpack',
        achievements:
            '<span>- Development of new features on the front-end</br>- Code review & refactoring</br>- Bug hunting, bug fixing</br>- Layout of pages according to the UI layout</span>',
    },
    npm: {
        logo: 'assets/projects/npm.ico',
        title: 'Toast Notifications',
        type: 'NPM Module',
        participants: '8',
        dates: '2022.05.20 - 2022.06.03',
        FeTechnologies:
            'HTML, SCSS, TypeScript, Angular, Angular Material, CDK Overlay, RxJS, Webpack',
        layout: 'Yes',
        difficulty: '70',
        description:
            'This subproject is an NPM module for displaying toast notifications. It was developed by me for reuse in other projects.',
        adaptivity: 'Yes',
        url: 'https://www.npmjs.com/package/ngx-agroex-toast',
        role: 'Frontend Software Engineer',
        stack: 'HTML, SCSS, TypeScript, Angular, Angular Material, CDK Overlay, RxJS, Webpack',
        achievements:
            'This subproject is an NPM module for displaying toast notifications. It was developed by me for reuse in other projects.',
    },
    cv: {
        logo: 'assets/projects/logo.png',
        title: 'CV',
        type: 'Business card site',
        dates: '2022.08.02 - 2022.08.10',
        FeTechnologies: 'HTML, SCSS, TypeScript, Angular, Angular Material',
        difficulty: '40',
        description:
            'This project was developed by me for demonstration purposes. On this site I will update information about my skills, projects and work experience occasionally.',
        adaptivity: 'Yes',
        url: '/',
        role: 'Frontend Software Engineer',
        stack: 'HTML, SCSS, TypeScript, Angular, Angular Material',
        achievements:
            'This project was developed by me for demonstration purposes. On this site I will update information about my skills, projects and work experience occasionally.',
    },
};
