import styles from './Characters.module.css'

import CharacterBtn from "../caracter_btn/CharacterBtn"

export default function Characters() {
   let characters = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '%', 'C']

   return(
      <div className={ styles.characters_container }>
         {characters.length && 
         characters.map((character) => (
           <CharacterBtn 
             value_btn = { character }
             key={ character }
           />
         ))
      }
      </div> 
   )
}