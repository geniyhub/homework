import { useState } from "react"

interface IPostProps{
    title : string,
    description : string,
    img : string,
    author: string,
}

export function Post(props: IPostProps){
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    function addLike(){
        setLikes(likes + 1)
        setIsLiked(true)
        setIsDisliked(false)
    }
    function removeLike(){
        setLikes(likes - 1)
        setIsDisliked(true)
        setIsLiked(false)
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.img}/>
            <p>Author: {props.author}</p>
            <p>
                лайки:{likes}
            </p>
            <button onClick={removeLike} disabled={isDisliked}>
                -
            </button>
            <button onClick={addLike} disabled={isLiked}>
                +
            </button>
        </div>
    )
}