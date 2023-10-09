import Characters from '../characters/Characters'
import DisplayCalc from '../display_calc/DisplayCalc'
import styles from './Calculator.module.css'

export default function Calculator() {
   return(
      <div className={ styles.calculator_container }>
         <DisplayCalc />
         <Characters />
      </div>
   )
}