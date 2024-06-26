import reStatic from "../../../assets/rs-static-layers.png"
import style from "./index.module.css"
import CustomButton from "../../../components/reuseables/customButton";
import h1 from "../../../assets/h1-img-1.jpg.png"
import h2 from "../../../assets/h1-img-2.jpg.png"
import {logos} from "./logos";
const CrossfitHero = ()=>{
    return(
        <div className={style.hero}>
            <div className={style.heroImage}>
            <img src={reStatic} alt={""} style={{width:"90%",paddingLeft:"50px"}}/>
            </div>
            <div className={style.heroText1}>
                <div style={{position:"relative"}}>
                        <p style={{position:"relative",color:"white", fontFamily: "Lucida Handwriting",opacity:"0.3", fontSize:"30px"}}>Strong</p>
                        <p style={{position:"absolute" ,color:"white", zIndex:"1"}}>+Be You, Just Stronger
                            <span style={{display:"block"}}>Power In You</span>
                        </p>
                        <p style={{color:"white"}}>Unum solum justo ex lux pro cu probo lamborasmos
                        <span style={{display:"block",color:"white"}}>eius insolens eupidis te eos ut agam tota</span>
                        </p>
                        <CustomButton color={"black"} width={"10%"} text={"View More"}/>
                    </div>

                <img src={h1} alt={""} />
            </div>

            <div className={style.heroText2}>
                <img src={h2} alt={""}/>
                <div style={{position:"relative", paddingLeft:"700px",top:"15px"}}>
                    <p style={{position:"relative", color:"white"}}>Start</p>
                    <p style={{position:"absolute",color:"white"}}>+ Today Is The Best
                        <span style={{display:"block"}}>Day To Start!</span></p>
                    <p style={{color:"white"}}>Sed abhoreant constituam consetetuer eu, At mei
                    <span style={{display:"block"}}>Clita deseruthis movet molestie nemor</span></p>
                    <CustomButton color={" #020e02"} text={"View More"} width={"10%"}/>
                </div>
            </div>
            <div className={style.logos}>
                {
                    logos.map((logo)=>{
                        return(
                            <div>
                                <img src={logo.image} alt={""} style={{width:"45%",}}/>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
export default CrossfitHero