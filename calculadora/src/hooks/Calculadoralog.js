import { useState } from 'react'

export function useCalculator() {
   const [display, setDisplay] = useState('0')
   const [operation, setOperation] = useState(null)
   const [previousValue, setPreviousValue] = useState (null)

   const handleNumberClick = (number) => {
      if (display.length >= 9 ) return 
      if (number === "." && display.includes (".")) return 
      setDisplay((prev) => (prev === "0" && number !== "." ? number : prev + number ))
   }

   const handleOperationClick = (op) => {
      if (operation && previousValue !== null) {
         const  result = calculate(previousValue, parseFloat(display), operation)
         if (result >999999999 || result < 0 ) {
            setDisplay ("ERROR")
            setPreviousValue(null)
            setOperation(null)
         } else {
            setDisplay(result.toString())
            setPreviousValue(result)
         }
      } else{
         if (op === "-" && previousValue === null && display === "0"){
            setDisplay("-")
            return
         }
         setPreviousValue(parseFloat (display))
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
         case "%":
            return b !== 0 ? a % b : "ERROR"
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

   const handleToggleSign = () => {
      if (display === "0" || display === "ERROR") return 
      const newValue = parseFloat(display) * -1 
      setDisplay(newValue.toString()) 
   }

   return { display, handleNumberClick, handleOperationClick, handleEqualClick, handleToggleSign }
}
