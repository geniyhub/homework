import { useState, useEffect } from "react"

export interface IPost{
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    author: string;
    image: string;
}

export function usePostById(id: number){
    const [post , setPost] = useState<IPost>()
    
    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const postData = await response.json()
            setPost(postData)
        }
        fetchProduct()
    }, [id])
    return {post: post}
}