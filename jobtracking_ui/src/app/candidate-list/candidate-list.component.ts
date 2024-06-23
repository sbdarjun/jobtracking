import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService
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

  deleteCandidate(id: number){
    this.candidateService.deleteCandidate(id).subscribe(data =>{
      console.log(data);
      this.toastr.success('Candidate deleted successfully!', 'Success');
      this.getCandidate();
    })
  }
}
