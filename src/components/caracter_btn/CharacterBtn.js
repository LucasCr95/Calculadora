import styles from './CharacterBtn.module.css'

export default function CharacterBtn( {value_btn} ) {
   return(
      <btn 
         value_btn={ {value_btn}}
         className={ styles.btn }
      >
         {value_btn}
      </btn>
   )
}