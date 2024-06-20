package com.arsbd.jobtracking.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "jobtracking")
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "job_position")
    private String jobPosition;

    @Column(name = "work_authorization")
    private String workAuthorization;

    @Column(name = "applied_date")
    private Date appliedDate;

    @Column(name = "job_description")
    private String jobDescription;

    public Candidate(){

    }
    public Candidate(String fullName, String companyName, String jobPosition, String work_authorization, Date appliedDate, String jobDescription) {
        super();
        this.fullName = fullName;
        this.companyName = companyName;
        this.jobPosition = jobPosition;
        this.workAuthorization = work_authorization;
        this.appliedDate = appliedDate;
        this.jobDescription = jobDescription;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public String getWorkAuthorization() {
        return workAuthorization;
    }

    public void setWorkAuthorization(String workAuthorization) {
        this.workAuthorization = workAuthorization;
    }

    public Date getAppliedDate() {
        return appliedDate;
    }

    public void setAppliedDate(Date appliedDate) {
        this.appliedDate = appliedDate;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}
