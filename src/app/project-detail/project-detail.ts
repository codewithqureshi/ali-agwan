import { Component, inject, OnInit } from '@angular/core';
import { Project, ProjectService } from '../project/project.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit{
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  
  project: Project | undefined;

  ngOnInit() {
    // URL se 'id' parameter uthana
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProjectById(id);
  }
}
