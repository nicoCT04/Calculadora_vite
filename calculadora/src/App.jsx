import React from 'react'
import Display from './components/Display'
import Keypad from './components/Keypad'
import { useCalculator } from './hooks/Calculadoralog'

export default function App() {
  const { display, handleNumberClick, 
    handleOperationClick, 
    handleEqualClick, 
    handleToggleSign, 
    handleClearClick } 
  = useCalculator()

  return (
    <div className="calculator-container">
      <h1>Calculadora</h1>
      <Display value={display} />
      <Keypad 
        onNumberClick={handleNumberClick}
        onOperationClick={handleOperationClick}
        onEqualClick={handleEqualClick}
        onClearClick={handleClearClick}
        onToggleSign={handleToggleSign}
        />
    </div>
  )
}