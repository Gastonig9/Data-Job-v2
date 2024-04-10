export interface User {
    userId?: string;
    fullname: string;
    email: string;
    description?: string;
    phone?: number;
    imageProfile?: string;
    jobSaved?: [];
    location?: string;
    role?: 'user' | 'admin' | 'company';
    skills?: string[];
  }

export interface ChangeUserData {
    fullname: string | null;
    description: string | null;
    email:string | null;
    location:string | null;
    phone:number | null;
}


export interface ChangeUserRole {
    role: string;
}


export interface ChangeUserImage {
    imageProfile: string;
}

export interface AddUserSkill {
    skills: string[];
}