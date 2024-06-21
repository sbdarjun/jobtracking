import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import {CandidateListComponent}  from './candidate-list/candidate-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CandidateListComponent,RouterOutlet,RouterModule],
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Track Your Job';
}
