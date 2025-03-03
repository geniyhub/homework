import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";
// Лучше реализовать хук, который будет возвращать контекст.
import { likeContext } from "../App";
// Этого не будет если реализовать хук для контекста
import { useContext } from "react";
// PostPage.css?
import "./PostPage"

export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    // Ошибку и загрузку нужно получать из хука
    const{post} = usePostById(postId)
    const { addPost } = useContext(likeContext) 
    // Хороший вариант, но должен зависеть от loading. 
    // Если делаешь так, тогда лучше делать по такому стилю везде, где есть запросы
    // Добавить также нужно обработку ошибки и вывод ее пользователю
    if (!post) return <div>Loading...</div>;
    // Здесь это не надо
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
                // Здесь нужно использовать isLiked функцию и проверять, лайкнут ли пост, если лайкнут тогда нельза добавлять и нужно удалить пост из лайкнутых
                if (post){
                    addPost(post)
                    console.log("aboba")
                }
            }}> salam </button>
          </div>
      </div>
    );
}