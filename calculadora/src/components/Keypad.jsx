import React from 'react'
import Button from './Button'
import './Keypad.css'

export default function Keypad({ onNumberClick, onOperationClick, onEqualClick, onClearClick, onToggleSign }) {
   const layout = [
      ["C", "+/-", "="],
      ["7", "8", "9", "/"],
      ["4", "5", "6", "x"],
      ["1", "2", "3", "-"],
      [".", "0", "%", "+"]
      
   ]

   const handleClick = (value) => {
      if (value === "C") return onClearClick()
      if (value === "+/-") return onToggleSign()
      if (value === "=") return onEqualClick()
      if (["+", "-", "x", "/", "%"].includes(value)) return onOperationClick(value)
      return onNumberClick(value)
   }

   return (
      <div className="keypad">
         {layout.map((row, i) => (
            <div key={i} className="keypad-row">
               {row.map((btn) => (
                  <Button key = {btn} onClick={() => handleClick(btn)}>{btn}
                  </Button>
               ))}
            </div>
         ))}
      </div>
   )
}