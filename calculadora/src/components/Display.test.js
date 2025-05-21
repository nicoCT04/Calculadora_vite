import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Display from './Display'

test('muestra el valor correctamente', () => {
   render(<Display value="12345" />)
   const displayElement = screen.getByTestId('display')
   expect(displayElement).toHaveTextContent('12345')
})