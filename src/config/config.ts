import { testimonials } from './testimonials';

const iconPrefix = '/resume';
// const iconPrefix = '';
const SECTIONS = {
  linkedin: {
    url: 'https://www.linkedin.com/in/sivaraj-nagaraj/',

    oldSummary: `● Innovative and Technically Sophisticated Software Engineer offering 6 years of experience in the software development life cycle and Production support & maintenance - from concept through delivery of applications and customizable solutions.

        ● Working as an Mobile App (React Native) and Backend (Node.js) developer by designing and developing both Frontend and Backend modules as well as developing API Services. 
        
        ● Worked on Multi domain Mobile apps and API services like Food catalog (Zomato), Book Movie Tickets (Justickets), Cab  Booking (Ola), Content (News/Media) oriented Apps as an extension to the core app. 
        
        ● Strong programming Skills in JavaScript (ECMA2016 / ES6 Standard), Mobility, Web technologies and Scripting Languages.`,
  },
  views: [
    { id: 'hero', title: 'Hero' },
    { id: 'summary', title: 'Summary' },
    { id: 'experience', title: 'Professional Experience' },
    { id: 'skills', title: 'Technical Skill Sets' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'academy', title: 'Academic Proficeincy' },
    { id: 'projects', title: 'Project Portfolio' },
  ],
  hero: {
    title: 'Sivaraj Nagaraj',
    description: 'Full-Stack Engineer | Data Engineer | Architect',
  },
  summary: {
    title: 'Summary',
    description: '',
    list: [
      `<b style="font-weight:500;">A Versatile, Full-Stack as well as Data Engineer</b>, helping organizations to achieve business outcomes with my 10
      years of expertise in software engineering, specifically in modern data stacks and frameworks.`,
      `<b style="font-weight:500;">Proficient in problem solving using an array of tech stacks and streams</b> like <b style="font-weight:500;">TypeScript, Python, Java, Backend
      (Micro Services, APIs, gRPC), Frontend (React), DevOps, MLOps, Chat Bots, Mobile App, Cloud (AWS, GCP)</b>.`,
      `<b style="font-weight:500;">Worked in Startup 0-100 and built Products and Features from scratch</b>, which includes large-scale distributed
      systems, services and event streams with low latency and performance as the default`,
      `<b style="font-weight:500;">A Business centric Engineer, owned multiple Business Metrics, OKRs</b> and worked with many cross-functional
      teams like Data Science, Product, Revenue, Infra, Design and Engineering to get the desired business results.`,
      `<b style="font-weight:500;">My core role includes contributing to Org’s OKR Plans, Architecting, Building Solutions</b>, Product Features,
      Automations, Optimizations and Improve Metrics to achieve the business goals and outcomes.`,
    ],
  },
  experiences: {
    title: 'Professional Experience',
    description: '',
    list: [
      {
        designation: 'Staff Engineer',
        company: 'MPL (Mobile Premier League)',
        location: 'Bengaluru',
        from: 'Jul 2018',
        to: 'Present',
        icon: iconPrefix + '/static/mpl.jpg',
        tech: [
          'Full Stack Developer',
          'Data Engineer',
          'ML Engineer',
          'Mobile App Developer',
          'Python',
          'Java',
          'TypeScript',
        ],
        summary: [
          `As a Full-Stack and Data Engineer working on various backend systems and Data pipelines like Kafka Event Driven Systems, Ingestion, Segmentation, etc. Developed large-scale backend microservices and Frontend dashboards.`,
          `Key architect of the MPL Frontend App, built from ground up including core flow like Login, Payments, Wallet, etc.`,
          `Works closely with the Data Science and cross-functional teams and builds solutions which bring business impacts.`,
          `Independently solved business and tech problem statements by developing and productionising in-house solutions like Config Management, Fraud Ops, Data Dashboards, Alert-as-a-Service, Chatbots Automations etc.`,
        ],
        achievement: [
          'Archited the MPL Frontend App from Scratch.',
          'Built low-latency and high scale backend and ML services which are the core part of the MPL App.',
          'Built handfull of Automations and Optimizations which brought business impacts.',
          'Recognized and got appreciated thrice in Company’s All Hands Meetings for implementing solutions and processes which made positive impacts to the teams and business.',
        ],
      },
      {
        designation: 'Software Development Engineer',
        company: 'Hike Messenger',
        location: 'Bengaluru',
        from: 'Dec 2017',
        to: 'Jul 2018',
        icon: iconPrefix + '/static/hike.png',
        tech: ['Mobile App Developer', 'React Native', 'Android', 'JavaScript'],
        summary: [
          'Worked as an Mobile App (React Native) and Backend (Node.js) developer by designing and developing both Frontend and Backend modules as well as developing API Services.',
          'Worked on Multi domain Mobile apps and API services like Food catalogue (Zomato), Book Movie Tickets (Justickets), Cab  Booking (Ola), Content (News/Media) oriented Apps as an extension to the core app.',
          'Strong programming Skills in JavaScript (ECMA2016 / ES6 Standard), Mobility, Web technologies and Scripting Languages.',
        ],
        achievement: [
          '<b>In a short span of time involved, developed and published apps</b> like Online Food catalogue, Movie Ticket Book, Cab Book and optimizations for existing apps was much appreciated by Product Manager.',
        ],
      },
      {
        designation: 'Senior Engineer',
        company: 'Brillio',
        location: 'Bengaluru',
        from: 'Mar 2017',
        to: 'Dec 2017',
        icon: iconPrefix + '/static/brillio.jpg',
        tech: [
          'React.JS',
          'JavaScript',
          'Mobile App Developer',
          'MERN Stack Developer',
          'Node.JS Developer',
        ],
        summary: [
          'Worked as a MEAN Stack (Node, Angular, MongoDB, Express) Developer by designing and developing both Frontend and Backend modules as well as developing API Services.',
          'Managed a team of four peoples and experienced in deploying Cloud Solutions like Microsoft Azure, Heroku and IBM Bluemix.',
          'Also worked in compliance with Agile Methodologies through JIRA and Visual Studio Team Services.',
          'Strong programming Skills in NodeJS (ECMA2016 / ES6 Standard), Core Java, Mobility, Web technologies and Scripting Languages.',
          'Worked on Hybrid Mobile App Developments (Android / iOS) by leveraging high end frameworks like Ionic and React-Native.',
        ],
        achievement: [
          '<b>Awarded with “Team Excellence“</b> for Jun’17– a recognition for the Teams that shown high level of performance and quality delivery.',
          '<b>Developed an in-house prototype for Task Tracker portal</b> through cutting edge technologies which has both Server and Client side apps.',
        ],
      },

      {
        designation: 'Technology Analyst',
        company: 'Infosys Ltd.',
        location: 'Bengaluru',
        from: 'Apr 2015',
        to: 'Mar 2017',
        icon: iconPrefix + '/static/infosys.png',
        border: true,
        tech: ['Mainframe System Migration', 'Android', 'Business Reporting', 'Java Developer'],
        summary: [
          'Worked as a Technology Analyst with good knowledge of HealthCare and Retail Chain business processes.',
        ],
        achievement: [
          '<b>Awarded with “Bravo Awards”</b> for Q1 FY’16-This Individual Award is a recognition and appreciation of outstanding performance. The purview of this encompasses the extra mile that employees go in terms of effort, innovation and creativity displayed in their roles and responsibilities.',
          '<b>Designed and Developed an Admin level Dashboard</b> using cutting edge Web and Backend components (MEAN Stack) for Reporting and Frequent command execution on an existing Application Platform.',
          '<b>Worked on a series of Automation Tools and Scripts</b> which lead to a drastic reduction in Manual Efforts and recognized as Client Value-adds.',
          '<b>Performed as an active team player and a self-motivator</b> with excellent communication skills, presentation and interpersonal skills which helped to build productive relationships with colleagues, clients and vendors across all functional and technical disciplines.',
        ],
      },

      {
        designation: 'Software Engineer',
        company: 'SYNTEL Ltd.',
        location: 'Pune',
        from: 'Dec 2012',
        to: 'Apr 2015',
        icon: iconPrefix + '/static/syntel.png',
        border: true,

        tech: ['Mainframe Developer', 'COBOL', 'IBM z/OS', 'DB2', 'System Support'],
        summary: [
          'Worked as an Analyst Programmer in Healthcare Vertical under Application Development and Support projects.',
        ],
        achievement: [
          '<b>Awarded with “SMART“</b> for FY’13– a value award for showing the characteristic to define a problem so as to include its solution or where that is not possible, an approach to the solution.',
          '<b>Designed and developed a first of its kind Mobile App</b> for the Syntel PSM Team on Android platform, which has the features like Online Dashboard and it was most appreciated among the project managers.',
        ],
      },
    ],
  },
  academy: {
    title: 'Academic Proficiency',
    // description: 'Education and certification that I have obtained.',
    list: [
      {
        id: 'B.E.',
        course: '(Electronics & Communication Engineering)',
        institute: 'Sona College of Technology',
        location: 'Salem, Tamilnadu.',
        affiliation: 'Affiliated to Anna University Chennai',
        year: 2012,
        score: '87.70 %',
        cgpa: '8.77/10',
      },
      {
        id: 'Class 12',
        course: '(HSC)',
        institute: 'The Gugai Hr. Sec. School',
        location: 'Salem, Tamilnadu.',
        streams: ['Maths', 'Physics', 'Chemistry', 'Computer Science'],
        year: 2008,
        score: '93.25 %',
      },
      {
        id: 'Class 10',
        course: '(SSLC)',
        institute: 'The Gugai Hr. Sec. School',
        location: 'Salem, Tamilnadu.',
        year: 2006,
        score: '89.40 %',
      },
    ],
  },
  social: [
    {
      name: 'Email',
      color: 'primary',
      url: 'mailto:?Subject=Cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out.&Body=Hey%2C%0A%0AI%20came%20across%20a%20cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out.%0Ahttp%3A//sivaraj-nagaraj.herokuapp.com',
    },
    {
      name: 'Facebook',
      color: 'primary',
      url: 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F',
    },
    {
      name: 'Google+',
      color: 'warn',
      url: 'https://plus.google.com/share?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F',
    },
    {
      name: 'LinkedIn',
      color: '#ffff00',
      url: 'http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F&title=Hey%2C%20I%20came%20across%20a%20cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out.',
    },
    {
      name: 'Twitter',
      color: 'yellow',
      url: 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fsivaraj-nagaraj.herokuapp.com%2F&text=Hey%2C%20I%20came%20across%20a%20cool%20profile%20of%20Sivaraj%20Nagaraj%2C%20check%20it%20out.',
    },
  ],
  tabs: [
    { name: 'All', active: true },
    { name: 'IBM', active: false },
    { name: 'Lynda', active: false },
    { name: 'Pluralsight', active: false },
  ],
  certifications: [
    {
      name: 'IBM Cloud Platform Application Development V1 (Bluemix)',
      tag: 'ibm',
      icon: iconPrefix + '/images/skills/ibm.png',
    },
    {
      name: 'IBM Rational Associate Application Developer V8',
      tag: 'ibm',
      icon: iconPrefix + '/images/skills/ibm.png',
    },
    {
      name: 'IBM DB2 9 Fundamentals Certification',
      tag: 'ibm',
      icon: iconPrefix + '/images/skills/ibm.png',
    },

    {
      name: 'Learning Bootstrap 2 ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '1F2E96EF62A1482898F022A033FD60DF',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1F2E96EF62A1482898F022A033FD60DF',
    },
    {
      name: 'Focus on Your Skills ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '32DEE3491A3E4B349614CCE4AEF8B914',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=32DEE3491A3E4B349614CCE4AEF8B914',
    },
    {
      name: 'Bootstrap 3 Essential Training ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '1A5D1D958613470E993C81B8BE2FD73F',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1A5D1D958613470E993C81B8BE2FD73F',
    },
    {
      name: 'Learning Node.js ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '6BB52F29A77D491EA226A063DAE86D9B',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=6BB52F29A77D491EA226A063DAE86D9B',
    },
    {
      name: 'Learning Visual Studio Team Services ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '12CC3B173EB14DC5B8AE2E3C9077CE97',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=12CC3B173EB14DC5B8AE2E3C9077CE97',
    },
    {
      name: 'Visual Studio 2013 for Windows Store Developers ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '95F389FBA674478995CF308669AE9035',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=95F389FBA674478995CF308669AE9035',
    },
    {
      name: 'Learning React.js ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'AA8E74B9F16C4D77B1EE2C4C68DBA4D4',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=AA8E74B9F16C4D77B1EE2C4C68DBA4D4',
    },
    {
      name: 'React Native: Building Mobile Apps ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '559F58334EA94D78B9FA3287D64AE376',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=559F58334EA94D78B9FA3287D64AE376',
    },
    {
      name: 'Reactive Programming in iOS with RxSwift ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '94737F1117EB4601B1969BD42E7E5552',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=94737F1117EB4601B1969BD42E7E5552',
    },
    {
      name: 'Building a Mobile App with AngularJS 1 and Ionic ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '0524470E580748769C73C624EA67643A',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=0524470E580748769C73C624EA67643A',
    },
    {
      name: 'Learning AngularJS 2 ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'D11A077DB1334046B3E0F24F26804FA9',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=D11A077DB1334046B3E0F24F26804FA9',
    },
    {
      name: 'Learning Angular 2 Directives ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'E2854E8E38A34EF78894564C59B27AC8',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E2854E8E38A34EF78894564C59B27AC8',
    },
    {
      name: 'Ionic 2 and AngularFire2: Building Mobile Apps ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'E0B94340A7E6452E80B8575A8161B169',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E0B94340A7E6452E80B8575A8161B169',
    },
    {
      name: 'Learning ECMAScript 6 ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'C032AC77591E4DDCBA42C7B57E2D4A5B',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=C032AC77591E4DDCBA42C7B57E2D4A5B',
    },
    {
      name: 'Learning React Native ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '45234589555146D1B3A8039C7858C020',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=45234589555146D1B3A8039C7858C020',
    },
    {
      name: 'Learning JIRA Software ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '275CBEDA825C47ECA85BED27F2C1C1CE',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=275CBEDA825C47ECA85BED27F2C1C1CE',
    },
    {
      name: 'Learning Redux ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'E1B4ADB8393A4FC09C9273171E6FB239',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E1B4ADB8393A4FC09C9273171E6FB239',
    },
    {
      name: 'Learning Cloud Computing: The Cloud and DevOps ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '2BAE4781D0784909A818F02549741B38',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=2BAE4781D0784909A818F02549741B38',
    },
    {
      name: 'Learning Cloud Computing: Cloud Security ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '9A16FE8D641D48C6B6C97313E13A3B9C',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=9A16FE8D641D48C6B6C97313E13A3B9C',
    },
    {
      name: 'Microsoft Cloud: Explore Cloud Services ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '4C9E31D0FCB94B34A9B49ADAF0B05FE9',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=4C9E31D0FCB94B34A9B49ADAF0B05FE9',
    },
    {
      name: 'Switching to ES6 in Node.js ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '5ABE2D8192304BCF81D88DFC84E31BAF',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=5ABE2D8192304BCF81D88DFC84E31BAF',
    },
    {
      name: 'Microsoft Azure for Developers ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'E18D672AD77748CD89B03E7E84A6B05B',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=E18D672AD77748CD89B03E7E84A6B05B',
    },
    {
      name: 'Angular 2 Essential Training ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '1815E9F1EF6945309780F2E9F6B609D0',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1815E9F1EF6945309780F2E9F6B609D0',
    },
    {
      name: 'Learning MongoDB ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '1BAD6892812D422C8651C8896C1A9799',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=1BAD6892812D422C8651C8896C1A9799',
    },
    {
      name: 'MEAN Stack and MongoDB: Development Techniques ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '6AE1FC0ABECF43EC9DD0A547D69AD9D2',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=6AE1FC0ABECF43EC9DD0A547D69AD9D2',
    },
    {
      name: 'Learning Java Lambda Expressions ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '6940D8B65D5141768B246E66B9213A5C',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=6940D8B65D5141768B246E66B9213A5C',
    },
    {
      name: 'Python 3 Essential Training ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: 'F63522E214FC454EB43CC9EA8A7F6BDA',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=F63522E214FC454EB43CC9EA8A7F6BDA',
    },
    {
      name: 'Learning Python for Data Science, with Tim Fox and Elephant Scale ',
      tag: 'lynda',
      icon: iconPrefix + '/images/skills/lynda.png',
      certificateNo: '9C09495508B44EE4BFDD03D6FE13187F',
      certificateUrl:
        'https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=9C09495508B44EE4BFDD03D6FE13187F',
    },

    { name: 'in update', tag: 'pluralsight', icon: iconPrefix + '/images/skills/ps.ico' },
  ],

  projects: {
    title: 'Project Portfolio',
    description: 'Here are some of my projects that I have worked on.',
    list: [
      {
        name: 'Data Product and Services',
        client: '',
        coreApplications: [
          'Python',
          'Java',
          'PostgreSQL',
          'MongoDB',
          'Apache Kafka',
          'Apache Camel EIP',
          'Kubernetes',
        ],
        teamSize: 8,
        from: 'from',
        to: 'to',
        summary: [
          'Build variuos backend micro services like Kafka Event Driven User Tasks Service, Data Relay Service, User Segmentation Service, Feature Store Service etc.',
        ],
        roles: [
          'Building Data Pipeline using Apache Kafka and Apache Camel EIP.',
          'Building high scale, low-latency microservices using Java and Spring Boot.',
          'Developing, Deploying, Maintaining and Scaling the existing Data Products.',
          'Build UI Dashboards Interfaces using React.js to stakeholders to configure and monitor the Data Products.',
        ],
      },
      {
        name: 'Data Science and ML Inferecing Services',
        client: '',
        coreApplications: [
          'Python',
          'Databricks',
          'SQL',
          'Apache Spark',
          'Apache Kafka',
          'Redis',
          'RedShift',
          'PostgreSQL',
          'SageMaker',
          'Dataproc',
        ],
        teamSize: 8,
        from: 'from',
        to: 'to',
        summary: [
          "Implemented foundational MLOps process in Data Scicene Team by using Databrick's tools like MLflow, Delta Lake, Databricks Jobs, Feature Store, Model Registry, Git, Notebooks etc.",
          'Build variuos backend micro-services like Dynamic Price Forecasting Service, Home Page & Tournaments Personalization Service, Multi-Player Score Calculation Service etc.',
        ],
        roles: [
          'Works closely with Data Scientists to productionize their ML models.',
          'Building high scale, low-latency microservices using Java and Python',
          'Developing, Deploying, Maintaining and Scaling the existing Data Science/ML backend services.',
          'Build UI Dashboards Interfaces using React.js to stakeholders to configure and validate the ML Service responses',
        ],
      },
      {
        name: 'MPL Mobile App (React-Native)',
        client: '',
        coreApplications: ['React-Native', 'Redux', 'JavaScript', 'Android'],
        teamSize: 8,
        from: 'from',
        to: 'to',
        summary: [
          'Built the MPL Mobile App from scratch using React-Native and Redux.',
          'Integrated with an array of third-party services like Firebase, CleverTap, Sentry.io, Appsflyer, etc.',
          "Key person for the App's architecture and design.",
        ],
        roles: [
          "Building the App's architecture and design.",
          "Work on the design and development of the App's UI.",
          'Build varoius core frontend modules like Login, Home Page, Wallet, Profile, Refer & Earn, Help Center, Notifications, User Tasks, Payments of the MPL App.',
        ],
      },
      {
        name: 'MicroApps and Content App',
        client: '',
        coreApplications: ['React-Native', 'Redux', 'Node.JS', 'MongoDB', 'Google Cloud Platform'],
        teamSize: 8,
        from: 'from',
        to: 'to',
        summary: [
          'Hike Messenger is an Indian revival of Whatsapp. This project is about designing and developing a React-Native micro apps on top of the Core Platform and also developing Backend Services (on GCP) for the micro apps. We created micro apps and API services like Food catalogue (Zomato), Book Movie Tickets (Justickets), Cab Booking (Ola), etc. from scratch by partnering with respective service vendors and few of them were published to millions of users. Also developing a content (News/Entertainment) oriented app from scratch.',
        ],
        roles: [
          'Designing and developing the Micro Apps from scratch. Taken ownership of the App publish pipeline like alpha to production release.',
          'Implement Analytics service and capture key user events and based on that enhance the app’s user flow.',
          'Work on the design and development of the Server side logics and integrate with the Mobile App functionalities.',
          'Contributing for the content app’s data source analysis for Tamil language part and also translation elements for the content app.',
        ],
      },
      {
        name: 'Cloud Server and Mobile App for digitizing Dealer activities',
        client: 'Leading Car Manufacturer ',
        coreApplications: [
          'NodeJS',
          'AngularJS',
          'MongoDB',
          'Microsoft Azure',
          'socket.io',
          'Android',
          'iOS',
          'JIRA',
          'SVN',
        ],
        teamSize: 8,
        from: 'from',
        to: 'to',
        summary: [
          'Project is on designing and developing a Backend Server (on Azure Cloud) for Hybrid Mobile App targeted for Android and iOS devices. The Server enables multiple functionalities that makes the Frontend Mobile Apps to execute various functionalities for the Car dealer’s and made the activities easy for a Leading Car Manufacturer. My role involves designing and developing the Server logics, API services, Chat module by leveraging the socket.io as well as.',
        ],
        roles: [
          'Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations.',
          '	Managing a group of peoples and allocating tasks through JIRA.',
          '	Work on the design and development of the Server Logics and integrate with the Frontend functionalities.',
          '	Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised.',
        ],
      },
      {
        name: 'Community based E-Commerece platform (Mobile App and API Services) ',
        client: 'Leading Pop Culture Toy Producer',
        coreApplications: [
          'React-Native',
          'ReactJS',
          'NodeJS',
          'Microsoft Azure',
          'Android',
          'iOS',
          'JIRA',
          'Git',
          'Directus CMS',
          'Google FireBase',
        ],
        teamSize: 6,
        from: 'from',
        to: 'to',
        summary: [
          "The project is on designing and developing a Mobile First App using a very recent technology 'React-Native' and ReactJS as well as developing API services that will be consumed by the Mobile App. The App enables a digital platform for the client and creates a new community based eco-system which also incorporates e-commerce and payment gateways. ",
        ],
        roles: [
          'Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations.',
          'Managing a couple of peoples.',
          'Work on the design and development of the Mobile Application from prototype to development, testing, implementation and Go Live.',
          'Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised.',
        ],
      },
      {
        name: 'WebApp and Push Report Solution for a CPG customer',
        client: 'Well reputed Global Company in CPG and Retail Chain',
        coreApplications: [
          'Java',
          'AngularJS',
          'Spring',
          'PostgreSQL',
          'Tomcat',
          'Pentaho Business Analytics Server',
        ],
        teamSize: 6,
        from: 'from',
        to: 'to',
        summary: [
          'This is a Web Application with Backend Reporting Module which provides front end UI to view and upload Data to Backend Database in form of Form Data and File uploads. The Backend module involves a Data Extraction and Template Report Generation which will send the Report to end user’s devices on a scheduled basis. The users are from around 10+ Markets around the globe.',
        ],
        roles: [
          'Managing requirement gathering, system analysis and finalization of technical / functional specification based on Business Logic and Operations.',
          'Preparing Requirement and Design Documents.',
          'Work on the design and development of the Web Application and Push Report Solution from prototype to development, testing, implementation and Go Live.',
          'Coordinating with Clients regularly on Status and taking care of new requirements, providing active resolutions on the challenges raised.',
        ],
      },
      {
        name: 'Reporting Solution for a CPG customer',
        client: 'Well reputed Global Company in CPG and Retail Chain',
        coreApplications: [
          'Java',
          'Pentaho Business Analytics',
          'Data Integration',
          'PostgreSQL',
          'Tomcat',
          'Selenium',
          'AngularJS',
        ],
        teamSize: 15,
        from: 'from',
        to: 'to',
        summary: [
          'This is a multi-module project providing Standard and Custom Reporting solutions to Business users which has around 30+ on board Markets around the globe. The Reporting Engine is powered by Pentaho Business Analytics / Data Integration suite which runs on top of 4 PROD and 2 QA Server instances hosted on private Cloud infrastructure. It operates as less or equal to DevOps model.',
        ],
        roles: [
          'Designing and implementing Reporting Schemas based on Business Logic and Operations.',
          'Manage and Perform Periodic Application Upgrades/Patches and Application specific Server Maintenance.',
          'Perform Functional and Regression testing on Application Server, ETL and Reports.',
          'Design, Build and Execute ETL Scripts and Flows using Pentaho Data Integration.',
          'Undertake development and enhancement of custom functions based on Client requirements, deployment and providing support for the Reports and Data.',
          'Coordinating with Clients around the globe while on boarding new Markets on the platform and providing active resolutions on the issues raised.',
          'Automating recurring workflows using suitable technologies.',
          'Being responsible for co-ordination with Internal Team, Testing Team and Product Team in task delivery in terms of timely query resolutions, follow-up and being within the allotted deadline.',
          'Research and do RCA on the Application Specific issues and come up with a permanent or workaround solutions.',
        ],
      },
      {
        name: 'Mobile OPC UA Client for accessing Plant KPI Data',
        client: 'A leading Manufacturing Industry',
        coreApplications: [
          'Java',
          'Mobility',
          'Android Studio',
          'OPC UA SDK',
          'OPC UA Server/Client',
          'DeviceAnywhere',
        ],
        teamSize: 4,
        from: 'from',
        to: 'to',
        summary: [
          'The project is on developing, testing and implementing a solution that allows monitoring of various real time KPI’s in Process and Manufacturing Industries by expose the sensor data on Android based Hand held devices using the latest evolving technologies. Thereby, augment the solution by bringing the IIOT and M2M technologies using the Industry open communication standard OPC-UA.',
        ],
        roles: [
          'Managing requirement gathering, system analysis and finalization of technical / functional specification.',
          'Work on the design and development of Android App using OPC UA SDK from prototype to implementation by following Iterative SDLC Model.',
          'Work on separate modules like Server Authentication, Session Persistence, Graphs and Charts, UI, Subscription management etc. and do Integration.',
          'Do actual testing and debugging on Broad range on Devices through DeviceAnywhere – Keynote platform and work on the generic defects/bugs.',
          'Interfacing with Clients for business requirements gathering, providing active resolutions on the concerns/functionality defects raised by clients.',
        ],
      },
      {
        name: 'Server/Application Migration and Testing',
        client: 'Well reputed Global Company in CPG and Retail Chain',
        coreApplications: [
          'Java',
          'AngularJS',
          'Oracle',
          'Pro*C',
          'MS SQL Server',
          'TFS',
          'MicroFocus',
          'HPQC',
          'Shell Scripting',
          'IBM WebSphere MQ',
          'Visual Studio',
          'SoapUI',
          'HPUX',
        ],
        teamSize: 5,
        from: 'from',
        to: 'to',
        summary: [
          'This was a complete Production Server Migration along with Application Upgrades and involves deep level of testing that includes Functional Testing, Regression Testing, SIT, UAT, End-to- End and Failover Testing. Diverse Applications with different technological platforms from different projects are involved in the migration and testing.',
        ],
        roles: [
          'Having regular meetings with clients and vendors to come up with final Testing, Business Validation Plans, Action Items and responding to client queries and new requirements.',
          'Dealing, preparing and reviewing with Test cases for each application as per the Business requirement and Validation Plan.',
          'Executing all levels of Testing like Functional, SIT, Regression etc. as per Test Plan and actively work on the resolution for the raised defects. Documenting the Results and uploading same in ALM Tool.',
          'Rebuilding executables for compatibility with new Server and Application platform.',
          'Provide complete Hyper-Care and Go-Live support until the New Application/Server is stable.',
          'Individually handled Application migration and testing on HPUX PA-RISC to Itanium.',
        ],
      },
    ],
  },

  skilltabs: [
    { name: 'All', active: true },
    { name: 'Programming', active: false },
    { name: 'Mobile', active: false },
    { name: 'UI', active: false },
    { name: 'Server', active: false },
    { name: 'Cloud', active: false },
    { name: 'Databases', active: false },
    { name: 'Applications', active: false },
    { name: 'Tools', active: false },
    { name: 'Operating Systems', active: false },
  ],

  skills: {
    title: 'Technical Skill Sets',
    description:
      'I have worked on a wide range of technologies and tools. I have listed the ones I have worked on extensively.',

    tabs: {
      Programming: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
      'Frameworks, Applications, Libraries and Tools': [
        'Flask',
        'FastAPI',
        'Spring Boot',
        'JPA',
        'Apache Camel EIP',
        'React.JS',
        'Mantine UI',
        'Ant Design',
        'Redux',
        'Node.JS',
        'Android',
        'React Native',
        'Shell',
        'Express.JS',
        'GraphQL',
        'Jupyter Notebooks',
        'SQLAlchemy',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Apache Spark',
        'RedShift',
        'Pandas',
        'Machine Learning',
        'SciKit',
        'EDA',
        'Kubernetes',
        'Docker',
        'Helm Chart',
        'Apache ZooKeeper',
        'Grafana',
        'Kibana',
        'CI-CD',
        'Jenkins',
        'Apache Kafka Streams',
        'ETL',
        'NLP',
        'MLOps',
        'MLFlow',
      ],
      'Streams / Verticals': [
        'UI Dashboards',
        'Mobile Apps',
        'Custom Libraries',
        'gRPC Microservices',
        'REST APIs',
        'Data Pipelines',
        'DevOps',
        'Security',
        'Chat Bots',
        'Simulators',
        'Automations',
        'UI Wireframes',
      ],
      Products: [
        'Databricks (Notebooks, Jobs, ML, SQL)',
        'SageMaker',
        'Atlan',
        'Jira',
        'Confluence',
        'Bitbucket',
        'Redis Labs',
        'MongoDB Atlas',
        'Confluent Kafka',
        'Sentry',
        'Harness',
        'Tableau',
        'Keycloak',
        'Slack Apps and Bots',
        'Figma',
      ],
      'Cloud Platforms': ['AWS (Amazon Web Services)', 'GCP (Google Cloud Platform)'],
    },
    list: [
      { name: 'Node JS', tag: 'programming', icon: iconPrefix + '/images/skills/nodejs.png' },
      {
        name: 'Angular JS ( 1 & 2 )',
        tag: 'programming',
        icon: iconPrefix + '/images/skills/angularjs.png',
      },
      { name: 'Core Java', tag: 'programming', icon: iconPrefix + '/images/skills/java.png' },
      { name: 'React JS', tag: 'programming', icon: iconPrefix + '/images/skills/reactjs.png' },
      { name: 'Redux', tag: 'programming', icon: iconPrefix + '/images/skills/reactjs.png' },
      { name: 'React-Native', tag: 'programming', icon: iconPrefix + '/images/skills/reactjs.png' },
      { name: 'Python', tag: 'programming', icon: iconPrefix + '/images/skills/python.png' },
      { name: 'jQuery', tag: 'programming', icon: iconPrefix + '/images/skills/jquery.png' },
      // {
      //     name: 'Mobility (Native and Cross-Platform)',
      //     tag: 'programming',
      //     icon: iconPrefix +'/images/skills/mobile.png',
      // },
      {
        name: 'JavaScript (ES6)',
        tag: 'programming',
        icon: iconPrefix + '/images/skills/nodejs.png',
      },
      { name: 'VBScript', tag: 'programming', icon: iconPrefix + '/images/skills/vb.png' },
      {
        name: 'Shell Scripting',
        tag: 'programming',
        icon: iconPrefix + '/images/skills/shell.png',
      },
      { name: 'SQL', tag: 'programming', icon: iconPrefix + '/images/skills/sql.png' },
      // { name: 'API / REST Services', tag: 'programming', icon: iconPrefix +'/images/skills/api.png' },

      { name: 'HTML5', tag: 'ui', icon: iconPrefix + '/images/skills/html5.png' },
      { name: 'CSS', tag: 'ui', icon: iconPrefix + '/images/skills/css.png' },
      { name: 'Bootstrap', tag: 'ui', icon: iconPrefix + '/images/skills/bootstrap.png' },
      { name: 'Angular', tag: 'ui', icon: iconPrefix + '/images/skills/angularjs.png' },
      { name: 'React', tag: 'ui', icon: iconPrefix + '/images/skills/reactjs.png' },

      { name: 'Express JS ', tag: 'server', icon: iconPrefix + '/images/skills/nodejs.png' },
      // { name: 'Apache Tomcat (J2EE)', tag: 'server', icon: iconPrefix +'/images/skills/tomcat.png' },

      { name: 'React-Native', tag: 'mobile', icon: iconPrefix + '/images/skills/reactjs.png' },
      { name: 'Cordova', tag: 'mobile', icon: iconPrefix + '/images/skills/cordova.png' },
      { name: 'Ionic', tag: 'mobile', icon: iconPrefix + '/images/skills/ionic.png' },
      { name: 'Android', tag: 'mobile', icon: iconPrefix + '/images/skills/android.png' },

      { name: 'Microsoft Azure', tag: 'cloud', icon: iconPrefix + '/images/skills/azure.png' },
      { name: 'Heroku', tag: 'cloud', icon: iconPrefix + '/images/skills/heroku.png' },
      { name: 'IBM Bluemix', tag: 'cloud', icon: iconPrefix + '/images/skills/bluemix.jpg' },
      { name: 'Google FireBase', tag: 'cloud', icon: iconPrefix + '/images/skills/firebase2.png' },
      { name: 'AWS', tag: 'cloud', icon: iconPrefix + '/images/skills/aws.png' },

      { name: 'MongoDB', tag: 'database', icon: iconPrefix + '/images/skills/mongodb.png' },
      { name: 'PostgreSQL', tag: 'database', icon: iconPrefix + '/images/skills/postgresql.png' },
      // { name: 'Microsoft SQL Server', tag: 'database', icon: iconPrefix +'/images/skills/mssql.png' },

      { name: 'Windows', tag: 'os', icon: iconPrefix + '/images/skills/windows.png' },
      { name: 'Linux/Unix', tag: 'os', icon: iconPrefix + '/images/skills/linux.png' },
      { name: 'HP-UX', tag: 'os', icon: iconPrefix + '/images/skills/linux.png' },

      { name: 'Atlassian JIRA', tag: 'tool', icon: iconPrefix + '/images/skills/jira.png' },
      // { name: 'Visual Studio Team Services', tag: 'tool', icon: iconPrefix +'/images/skills/vsts.png' },
      { name: 'SVN', tag: 'tool', icon: iconPrefix + '/images/skills/svn.png' },
      { name: 'Git', tag: 'tool', icon: iconPrefix + '/images/skills/git.png' },
      { name: 'Bitbucket', tag: 'tool', icon: iconPrefix + '/images/skills/bitbucket.ico' },
      { name: 'Azure Portal', tag: 'tool', icon: iconPrefix + '/images/skills/azure.png' },
      { name: 'Directus CMS', tag: 'tool', icon: iconPrefix + '/images/skills/cms.png' },

      { name: 'Eclipse', tag: 'application', icon: iconPrefix + '/images/skills/eclipse2.png' },
      {
        name: 'Visual Studio',
        tag: 'application',
        icon: iconPrefix + '/images/skills/visualstudio.png',
      },
      {
        name: 'Visual Studio Code',
        tag: 'application',
        icon: iconPrefix + '/images/skills/visualstudio.png',
      },
      {
        name: 'Android Studio',
        tag: 'application',
        icon: iconPrefix + '/images/skills/android.png',
      },
      {
        name: 'IntelliJ WebStrom',
        tag: 'application',
        icon: iconPrefix + '/images/skills/intellij.png',
      },
    ],
  },
  testimonials: testimonials,
};

export { SECTIONS, iconPrefix };
