import FilledButton from "../filledButton"
import korps from "../../../assets/header-logo-kropp.png..png"
import predefined from "../../../assets/predefined-opener.png"
import style from "./index.module.css"
const NavBar = ()=>{
    return (
        <div className={style.navBar}>
            <img src={korps} alt={""}/>
            <div className={style.linkContents}>
                <p>Home</p>
                <p>Pages</p>
                <p>Portfolio</p>
                <p>Blog</p>
                <p>Shop</p>
            </div>
            <div className={style.navButton}>
            <FilledButton text={"Book Now"} color={"white"} textColor={"black"} width={"100px"}></FilledButton>
                <img src={predefined} alt={""}/>
            </div>
        </div>
    )
}
export  default  NavBar