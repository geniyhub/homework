import { PostsList } from "./PostsList/PostsList";
import { Header } from "./Header/Header";
import{ Footer } from "./Footer/Footer";
import "./App.css"
import AudioPlayer from "./AudioPlayer";

export function AppComponent(){
  const post = "Постиксы"

  return(
    <div>
        <Header />
        <AudioPlayer />
        <h1 className="app-text">{post}</h1>
        <PostsList />
        <Footer />
    </div>
  )
}