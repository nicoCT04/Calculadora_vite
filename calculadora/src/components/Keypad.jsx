import React from 'react'
import Button from './Button'
import './Keypad.css'

export default function Keypad({ onNumberClick, onOperationClick, onEqualClick, onClearClick, onToggleSign }) {
   const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."]
   const operations = ["+", "-", "*", "/", "%"]

   return (
      <div className="keypad">
         <Button onClick={onClearClick}>C</Button>
         <Button onClick={onToggleSign}>+/-</Button>
         <Button onClick={onEqualClick}>=</Button>
         {numbers.map((num) => (
            <Button key={num} onClick={() => onNumberClick(num)}>
               {num}
            </Button>
         ))}
         {operations.map((op) => (
            <Button key={op} onClick={() => onOperationClick(op)}>
               {op}
            </Button>
         ))}
         </div>
   )
}