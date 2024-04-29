import { CreateComment, Post } from "./post.model";
import { User } from "./user.model"

export interface UserResponse {
    message?: string
    response?: User[]
    status: number
}

export interface PaymentResponse {
    message?: string;
    response?: string;
    status: number;
}

export interface PostResponse {
    message?: string;
    response?: Post[] | Post | undefined
    error?: string;
    status: number;
}

export interface PostIndividualResponse {
    message?: string;
    response?: Post | undefined
    error?: string;
    status: number;
}

export interface PostCommentsResponse {
    message?: string;
    response?: CreateComment[]
    error?: string;
    status: number;
}