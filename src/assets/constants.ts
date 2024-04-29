import { CardCategoryModel, InputConfig } from "../models";
import { Subscription } from "../models/subscription.model";

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
    placeholder: "Full Stack Developer Jr",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
    min: 8,
    max: 15
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
    min: 15,
    max: 450
  },
  {
    id: "location",
    name: "location",
    type: "text",
    label: "Location",
    placeholder: "Buenos Aires, Argentina",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
    min: 5,
    max: 15
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
    placeholder: "techsolutions@gmail.com",
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

export const inputTextProfile: InputConfig[] = [
  {
    id: "fullname",
    name: "fullname",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "Description",
    placeholder: "Enter description",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "location",
    name: "location",
    type: "text",
    label: "Location",
    placeholder: "Enter location",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    type: "tel",
    label: "Phone",
    placeholder: "Enter phone number",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter email",
    value: "",
    onChange: (e) => console.log(e.target.value),
    required: true,
  },
];

export const subscriptionCards: Subscription[] = [
  {
    plan: "Basic",
    price: 10,
    benefits: ["See jobs", "20 Days Duration", "Post jobs"],
    path: "plan-basic"
  },
  {
    plan: "Premium",
    price: 20,
    benefits: ["See jobs", "20 Days Duration", "Post jobs", "Publish articles"],
    path: "plan-premium"
  }
]

