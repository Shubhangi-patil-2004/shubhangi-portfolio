import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularWebsite');

  name = 'Shubhangi Patil';
  role = 'Full Stack .NET Developer';
  email = 'shubhangipatil9835@gmail.com';
  phone = '+91 9146189835';
  location = 'Kolhapur, Maharashtra, India';
  linkedin = 'https://www.linkedin.com/in/shubhangi-patil-b19ab6314/';
  github = 'https://github.com/'; // TODO: put your GitHub profile URL here
  year = new Date().getFullYear();

  stats = [
    { value: '25+', label: 'REST APIs built in ASP.NET Core' },
    { value: '40%', label: 'faster report generation after SQL tuning' },
    { value: '8', label: 'core banking modules delivered' },
    { value: '1.5+ yrs', label: 'shipping ERP products to live clients' },
  ];

  skillGroups = [
    {
      title: 'Backend',
      items: [
        'C#',
        'ASP.NET Core',
        'Web API',
        'RESTful APIs',
        'JWT Authentication',
        'Role-Based Access',
      ],
    },
    {
      title: 'Frontend & Apps',
      items: ['React.js', 'Ant Design', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', '.NET MAUI'],
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Cloud & Messaging',
      items: ['AWS EC2', 'AWS Lambda', 'Azure App Service', 'Azure SQL', 'Google Cloud Pub/Sub'],
    },
    {
      title: 'DevOps & Tools',
      items: [
        'Git / GitHub',
        'Docker',
        'Kubernetes (exposure)',
        'IIS',
        'Jira',
        'Postman',
        'Swagger',
      ],
    },
    {
      title: 'Reporting & Practices',
      items: ['RDLC', 'Flask + Jinja2 + PyODBC', 'DSA', 'OOP', 'Agile / Scrum', 'SDLC'],
    },
  ];

  experiences = [
    {
      role: 'Junior Full Stack .NET Developer',
      company: 'Indosoft Consultants Pvt. Ltd., Kolhapur',
      duration: 'May 2026 – Nov 2026',
      points: [
        'Built core modules of an ERP suite used by banking, cooperative credit (Patsanstha), payroll and sugar-factory clients.',
        'Delivered 25+ RESTful APIs with JWT authentication, validation and role-based access, serving React.js (Ant Design) screens and .NET MAUI apps.',
        'Tuned SQL Server queries and stored procedures, cutting report generation time by about 40%.',
        'Added asynchronous messaging with Google Cloud Pub/Sub for transaction and notification events, so modules no longer depend on each other directly.',
        'Provisioned AWS EC2, wrote AWS Lambda jobs for scheduled tasks, and managed SQL Server and Azure SQL databases.',
        'Containerized services with Docker, shipped IIS releases and fixed production issues at client sites.',
        'Worked with QA, implementation and support teams in two-week Agile sprints on Jira, with Git-based code reviews.',
      ],
    },
    {
      role: 'Junior .NET / Web Developer',
      company: 'AFS Placement, Kolhapur',
      duration: 'Jul 2025 – Dec 2025',
      points: [
        'Built .NET backend features on SQL Server and responsive HTML5, CSS3, Bootstrap and JavaScript interfaces.',
        'Owned integration, debugging and functional testing. Promoted from intern within six months for consistent, on-time delivery.',
      ],
    },
    {
      role: 'Web Development Intern',
      company: 'AFS Placement, Kolhapur',
      duration: 'Jan 2025 – Jun 2025',
      points: [
        'Started on the web team while finishing my B.Sc., working on interfaces and basic backend tasks.',
      ],
    },
  ];

  projects = [
    {
      title: 'Banking & Cooperative Credit ERP',
      problem: 'Branches approved loans on paper and compiled reports by hand.',
      result:
        'Eight modules: Customer, Shares, Savings, FD, RD, Loans, Pigmy and Agent Management. Branch-to-Head Office loan approval now runs on JWT-secured APIs, and PDF, Excel and Word reports are generated automatically.',
      tech: ['ASP.NET Core Web API', 'React.js', 'C#', 'SQL Server', 'Flask'],
    },
    {
      title: 'Payroll Management System',
      problem: 'Salary, deductions and recoveries took days to process each cycle.',
      result:
        'Automated branch-wise salary, GL mapping, PF, deductions, leave and recovery posting. The payroll cycle went from days to hours.',
      tech: ['.NET MAUI', 'ASP.NET Core Web API', 'SQL Server', 'RDLC'],
    },
    {
      title: 'Sugar Factory ERP',
      problem: 'Farmer registration, cane tonnage and billing needed to work on the factory floor.',
      result:
        'Windows and mobile modules for farmer registration, cane tonnage and billing, with PDF/Excel exports and Bluetooth receipt printing.',
      tech: ['.NET MAUI', 'SQL Server', 'RDLC'],
    },
  ];

  education = [
    {
      degree: 'B.Sc. Computer Science',
      place: 'Vivekananda College, Kolhapur',
      year: '2022 – 2025',
      score: '88.73%',
    },
    { degree: 'HSC', place: 'Maharashtra State Board', year: '2022', score: '78%' },
    { degree: 'SSC', place: 'Maharashtra State Board', year: '2020', score: '93.6%' },
  ];

  achievements = [
    '1st Runner-up, Inter-college Coding Competition',
    'Runner-up, Inter-college Innovative Coder Competition',
  ];

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
