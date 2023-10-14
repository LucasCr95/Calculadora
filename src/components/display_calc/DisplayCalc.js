import styles from './DisplayCalc.module.css'

export default function DisplayCalc({ displayTxt }) {
   
   return(
      <div className={ styles.display_calc }>
         <p>{ displayTxt }</p>
      </div>
   )
}