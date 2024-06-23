import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatDialogModule],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.css',
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[];
  constructor(
    private candidateService: CandidateService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog
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

  deleteCandidate(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.candidateService.deleteCandidate(id).subscribe((data) => {
          this.candidates = this.candidates.filter(
            (candidate) => candidate.id !== id
          );
          console.log(data);
          this.toastr.success('Candidate deleted successfully!', 'Success');
          this.getCandidate();
        });
      }
    });
  }

  candidateDetails(id: number) {
    this.router.navigate(['candidate-details', id]);
  }
}
