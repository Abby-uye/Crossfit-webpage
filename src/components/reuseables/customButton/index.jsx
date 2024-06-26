import style from "./index.module.css"
const CustomButton = ({text,color,width})=>{
    return(
    <div>
       <button style={{backgroundColor:color,width:width,}} className={style.customButton} >
           {text}
       </button>
    </div>
    )
}
export default CustomButton