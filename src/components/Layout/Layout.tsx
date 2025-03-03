// Здесь это не надо
import { ReactNode } from "react"
import { Main } from "../Main/Main"
import { Footer } from '../Footer/Footer'
import { Header } from "../Header/Header"
import  AudioPlayer from "../AudioPlayer"
// 3=====э
import "./Layout.css"
import { Outlet } from "react-router-dom"

// В Layout Props не используются, тк есть Outlet
// Здесь это не надо
interface ILayoutProps {
    // children специальное свойство React компонента указывается в props позволяет добавить другие элементы 
    // между открывающим и закрывающим тегом самого компонента 
    children?: ReactNode
}


export function Layout(props:ILayoutProps){
    // const styles = {
    //     backgroundColor: '',
    //     color: "",
        
    // }
    return(
        <div className="Layout">
            <Header></Header>
            {/* Лучше перенести в Main, Layout это шаблон для приложения */}
            <AudioPlayer></AudioPlayer>
            <Main><Outlet></Outlet></Main>
            <Footer></Footer>
            {/* Здесь это не надо */}
            {props.children}
        </div>

    )   
}