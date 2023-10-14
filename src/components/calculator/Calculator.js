import { useState } from 'react'
import Characters from '../characters/Characters'
import DisplayCalc from '../display_calc/DisplayCalc'
import styles from './Calculator.module.css'

export default function Calculator() {
   const [ txtDisplay, setTxtDisplay ] = useState('')

   function txt_num(value) {
      setTxtDisplay(txtDisplay + value)
   };

   return (
      <div className={ styles.calculator_container }>
         <DisplayCalc displayTxt={ txtDisplay } />
         <Characters onChange={ txt_num }/>
      </div>
   )
}