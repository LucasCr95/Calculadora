import { useState } from 'react'
import Characters from '../characters/Characters'
import DisplayCalc from '../display_calc/DisplayCalc'
import styles from './Calculator.module.css'

export default function Calculator() {
   const [ txtDisplay, setTxtDisplay ] = useState('')
   const [ arrNum, setArrNum ] = useState([])


   function txt_num(value) {
      setTxtDisplay(txtDisplay + value)
   }

   const addNumArr = (value) => {
     if(arrNum.length < 12) {
      arrNum.push(value)
      setArrNum(arrNum)
      txt_num(value)
      console.log(arrNum)
     }
   }

   if(arrNum.includes('C')){
      setArrNum([])
      setTxtDisplay('')
   }

   return (
      <div className={ styles.calculator_container }>
         <DisplayCalc displayTxt={ txtDisplay } />
         <Characters onChange={ addNumArr }/>
      </div>
   )
}