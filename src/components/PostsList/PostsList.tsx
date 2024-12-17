import { Post } from '../Post/Post';
import {useState, useEffect } from "react"
import { usePosts } from "../../hooks/usePosts"
import './PostList.css'



export function PostsList(){
  const {posts} = usePosts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (selectedCategory === 'all'){
      setFilteredPosts(posts)
    }else{
      const filtered = posts.filter((posts)=>{
        return posts.category === selectedCategory
      })
      setFilteredPosts(filtered)
    }
  },[selectedCategory])
    return (
           <div className='posts-list'>
                <select className="selectionMenu" onChange={(event) =>{
                  const selectedValue = event.target.value
                  setSelectedCategory(selectedValue)
                }}>
                    <option className='optin-all' value='all'>Все категории</option>
                    <option value='skibidi'>Скибиды</option>
                    <option value='rizz'>Ризз</option>
                    <option value='biba'>Биба</option>
                    <option value='gigachad'>Гигачад</option>

                </select>
              {filteredPosts.map((post)=>{
                return <Post
                            title={post.title}
                            description={post.description}
                            img={post.image}
                            author={post.author}
                            id={post.id}
                            key={post.id}></Post>
              })}
           </div>
    )
}