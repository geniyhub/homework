
// Все связанное с роутингом нужно вынести в отдельный компонент Routes
import { PostsList } from "./PostsList/PostsList";
// Эти импорти не используются, нужно убрать
import {Main} from "./Main/Main";
import { Header } from "./Header/Header";
import{ Footer } from "./Footer/Footer";
import AudioPlayer from "./AudioPlayer";
// Здесь это не надо, тк должно быть в Routes
import { Layout } from "./Layout/Layout";
import  { PostPage }  from "./PostPage/PostPage";
import {IPost} from "../hooks/usePosts";
import { LikedPostsPage } from "./LikedPostsPage/LikedPostsPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { createContext, useState } from "react";
// Импорт не используется, нужно убрать
import { title } from "process";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

// все связанное с контекстом должно быть вынесено в папку context в файл likeContext
interface ILikeContext{
  veryCoolMassive: IPost[],
  addPost: (item: IPost) => void,
  removePost: (id: number) => void,
  isLiked: (id: number) => boolean
}
// Во-первых, осуждаем(одобряем). Во-вторых veryCoolMassive -> likedPosts
const vicineko: ILikeContext = {
  veryCoolMassive: [],
  addPost: (item: IPost) => {},
  removePost: (id: number) => {},
  isLiked: (id: number) => {return false},
};
// Реализовать хук useLikeContext, упростит подключение контекста

export const likeContext = createContext<ILikeContext>(vicineko);

export function AppComponent(){
  const [likedPosts, setLikedPosts] = useState<IPost[]>([])
  function addPost(item: IPost){
    const tempArray = [
      ...likedPosts,
      item
    ]
    setLikedPosts(tempArray)
  }

  function removePost(id: number){
    const tempArray = likedPosts.filter((value) => {return value.id != id})
    setLikedPosts(tempArray)
  }

  function isLiked(id:number){
    return Boolean( likedPosts.find(item => item.id === id))
  }


  return(
    <div>
        {/* Здесь должно быть подключение провайдера контекста и компонента роутинга(2 строки) */}
      <likeContext.Provider value={{veryCoolMassive : likedPosts, addPost: addPost, removePost: removePost, isLiked: isLiked}}>
        <BrowserRouter>
        {/* Где то 2 табуляции, где то 4. Выбери один стиль и используй везде одинаковое кол-во табуляций */}
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                    <Route path = "/likedposts" element = {<LikedPostsPage></LikedPostsPage>}></Route>
                    {/* Если сокращаешь использование компонента до /, тогда лучше делать это и выше */}
                    {/* Также сократить можно и Route */}
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                </Route>
            </Routes>
            {/* табуляции */}
            </BrowserRouter>
      </likeContext.Provider>
    </div>
  )
}