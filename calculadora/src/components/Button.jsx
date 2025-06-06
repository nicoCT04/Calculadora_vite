import React from 'react'
import './Button.css'

export default function Button({ onClick, children }) {
   return (
      <button className="button" onClick={onClick} type="button">
         {children}
      </button>
   )
}