import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";

export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    const{post} = usePostById(postId)

    if (!post) return <div>Loading...</div>;
    return (
      <div className="post-div">
          <h1 className="title">{post.title}</h1>
          <div className="image-div">
              <img className="image" src={post.image}/>
          </div>
          <p className="description">{post.description}</p>
          <p className="author">Author: {post.author}</p>
      </div>
    );
}