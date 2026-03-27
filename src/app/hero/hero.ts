import { Component } from '@angular/core';
import { Service } from "../service/service";
import { Project } from "../project/project";
import { HowItWorks } from "../how-it-works/how-it-works";
import { Testimonial } from "../testimonial/testimonial";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Service, Project, HowItWorks, Testimonial],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
