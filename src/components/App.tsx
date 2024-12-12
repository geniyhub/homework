import { PostsList } from "./PostsList/PostsList";
import {Main} from "./Main/Main";
import { Header } from "./Header/Header";
import{ Footer } from "./Footer/Footer";
import "./App.css"
import AudioPlayer from "./AudioPlayer";
import { Layout } from "./Layout/Layout";
import { PostPage } from "./PostPage/PostPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

export function AppComponent(){
  const post = "Постиксы"

  return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                </Route>
            </Routes>
            </BrowserRouter>
    </div>
  )
}