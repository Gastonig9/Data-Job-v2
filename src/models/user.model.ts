/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
    _id?: string;
    userId?: string;
    fullname: string;
    email: string;
    description?: string;
    phone?: number;
    userImage?: string;
    jobSaved?: [];
    location?: string;
    role?: 'user' | 'admin' | 'company';
    skills?: string[];
    user?: any
    applicants?: [
        {
            applicant: string;
            jobTo: string;
            displayed: boolean;
        }
    ]
    jobTo?: string;
}

export interface UserApplicantResponse {
    message: {
        jobTo: string;
        user: {
            _id: string;
            fullname: string;
            email: string;
            jobSaved: string[]; 
            role: string;
        };
    }[];
}


export interface ChangeUserData {
    fullname: string | null;
    description: string | null;
    email: string | null;
    location: string | null;
    phone: number | null;
}


export interface ChangeUserRole {
    role: string;
}


export interface ChangeUserImage {
    userImage: string;
}

export interface AddUserSkill {
    skills: string[];
}

export interface ChangePassword {
    newPassword: string | undefined;
}