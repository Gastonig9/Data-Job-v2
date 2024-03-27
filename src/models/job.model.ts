export interface Job {
    jobTitle: string
    description: string
    location: string
    salary: number
    company: string
    seniority: "Senior" | "SemiSenior" | "Junior" | "Trainee"
    category: "Web Development" | "Data" | "Design" | "QA" | "Sales & Marketing" | "Management / HR"
    workday: "full-time" | "part-time"
    modality: "remote" | "hybrid" | "in person"
    companyMail: string
    linkedin: string | null
    jobImage: string
    posted: Date
}