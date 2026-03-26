import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  services = [
    {
      icon: 'fa-chart-line',
      title: 'Wealth Management',
      desc: 'Tailored strategies to preserve and grow your assets across global markets.',
      highlight: false
    },
    {
      icon: 'fa-building',
      title: 'Corporate Advisory',
      desc: 'Strategic consulting for mergers, acquisitions, and structural optimization.',
      highlight: true
    },
    {
      icon: 'fa-shield-alt',
      title: 'Asset Protection',
      desc: 'Securing your legacy with robust legal and financial frameworks.',
      highlight: false
    },
  ];
}
