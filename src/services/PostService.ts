/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from "../assets/url";
import { CreateComment } from "../models/post.model";
import { PostCommentsResponse, PostIndividualResponse, PostResponse } from "../models/response.model";

export class PostService {
    private readonly baseUrl = BASE_URL.prod;


    async getAllPost(): Promise<PostResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/post/get-posts`);
            const data = await response.json()
            return data;
        } catch (error: any) {
            return error;
        }
    }

    async getPostById(postId: string): Promise<PostIndividualResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/post/get-post-id/${postId}`);
            const data = await response.json()
            return data;
        } catch (error: any) {
            return error;
        }
    }

    async getPostComments(postId:string| undefined): Promise<PostCommentsResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/post/get-post-comments/${postId}`);
            const data = await response.json()
            return data;
        } catch (error: any) {
            return error;
        }
    }

    async postComment(postId: string | undefined, newComment: CreateComment) {
        try {
            const response = await fetch(`${this.baseUrl}/post/create-comment/${postId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }
}