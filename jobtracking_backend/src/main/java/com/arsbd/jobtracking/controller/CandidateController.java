package com.arsbd.jobtracking.controller;

import com.arsbd.jobtracking.model.Candidate;
import com.arsbd.jobtracking.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;

    // get all Candidate

    @GetMapping("/candidates")
    public List<Candidate> getAllCandidate(){
        return candidateRepository.findAll();
    }
}
