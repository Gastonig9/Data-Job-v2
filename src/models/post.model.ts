export interface Post {
    _id?: string;
    postTitle?: string;
    postDescription?: string;
    postAuthor?: string;
    postComments?: [
        {
            by: string;
            comment: string;
            published: string | Date
        }
    ]
    postDate?: string | Date | undefined;
    postCategory?: string;
    postImage?: string;
}

export interface CreateComment {
    comment?: string
    by?: string | undefined;
    published?: Date | undefined
    userCommentImage?: string | undefined
}