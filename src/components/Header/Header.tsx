import "./Header.css"
import {Link} from "react-router-dom"

export function Header(){
    return (
        <div>
                <header>
                    <div className="Header">
                        <Link to="/">Main</Link>
                        <div className="ImageLogoDiv">
                            <img className="ImageLogo" src="https://i.imgur.com/rfQ8oxT.png"/>
                        </div>
                        <Link to="/posts">Posts</Link>
                    </div>
                </header>               
        </div>
    )
}