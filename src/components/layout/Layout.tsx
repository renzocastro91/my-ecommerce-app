import { Outlet } from "react-router-dom"
import Nav from "../nav/nav"

function Layout(){
    return(
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}

export default Layout 