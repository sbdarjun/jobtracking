import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../candidate.service';
import { HttpClientModule } from '@angular/common/http';

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
    private candidateService: CandidateService  ) {
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
}
