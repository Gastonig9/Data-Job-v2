import { CardCategoryModel, InputConfig } from "../models";
import { Job } from "../models/job.model";

export const jobs: Job[] = [
  {
    jobTitle: "Senior Web Developer",
    description: "Únete a nuestro equipo como desarrollador web senior y trabaja en proyectos de vanguardia. Buscamos a alguien con experiencia en el desarrollo de aplicaciones web escalables y conocimientos profundos de tecnologías front-end y back-end.",
    location: "San Isidro, Argentina",
    salary: 100000,
    company: "Tech Innovations Inc.",
    seniority: "Senior",
    category: "Web Development",
    workday: "full-time",
    modality: "hybrid",
    companyMail: "contacto@techinnovations.com",
    linkedin: "https://linkedin.com/techinnovations",
    jobImage: "https://example.com/job-image1.jpg",
    posted: new Date("2024-03-20"),
    country: "Argentina"
  },
  {
    jobTitle: "Data Scientist",
    description: "Estamos buscando un científico de datos para analizar e interpretar conjuntos de datos complejos. El candidato ideal tendrá experiencia en el análisis estadístico, modelado predictivo y habilidades sólidas en programación.",
    location: "Lima, Perú",
    salary: 90000,
    company: "Data Insights Ltd.",
    seniority: "Senior",
    category: "Data",
    workday: "full-time",
    modality: "in person",
    companyMail: null,
    linkedin: null,
    jobImage: "https://example.com/job-image2.jpg",
    posted: new Date("2024-03-21"),
    country: "Perú"
  },
  {
    jobTitle: "UI/UX Designer",
    description: "Estamos contratando un diseñador UI/UX para crear diseños intuitivos y visualmente atractivos. El candidato ideal debe tener experiencia en diseño de interfaces de usuario, prototipado y colaboración estrecha con equipos de desarrollo.",
    location: "Montevideo, Uruguay",
    salary: 80000,
    company: "Design Solutions GmbH",
    seniority: "SemiSenior",
    category: "Design",
    workday: "full-time",
    modality: "remote",
    companyMail: "contacto@designsolutions.com",
    linkedin: "https://linkedin.com/designsolutions",
    jobImage: "https://example.com/job-image3.jpg",
    posted: new Date("2024-03-22"),
    country: "Uruguay"
  },
  {
    jobTitle: "Software Engineer",
    description: "Estamos buscando un ingeniero de software para desarrollar soluciones de software de alta calidad. El candidato ideal debe tener experiencia en el desarrollo de aplicaciones escalables y sólidos conocimientos en tecnologías como Java, Python o JavaScript.",
    location: "Puerto Madero, Ciudad Autonoma de Buenos Aires, Argentina",
    salary: 85000,
    company: "Software Innovations LLC",
    seniority: "Senior",
    category: "Web Development",
    workday: "full-time",
    modality: "remote",
    companyMail: "contacto@softwareinnovations.com",
    linkedin: "https://linkedin.com/softwareinnovations",
    jobImage: "https://example.com/job-image4.jpg",
    posted: new Date("2024-03-23"),
    country: "Argentina"
  },
  {
    jobTitle: "Marketing Manager",
    description: "Únete a nuestro equipo de marketing y lidera campañas innovadoras para impulsar el crecimiento. Buscamos a alguien con experiencia en estrategias de marketing digital, análisis de mercado y habilidades sólidas de comunicación.",
    location: "Santiago, Chile",
    salary: 95000,
    company: "Digital Marketing Solutions Inc.",
    seniority: "Senior",
    category: "Sales & Marketing",
    workday: "full-time",
    modality: "hybrid",
    companyMail: "contacto@dmsolutions.com",
    linkedin: null,
    jobImage: "https://example.com/job-image5.jpg",
    posted: new Date("2024-03-24"),
    country: "Chile"
  },
  {
    jobTitle: "HR Specialist",
    description: "Estamos contratando un especialista en recursos humanos para apoyar a nuestro equipo y garantizar operaciones fluidas. El candidato ideal tendrá experiencia en reclutamiento, gestión del talento y desarrollo organizacional.",
    location: "Bogota, Colombia",
    salary: 75000,
    company: "HR Solutions Co.",
    seniority: "SemiSenior",
    category: "Management / HR",
    workday: "full-time",
    modality: "remote",
    companyMail: "contacto@hrsolutions.com",
    linkedin: "https://linkedin.com/hrsolutions",
    jobImage: "https://example.com/job-image6.jpg",
    posted: new Date("2024-03-25"),
    country: "Colombia"
  },
  {
    jobTitle: "Quality Assurance Engineer",
    description: "Estamos buscando un ingeniero de aseguramiento de calidad para garantizar la calidad de nuestros productos de software.",
    location: "Santiago, Chile",
    salary: 80000,
    company: "Tech Solutions Pty Ltd",
    seniority: "SemiSenior",
    category: "QA",
    workday: "full-time",
    modality: "in person",
    companyMail: "contacto@techsolutions.com.au",
    linkedin: "https://linkedin.com/techsolutions",
    jobImage: "https://example.com/job-image7.jpg",
    posted: new Date("2024-03-26"),
    country: "Chile"
  }
];



export const countries = [
  "Argentina",
  "Chile",
  "Colombia",
  "Ecuador",
  "México",
  "Paraguay",
  "Perú",
  "Uruguay",
  "USA"
];

export const seniority = ["Senior" , "SemiSenior" , "Junior" , "Trainee"]

export const categories = ["Web Development", "Data", "Design", "QA", "Sales & Marketing", "Management / HR"]

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

export const inputText: InputConfig[] = [
  {
    id: "jobTitle",
    name: "jobTitle",
    type: "text",
    label: "Job Title",
    placeholder: "Enter job title",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "Description",
    placeholder: "Enter job description",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "location",
    name: "location",
    type: "text",
    label: "Location",
    placeholder: "Enter job location",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "salary",
    name: "salary",
    type: "number",
    label: "Salary",
    placeholder: "Enter job salary",
    value: 0,
    onChange: (e) => console.log(e.target.value),
    required: false,
  },
  {
    id: "company",
    name: "company",
    type: "text",
    label: "Company",
    placeholder: "Enter company name",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "companyMail",
    name: "companyMail",
    type: "email",
    label: "Company Mail",
    placeholder: "Enter company email",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: false,
  },
  {
    id: "linkedin",
    name: "linkedin",
    type: "url",
    label: "Linkedin",
    placeholder: "Enter Linkedin URL",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: false,
  },
];

