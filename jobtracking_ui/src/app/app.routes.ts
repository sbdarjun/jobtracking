import { Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

export const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'create-candidate', component: CreateCandidateComponent },
  { path: 'update-candidate/:id', component: UpdateCandidateComponent },
  { path: 'candidate-details/:id', component: CandidateDetailsComponent },
  { path: '', redirectTo: 'candidates', pathMatch: 'full' },
];
