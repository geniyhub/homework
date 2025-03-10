import { AppRoutes } from "../Routes/Routes"
import { LikedContextProvider } from "../context/LikedContext"



export function AppComponent(){
  


  return(
    <>
      <LikedContextProvider>
        <AppRoutes/>
      </LikedContextProvider>

    </>
  )
}