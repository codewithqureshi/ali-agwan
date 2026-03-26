import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true, // Angular 17+ ke liye standalone true rakho
  imports: [RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projects = [
    {
      id: 1, // ID ADD KAR DI
      title: 'Skyline Capital Merger',
      category: 'Corporate Finance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
      location: 'Dubai, UAE'
    },
    {
      id: 2, // ID ADD KAR DI
      title: 'Global Wealth Trust',
      category: 'Asset Management',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000',
      location: 'Abu Dhabi'
    },
    {
      id: 3, // ID ADD KAR DI
      title: 'Falcon Tech Acquisition',
      category: 'Strategic Advisory',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000',
      location: 'Doha, Qatar'
    }
  ];
}