import { useState } from "react"

export function useCalculator() {
   const [display, setDisplay] = useState("0")
   const [operation, setOperation] = useState(null)
   const [previousValue, setPreviousValue] = useState(null)

   const handleNumberClick = (number) => {
      if (display.length >= 9) return
      if (operation){
         const parts = display.split(operation)
         const right = parts[1] || ""
         if (number === "." && right.includes("."))return
         setDisplay(prev => prev + number)
      } else{
         if(number === "." && display.includes(".")) return
         setDisplay((prev) => (prev === "0" && number !== "." ? number : prev + number))
      }
   }

   const handleOperationClick = (op) => {
      if (display === "ERROR") return

      if (operation && previousValue !== null) {
         const parts = display.split(operation)
         const currentValue = parseFloat(parts[parts.length - 1])
         const result = calculate(previousValue, currentValue, operation)
         
         if (result > 999999999) {
            setDisplay("ERROR")
            setPreviousValue(null)
            setOperation(null)
            return
         }
         
         setPreviousValue(result)
         setDisplay(`${result}${op}`)
      } else {
         if (op === "-" && display === "0") {
            setDisplay("-")
            return
         }
         setPreviousValue(parseFloat(display))
         setDisplay(`${display}${op}`)
      }
      
      setOperation(op)
   }

   const calculate = (a, b, op) => {
      switch (op) {
         case "+":
            return a + b
         case "-":
            return a - b
         case "x":
            return a * b
         case "/":
            return b !== 0 ? a / b : "ERROR"
         case "%":
            return b !== 0 ? a % b : "ERROR"
         default:
            return b
      }
   }

   const handleEqualClick = () => {
      if (operation && previousValue != null) {
         const parts = display.split(operation)
         const currentValue = parseFloat(parts[parts.length - 1])
         const result = calculate(previousValue, currentValue, operation)
         
         if (result > 999999999 || result < 0) {
            setDisplay("ERROR")
         } else {
            setDisplay(result.toString())
         }
      } else if (!operation && display !== "ERROR") {
         const finalValue = parseFloat(display)
         if (finalValue < 0) {
            setDisplay("ERROR")
         } else {
            setDisplay(finalValue.toString())
         }
      }
      setOperation(null)
      setPreviousValue(null)
   }

   const handleToggleSign = () => {
      if (display === "0" || display === "ERROR") return
      const newValue = (parseFloat(display) * -1).toString()
      setDisplay(newValue)
   }

   const handleClearClick = () => {
      setDisplay("0")
      setPreviousValue(null)
      setOperation(null)
   }

   return {
      display,
      handleNumberClick,
      handleOperationClick,
      handleEqualClick,
      handleToggleSign,
      handleClearClick
   }
}