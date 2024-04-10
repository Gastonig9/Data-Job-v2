export interface Job {
    _id?:string;
    jobTitle: string
    description: string
    location: string
    salary: number
    company: string
    seniority: "" | "Senior" | "SemiSenior" | "Junior" | "Trainee"
    category: "" | "Web Development" | "Data" | "Design" | "QA" | "Sales & Marketing" | "Management / HR"
    workday: "" | "full-time" | "part-time"
    modality: "" |"remote" | "hybrid" | "in person"
    companyMail: string | null
    linkedin: string | null
    jobImage: string
    posted: string | Date
    country: string
}