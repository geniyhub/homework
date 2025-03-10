import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";
import { useLikedContext } from "../../context/LikedContext"
import { useContext } from "react";

import "./PostPage.css"

export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    const{post} = usePostById(postId)
    const { likedPosts, addPost, removePost, isLiked } = useLikedContext()

    if (!post) return <div>Loading...</div>;
    function addPosts(Item: any) {
        throw new Error("Function not implemented.");
    }

    return (
      <div className="post-div">
          <h1 className="title">{post.title}</h1>
          <div className="image-div">
              <img className="image" src={post.image}/>
          </div>
          <p className="description">{post.description}</p>
          <p className="author">Author: {post.author}</p>
          <div className="post-buttons">
            <button className="post-button" onClick = {()=>{
                if (post){
                    if (isLiked(post.id)) {
                        removePost(post.id)
                    } else {
                        addPost(post)
                    }
                }
            }}> salam </button>
          </div>
      </div>
    );
}