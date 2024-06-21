import { Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';

export const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'create-candidate', component: CreateCandidateComponent },
  { path: '', redirectTo: 'candidates', pathMatch: 'full' },
];
