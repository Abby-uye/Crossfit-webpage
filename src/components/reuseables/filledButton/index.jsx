import style from "./index.module.css"
const FilledButton = ({color,textColor,text,width})=>{
    return(
    <div>
        <button style={{backgroundColor:color,color:textColor,width:width}} className={style.filledButton}>
            <p>{text}</p>
        </button>
    </div>
    )
}
export default FilledButton