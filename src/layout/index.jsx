import NavBar from "../components/reuseables/navBar";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
            <NavBar/>,
            <Outlet/>,
            {/*<Footer/>*/}
        </>
    )
}
export default Layout