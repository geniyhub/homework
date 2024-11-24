import { Post } from './Post';

export function PostComponent(){
    const post = 'Постиксы';
    const posts = [
      {
        id: 0,
        title: 'Пост 1',
        description: 'бубубубубубуббубубубубубубубубубубубууббу',
        author: 'автор1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkG1nCDrabc6rqG00JWTaduqgqSweFsMRPI79OYdyZ8jDYOLq9i2wV6-oMHlD3C3cnFs&usqp=CAU'
      },

      {
        id: 1,
        title: 'Пост 2',
        description: 'алалалаллалалалалалалалалаллалала',
        author: 'автор2',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrm1spEJgodSruBCQXUu27HVkvK8zzY1LB1FoaplAbjtSy-EJMxEJxO7rFjXUcUJ1nBag&usqp=CAU'
      },

      {
        id: 2,
        title: 'Пост 3',
        description: 'жужужужужужужужужжужужужужужужужуж',
        author: 'автор3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ylahj3RUvSeAbtMCMsUI1nj9iX4Isp4E_Jq0trNvEVeDe7fVFC88ToS7Wbtfe9I8Oe8&usqp=CAU'
      },

      {
        id: 3,
        title: 'Пост 4',
        description: 'тутутутутутутуттутутутутутутууттутуту',
        author: 'автор4',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVu3DVrjoMaqWe9yqbWHYhRPc6WZMdQaQLBOPyKuiYIW8ZCne9tPdvIA2htZ49TfQq4k&usqp=CAU'
      }
    ]
    return (
           <div>
              <h1>
                  {post}
              </h1>
              {posts.map((post)=>{
                return <Post
                            title={post.title}
                            description={post.description}
                            img={post.img}
                            author={post.author}
                            key={post.id}></Post>
              })}
           </div>
    )
}