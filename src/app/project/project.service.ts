import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  client: string;
  year: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Skyline Capital Merger',
      category: 'Corporate Finance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000',
      location: 'Dubai, UAE',
      description: 'Strategic merger of two major financial entities in the heart of Dubai.',
      challenge: 'Aligning multi-jurisdictional compliance and asset valuations.',
      solution: 'Created a unified financial framework and custom tax structures.',
      client: 'Skyline Holdings',
      year: '2025'
    },
    {
      id: 2,
      title: 'Global Wealth Trust',
      category: 'Asset Management',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1000',
      location: 'Abu Dhabi',
      description: 'Comprehensive wealth restructuring for a private family office.',
      challenge: 'Legacy asset protection with global liquidity requirements.',
      solution: 'Implemented a private trust structure with offshore banking integration.',
      client: 'Private Client',
      year: '2024'
    },
    {
      id: 3,
      title: 'Global Wealth Trust',
      category: 'Asset Management',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1000',
      location: 'Abu Dhabi',
      description: 'Comprehensive wealth restructuring for a private family office.',
      challenge: 'Legacy asset protection with global liquidity requirements.',
      solution: 'Implemented a private trust structure with offshore banking integration.',
      client: 'Private Client',
      year: '2024'
    }
  ];

  getProjects() { return this.projects; }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}