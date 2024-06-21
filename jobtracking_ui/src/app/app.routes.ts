import { Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

export const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: '', redirectTo: 'candidates', pathMatch: 'full' },
];
