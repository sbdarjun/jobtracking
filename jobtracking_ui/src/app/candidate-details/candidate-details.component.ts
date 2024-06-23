import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Candidate } from '../candidate';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { data } from 'cypress/types/jquery';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.css',
})
export class CandidateDetailsComponent {
  id!: number;
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
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.candidateService.getCandidtateById(this.id).subscribe((data) => {
      this.candidate = data;
    });
  }
}
