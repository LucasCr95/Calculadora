import styles from './CharacterBtn.module.css'

export default function CharacterBtn( {value_btn, onClickButton} ) {
   
   const recoValue = () => {
     onClickButton(value_btn)
   }
   
   return(
      <button 
         key={ value_btn }
         value={ value_btn }
         className={ `${ styles.btn } ${isNaN(value_btn) ? styles.btn_operator : ''}`}
         onClick={ recoValue }
      >
         {value_btn}
      </button >
   )
}