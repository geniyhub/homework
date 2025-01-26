import { useContext } from "react"
import { likeContext } from "../App"

export function LikedPostsPage(){
    const { veryCoolMassive } = useContext(likeContext)
    return(
        <div>
            {veryCoolMassive.map((veryCoolItem) => {
                return (
                    <div>
                        <h1>{veryCoolItem.title}</h1>
                        <img src={veryCoolItem.image}/>
                    </div>
                )
            })}
        </div>
    )
}