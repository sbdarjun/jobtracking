import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { FormsModule } from '@angular/forms';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-create-candidate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-candidate.component.html',
  styleUrl: './create-candidate.component.css',
})
export class CreateCandidateComponent implements OnInit {
  candidate: Candidate = {
    id: 1,
    fullName: '',
    companyName: '',
    jobPosition: '',
    workAuthorization: '',
    appliedDate: new Date(),
    jobDescription: '',
  };
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.candidate);
  }
}