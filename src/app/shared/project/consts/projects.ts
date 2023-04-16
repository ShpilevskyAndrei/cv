import { ProjectsEnum } from '../enums/projects.enum';
import { ProjectInterface } from '../interfaces/project.interface';

export const PROJECTS: Record<ProjectsEnum, ProjectInterface> = {
    ARQuest: {
        logo: 'assets/projects/logo.png',
        title: 'ARQuest',
        type: 'Mobile app with AR',
        participants: '11',
        dates: '2023.02.01 - in progress',
        FeTechnologies: 'Ionic, HTML, CSS, TypeScript, Angular, RxJS',
        BeTechnologies: 'Python',
        difficulty: '95',
        description: `QuestAR is a cross-platform mobile application developed with Ionic + Angular.
        Users can participate in various quests and win prizes.
        To do this, a map is integrated into the application with the display of zones on it, within which there is a prize. The prize itself is a virtual chest. Users use free and paid hints to find the prize.
        The application is self-sufficient, but it is possible to integrate it into any other mobile application.`,
        adaptivity: '+',
        url: '',
        role: 'Project Lead / FE Tech Lead',
        stack: 'Ionic, HTML, CSS, TS, Angular',
        achievements:
            '<span>- Converting business logic into code</br><span>- Identification of customer needs</br><span>- Coordination of actions PM, UI/UX designer, FE team, BE team, QA team</br><span>- Design Angular application architecture</br>- Setting up the project environment</br>- Regulation of code style and code writing rules</br>- Code review & refactoring</br>- Development of new features on the front-end</br>- Bug hunting, bug fixing</br></span>',
    },
    SBS: {
        logo: 'assets/projects/sbs.jpg',
        title: 'SBS',
        type: 'Report generator',
        participants: '7',
        dates: '2022.08.01 - in supporting',
        FeTechnologies: 'HTML, CSS, TypeScript, Angular, RxJS',
        BeTechnologies:
            'C#, .Net 5 WebApi, MS SQL Server, Entity Framework, Azure',
        difficulty: '80',
        description:
            'Squared Business Solution is a platform that helps US medical institutions to keep in-depth statistics based on their data and static data',
        adaptivity: '',
        url: 'https://fivestar.squaredbusinesssolutions.com/',
        role: 'Fullstack Software Engineer',
        stack: 'HTML, CSS, Angular, .Net 5 WebApi, MS SQL Server, Entity Framework, Azure',
        achievements:
            '<span>- Design Angular application architecture</br>- Setting up the project environment</br>- Regulation of code style and code writing rules</br>- Code review & refactoring</br>- Development of new features on the front-end and back-end</br>- Bug hunting, bug fixing</br></span>',
    },
    healthyStreetFood: {
        logo: 'assets/projects/healthy-street-food.svg',
        title: 'Healthy street food',
        type: 'Business website',
        participants: '12',
        dates: '2022.11.01 - in dev',
        FeTechnologies:
            'HTML, CSS, TypeScript, Angular, Angular Material, RxJS, NgXS',
        difficulty: '70',
        description:
            'Healthy street food is a platform that brings together sellers, buyers and couriers for profit and delicious healthy food.',
        adaptivity: 'Yes',
        url: 'https://delivery.platforms.works/',
        role: 'Frontend Software Engineer',
        stack: 'HTML, SCSS, TypeScript, Angular, Angular Material, BEM, ngRX, RxJS, ',
        achievements:
            '<span>- Developing new features</br>- Participated in the application design</br>- Layout of pages according to the UI layout</br>- Code review & refactoring</br>- Bug hunting, bug fixing</br></span>',
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
