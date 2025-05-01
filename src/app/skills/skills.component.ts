import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      id: 1,
      category: 'Frontend Development',
      icon: 'fa fa-code',
      items: ['Angular', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
    },
    {
      id: 2,
      category: 'Backend Development',
      icon: 'fa fa-server',
      items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      id: 3,
      category: 'Database',
      icon: 'fa fa-database',
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase']
    },
    {
      id: 4,
      category: 'DevOps & Tools',
      icon: 'fa fa-cogs',
      items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Azure', 'Linux']
    }
  ];
}
