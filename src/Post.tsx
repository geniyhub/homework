interface IPostProps{
    title : string,
    description : string,
    img : string,
    author: string,
}

export function Post(props: IPostProps){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.img}/>
            <p>Author: {props.author}</p>
        </div>
    )
}