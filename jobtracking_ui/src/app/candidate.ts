export class Candidate {
  id: number;
  fullName: String;
  companyName: String;
  jobPosition: String;
  workAuthorization: String;
  appliedDate: Date;
  jobDescription: String;

  constructor(
    id: number,
    fullName: string,
    companyName: string,
    jobPosition: string,
    workAuthorization: string,
    appliedDate: string | Date,
    jobDescription: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.workAuthorization = workAuthorization;
    this.appliedDate = this.convertToDate(appliedDate);
    this.jobDescription = jobDescription;
  }
  private convertToDate(value: string | Date): Date {
    if (value instanceof Date) {
      return value;
    } else {
      return new Date(value);
    }
  }
}
