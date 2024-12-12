import { Post } from '../Post/Post';
import {useState, useEffect } from "react"
import './PostList.css'

const posts = [
  {
    id: 0,
    title: 'Пост 1',
    description: 'бубубубубубуббубубубубубубубубубубубууббу',
    author: 'автор1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkG1nCDrabc6rqG00JWTaduqgqSweFsMRPI79OYdyZ8jDYOLq9i2wV6-oMHlD3C3cnFs&usqp=CAU',
    category: 'skibidi'
  },

  {
    id: 1,
    title: 'Пост 2',
    description: 'алалалаллалалалалалалалалаллалала',
    author: 'автор2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrm1spEJgodSruBCQXUu27HVkvK8zzY1LB1FoaplAbjtSy-EJMxEJxO7rFjXUcUJ1nBag&usqp=CAU',
    category: 'rizz'
  },

  {
    id: 2,
    title: 'Пост 3',
    description: 'жужужужужужужужужжужужужужужужужуж',
    author: 'автор3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ylahj3RUvSeAbtMCMsUI1nj9iX4Isp4E_Jq0trNvEVeDe7fVFC88ToS7Wbtfe9I8Oe8&usqp=CAU',
    category: 'biba'
  },

  {
    id: 3,
    title: 'Пост 4',
    description: 'тутутутутутутуттутутутутутутууттутуту',
    author: 'автор4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVu3DVrjoMaqWe9yqbWHYhRPc6WZMdQaQLBOPyKuiYIW8ZCne9tPdvIA2htZ49TfQq4k&usqp=CAU',
    category: 'gigachad'
  },
]

export function PostsList(){
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(()=>{
    async function fetchPosts(){
      const response = await fetch('https://fakestoreapi.com/products')
      const posts = await response.json()
      setFilteredPosts(posts)
    }
    fetchPosts()
  },[])

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