import { PostsList } from "../shared/PostsList/PostsList";
import AudioPlayer from "../components/AudioPlayer";
import { Layout } from "../shared/Layout/Layout";
import  { PostPage }  from "../pages/PostPage/PostPage";
import { Login } from "../shared/Login/Login";
import { Registration } from "../shared/Registration/Registration";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"



export function AppRoutes(){
    return (
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
    )
}