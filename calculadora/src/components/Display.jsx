import React from 'react'
import './Display.css'

export default function Display({ value }) {
   return (
      <div className="display" data-testid="display">
         {value}
      </div>
   )
}