import { PostsList } from "./PostsList";
import { Header } from "./Header";
import{ Footer } from "./Footer";
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