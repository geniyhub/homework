import { PostsList } from "./PostsList/PostsList";
import {Main} from "./Main/Main";
import { Header } from "./Header/Header";
import{ Footer } from "./Footer/Footer";
import AudioPlayer from "./AudioPlayer";
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
import { title } from "process";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

interface ILikeContext{
  veryCoolMassive: IPost[],
  addPost: (item: IPost) => void,
  removePost: (id: number) => void,
  isLiked: (id: number) => boolean
}
const vicineko: ILikeContext = {
  veryCoolMassive: [],
  addPost: (item: IPost) => {},
  removePost: (id: number) => {},
  isLiked: (id: number) => {return false},
};

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
      <likeContext.Provider value={{veryCoolMassive : likedPosts, addPost: addPost, removePost: removePost, isLiked: isLiked}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                    <Route path = "/likedposts" element = {<LikedPostsPage></LikedPostsPage>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
      </likeContext.Provider>
    </div>
  )
}