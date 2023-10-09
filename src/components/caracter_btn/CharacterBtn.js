import styles from './CharacterBtn.module.css'

export default function CharacterBtn( {value_btn} ) {

   return(
      <button 
         key={ value_btn }
         value_btn={ value_btn }
         className={ `${ styles.btn } ${isNaN(value_btn) ? styles.btn_operator : ''}`}
      >
         {value_btn}
      </button >
   )
}