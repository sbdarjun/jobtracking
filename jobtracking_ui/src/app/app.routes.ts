import { Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';

export const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'create-candidate', component: CreateCandidateComponent },
  { path: 'update-candidate/:id', component: UpdateCandidateComponent },
  { path: '', redirectTo: 'candidates', pathMatch: 'full' },
];
