import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CandidateListComponent}  from './candidate-list/candidate-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CandidateListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobtracking_frontend';
}
