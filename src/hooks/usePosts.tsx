import { useState, useEffect } from "react"
import { IPost } from "./usePostById"



export function usePosts(){
    // для типизации useState мы после названия хука пишем угловые скибички и в них указываем тип(интерфейс например) и пустой масив
    const [posts , setPosts] = useState<IPost[]>([])
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("https://fakestoreapi.com/products")
            const postsData = await response.json()
            setPosts(postsData)
        }
        fetchPosts()
    }, [])

    return {posts: posts}
}