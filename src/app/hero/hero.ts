import { Component } from '@angular/core';
import { Service } from "../service/service";
import { Project } from "../project/project";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Service, Project],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
