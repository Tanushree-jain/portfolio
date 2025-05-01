import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      id: 1,
      position: 'Software Engineer',
      company: 'C-DAC, MOHALI',
      period: '2022 - Present',
      responsibilities: [
        'Developed and optimized RESTful APIs using Node.js & Express.js, reducing API response times by 35% through query optimization and load balancing (PM2)',
        'Designed scalable, secure, and maintainable web application architectures using Angular & TypeScript',
        'Led a team of 6+ developers, managing the end-to-end SDLC, ensuring 100% on-time project delivery',
        'Refactored legacy code, improving maintainability and reducing bug occurrences by 25%',
        'Developed and deployed a Chat Bot using Angular & Node.js (Socket.io), improving user engagement by 40%',
        'Resolved 25+ security vulnerabilities in VAPT, ensuring compliance with OWASP security standards',
        'Provided technical training & project handover to the CERT-IN Team'
      ],
      technologies: ['Angular', 'Node.js', 'TypeScript', 'Express.js', 'Socket.io', 'MongoDB', 'PM2', 'JavaScript','MySQL','Elasticsearch','Kibana','Docker','CI/CD']
    },
    {
      id: 2,
      position: 'System Administrator',
      company: 'INFLIBNET CENTRE',
      period: '2021 - 2022',
      responsibilities: [
        'Managed server infrastructure for institutes like IITs, NITs, and IISc, ensuring 99.9% uptime',
        'Set up and configured Shibboleth for Service Providers (SP) and Identity Providers (IdP)',
        'Optimized authentication workflows, reducing login time by 20%, improving user experience',
        'Contributed innovative ideas to enhance application functionality based on project needs',
        'Maintained and renewed SSL certificates for multiple institutional domains',
        'Implemented security best practices and monitored system performance'
      ],
      technologies: ['Shibboleth', 'Linux', 'Apache', 'SSL/TLS', 'Shell Scripting', 'System Administration']
    }
  ];
} 