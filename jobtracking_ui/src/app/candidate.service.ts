import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseURL = "http://localhost:8080/api/v1/candidates";
  // Injected httpClient module on CandidateService
  constructor(private httpClient: HttpClient) { }

  getCandidateList(): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseURL}`);
  }
}
