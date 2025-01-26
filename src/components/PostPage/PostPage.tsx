import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";
import { likeContext } from "../App";
import { useContext } from "react";

import "./PostPage"

export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    const{post} = usePostById(postId)
    const { addPost } = useContext(likeContext) 

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
                    addPost(post)
                    console.log("aboba")
                }
            }}> salam </button>
          </div>
      </div>
    );
}