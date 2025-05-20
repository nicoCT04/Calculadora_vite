import { useState } from 'react'

export function useCalculator() {
   const [display, setDisplay] = useState('0')
   const [operation, setOperation] = useState(null)
   const [previousValue, setPreviousValue] = useState (null)

   const handleNumberClick = (number) => {
      if (display.length >= 9 ) return 
      setDisplay((prev) => (prev === "0" ? number : prev + number ))
   }

   const handleOperationClick = (op) => {
      if (operation && previousValue !== null) {
         const  result = calculate(previousValue, parseFloat(display), operation)
         if (result >999999999 || result < 0 ) {
            setDisplay ("ERROR")
         } else {
            setDisplay(result.toString())
            setPreviousValue(result)
         }
      } else{
         setPreviousValue(parseFloat(display))
      }
      setOperation(op)
      setDisplay("0")
   }

   const calculate = (a, b, op) => {
      switch (op) {
         case "+":
            return a + b
         case "-":
            return a - b
         case "*" :
            return a * b
         case "/":
            return b !== 0 ? a / b: "ERROR"
         default: 
            return b        
      }
   }

   const handleEqualClick = () => {
      if (operation && previousValue != null) {
         const result = calculate(previousValue, parseFloat(display), operation)
         if (result > 999999999 || result < 0){
            setDisplay("ERROR")
         } else {
            setDisplay(result.toString())
         }
      }
      setOperation(null)
      setPreviousValue(null)
   }

   return { display, handleNumberClick, handleOperationClick, handleEqualClick }
}
