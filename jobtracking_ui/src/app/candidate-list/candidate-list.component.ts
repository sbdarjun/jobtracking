import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.css',
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[];
  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) {
    this.candidates = [];
  }
  ngOnInit(): void {
    this.getCandidate();
  }
  private getCandidate() {
    this.candidateService.getCandidateList().subscribe((data) => {
      this.candidates = data;
    });
  }
  updateCandidate(id: number) {
    this.router.navigate(['update-candidate', id]);
  }
}
