import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { FormsModule } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-candidate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-candidate.component.html',
  styleUrl: './create-candidate.component.css',
})
export class CreateCandidateComponent implements OnInit {
  candidate: Candidate = {
    id: 0,
    fullName: '',
    companyName: '',
    jobPosition: '',
    workAuthorization: '',
    appliedDate: new Date(),
    jobDescription: '',
  };
  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveCandidate() {
    this.candidateService.createCandidate(this.candidate).subscribe(
      (data) => {
        console.log(data);
        this.goToCandidateList();
      },
      (error) => console.log(error)
    );
  }
  goToCandidateList() {
    this.router.navigate(['/candidates']);
  }

  onSubmit() {
    console.log(this.candidate);
    this.saveCandidate();
  }
}
