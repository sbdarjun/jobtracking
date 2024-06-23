import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-candidate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-candidate.component.html',
  styleUrl: './update-candidate.component.css',
})
export class UpdateCandidateComponent implements OnInit {
  id!: number;
  // candidate: Candidate = new Candidate();
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
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.candidateService.getCandidtateById(this.id).subscribe(
      (data) => {
        this.candidate = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.candidateService.updateCandidate(this.id, this.candidate).subscribe(
      (data) => {
        this.goToCandidateList();
        this.toastr.success('Candidate update successfully!', 'Success');
      },
      (error) => console.log(error)
    );
  }

  goToCandidateList() {
    this.router.navigate(['/candidates']);
  }
}
