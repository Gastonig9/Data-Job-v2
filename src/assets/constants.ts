import { CardCategoryModel } from "../models/category.model";
import { Job } from "../models/job.model";

export const jobs: Job[] = [
  {
    jobTitle: "Senior Web Developer",
    description: "Join our team as a senior web developer and work on cutting-edge projects.",
    location: "San Francisco, USA",
    salary: 100000,
    company: "Tech Innovations Inc.",
    seniority: "Senior",
    category: "Web Development",
    workday: "full-time",
    modality: "hybrid",
    companyMail: "contact@techinnovations.com",
    linkedin: "https://linkedin.com/techinnovations",
    jobImage: "https://example.com/job-image1.jpg",
    posted: new Date("2024-03-20")
  },
  {
    jobTitle: "Data Scientist",
    description: "We're seeking a data scientist to analyze and interpret complex data sets.",
    location: "London, UK",
    salary: 90000,
    company: "Data Insights Ltd.",
    seniority: "Senior",
    category: "Data",
    workday: "full-time",
    modality: "in person",
    companyMail: "contact@datainsights.com",
    linkedin: null,
    jobImage: "https://example.com/job-image2.jpg",
    posted: new Date("2024-03-21")
  },
  {
    jobTitle: "UI/UX Designer",
    description: "We're hiring a UI/UX designer to create intuitive and visually appealing designs.",
    location: "Berlin, Germany",
    salary: 80000,
    company: "Design Solutions GmbH",
    seniority: "SemiSenior",
    category: "Design",
    workday: "full-time",
    modality: "remote",
    companyMail: "contact@designsolutions.com",
    linkedin: "https://linkedin.com/designsolutions",
    jobImage: "https://example.com/job-image3.jpg",
    posted: new Date("2024-03-22")
  },
  {
    jobTitle: "Software Engineer",
    description: "We're looking for a software engineer to develop high-quality software solutions.",
    location: "New York, USA",
    salary: 85000,
    company: "Software Innovations LLC",
    seniority: "Senior",
    category: "Web Development",
    workday: "full-time",
    modality: "remote",
    companyMail: "contact@softwareinnovations.com",
    linkedin: "https://linkedin.com/softwareinnovations",
    jobImage: "https://example.com/job-image4.jpg",
    posted: new Date("2024-03-23")
  },
  {
    jobTitle: "Marketing Manager",
    description: "Join our marketing team and lead innovative campaigns to drive growth.",
    location: "Los Angeles, USA",
    salary: 95000,
    company: "Digital Marketing Solutions Inc.",
    seniority: "Senior",
    category: "Sales & Marketing",
    workday: "full-time",
    modality: "hybrid",
    companyMail: "contact@dmsolutions.com",
    linkedin: null,
    jobImage: "https://example.com/job-image5.jpg",
    posted: new Date("2024-03-24")
  },
  {
    jobTitle: "HR Specialist",
    description: "We're hiring an HR specialist to support our team and ensure smooth operations.",
    location: "Toronto, Canada",
    salary: 75000,
    company: "HR Solutions Co.",
    seniority: "SemiSenior",
    category: "Management / HR",
    workday: "full-time",
    modality: "remote",
    companyMail: "contact@hrsolutions.com",
    linkedin: "https://linkedin.com/hrsolutions",
    jobImage: "https://example.com/job-image6.jpg",
    posted: new Date("2024-03-25")
  },
  {
    jobTitle: "Quality Assurance Engineer",
    description: "We're seeking a QA engineer to ensure the quality of our software products.",
    location: "Sydney, Australia",
    salary: 80000,
    company: "Tech Solutions Pty Ltd",
    seniority: "SemiSenior",
    category: "QA",
    workday: "full-time",
    modality: "in person",
    companyMail: "contact@techsolutions.com.au",
    linkedin: "https://linkedin.com/techsolutions",
    jobImage: "https://example.com/job-image7.jpg",
    posted: new Date("2024-03-26")
  }
];


export const countries = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "Uruguay",
  "Venezuela"
];


export const cardCategories: CardCategoryModel[] = [
  {
    name: "Web Developer",
    icon: "fa fa-desktop" // Ejemplo de icono de escritorio para Web Developer
  },
  {
    name: "Mobile Developer",
    icon: "fa fa-mobile" // Icono de teléfono móvil para Mobile Developer
  },
  {
    name: "UI/UX Designer",
    icon: "fa fa-paint-brush" // Icono de pincel para UI/UX Designer
  },
  {
    name: "Graphics Designer",
    icon: "fa fa-image" // Icono de imagen para Graphics Designer
  },
  {
    name: "Content Writer",
    icon: "fa fa-pencil" // Icono de lápiz para Content Writer
  },
  {
    name: "Management / HR",
    icon: "fa fa-user-tie" // Icono de usuario de negocios para Management / HR
  },
  {
    name: "Manager",
    icon: "fa fa-user" // Icono de usuario para Manager
  },
  {
    name: "Sales & Marketing",
    icon: "fa fa-chart-line" // Icono de gráfico de líneas para Sales & Marketing
  }
];

