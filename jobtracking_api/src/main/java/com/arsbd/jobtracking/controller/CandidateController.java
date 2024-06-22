package com.arsbd.jobtracking.controller;

import com.arsbd.jobtracking.exception.ResourceNotFoundException;
import com.arsbd.jobtracking.model.Candidate;
import com.arsbd.jobtracking.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;

    // get all Candidate
    @GetMapping("/candidates")
    public List<Candidate> getAllCandidate() {
        return candidateRepository.findAll();
    }

    // create new job Candidate rest api
    @PostMapping("/candidates")
    public Candidate createCandidate(@RequestBody Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    // get candidate by id
    @GetMapping("/candidates/{id}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable Long id) {
        Candidate candidate = candidateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidate not exist with id :" + id));
        return ResponseEntity.ok(candidate);
    }

    // update candidate by Id
    @PutMapping("/candidates/{id}")
    public ResponseEntity<Candidate> updateCandidate(@PathVariable Long id, @RequestBody Candidate candidateDetails){
        Candidate candidate = candidateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidate not exist with id :" + id));
        candidate.setFullName(candidateDetails.getFullName());
        candidate.setCompanyName(candidateDetails.getCompanyName());
        candidate.setJobPosition(candidateDetails.getJobPosition());
        candidate.setWorkAuthorization(candidateDetails.getWorkAuthorization());
        candidate.setAppliedDate(candidateDetails.getAppliedDate());
        candidate.setJobDescription(candidateDetails.getJobDescription());

        Candidate updateCandidate= candidateRepository.save(candidate);
        return ResponseEntity.ok(updateCandidate);
    }
}
