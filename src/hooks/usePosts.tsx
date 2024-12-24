import { useState, useEffect } from "react"
import { IPost } from "./usePostById"



export function usePosts(){
    // для типизации useState мы после названия хука пишем угловые скибички и в них указываем тип(интерфейс например) и пустой масив
    const [posts , setPosts] = useState<IPost[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        async function fetchPosts() {
            try{
                setLoading(true)
                const response = await fetch("https://fakestoreapi.com/products")
                const postsData = await response.json()
                setPosts(postsData)
            } catch(error){
                console.log(error)
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally{
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return {posts: posts, loading: loading, error: error}
}