package com.arsbd.jobtracking.controller;

import com.arsbd.jobtracking.model.Candidate;
import com.arsbd.jobtracking.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Candidate> getAllCandidate(){
        return candidateRepository.findAll();
    }

    // create new job Candidate rest api
    @PostMapping("/candidates")
    public Candidate createCandidate(@RequestBody Candidate candidate){
        return candidateRepository.save(candidate);
    }

}
