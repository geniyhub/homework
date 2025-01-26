import { PostsList } from "./PostsList/PostsList";
import {Main} from "./Main/Main";
import { Header } from "./Header/Header";
import{ Footer } from "./Footer/Footer";
import "./App.css"
import AudioPlayer from "./AudioPlayer";
import { Layout } from "./Layout/Layout";
import  { PostPage }  from "./PostPage/PostPage";
import {IPost} from "../hooks/usePostById";
import { LikedPostsPage } from "./LikedPostsPage/LikedPostsPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { createContext, useState } from "react";
import { title } from "process";

interface ILikeContext{
  veryCoolMassive: IPost[],
  addPost: (item: IPost) => void
}
const vicineko: ILikeContext = {
  veryCoolMassive: [],
  addPost: (item: IPost) => {}
}
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

  return(
    <div>
      <likeContext.Provider value={{veryCoolMassive : likedPosts, addPost : addPost}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                    <Route path = "/likedposts" element = {<LikedPostsPage></LikedPostsPage>}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
      </likeContext.Provider>
    </div>
  )
}