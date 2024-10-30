export interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    likes: number;
    views: number;
    date: string;
    image: string;
}

export interface BlogResponse {
    data: Blog[];
    code: number;
    msg: string;
}