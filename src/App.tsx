import { PostsList } from "./PostsList";

export function AppComponent(){
  const post = "Постиксы"

  return(
    <div>
      <h1>{post}</h1>
      <PostsList />
    </div>
  )
}