import { Component } from '@angular/core';
import { Service } from "../service/service";
import { Project } from "../project/project";
import { Testimoanl } from "../testimoanl/testimoanl";
import { HowItWorks } from '../how-it-works/how-it-works';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Service, Project, Testimoanl,HowItWorks],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
