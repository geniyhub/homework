import { useLikedContext } from "../../context/LikedContext"

import "./LikedPostsPage.css"

export function LikedPostsPage(){


    const { likedPosts, addPost, removePost } = useLikedContext()
    return(
        <div>
            {likedPosts.map((likedPost) => {
                return (
                    <div className="liked-post-div">
                        <h1 className="liked-title">{likedPost.title}</h1>
                        <div className="liked-image-div">
                            <img className="liked-image" src={likedPost.image}/>
                        </div>
                        <p className="liked-description">{likedPost.description}</p>
                        <p className="liked-author">{likedPost.author}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}