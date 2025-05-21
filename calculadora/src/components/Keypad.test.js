import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Keypad from './Keypad'

test('llama a onNumberClick cuando se presiona un número', () => {
   const onNumberClick = jest.fn()
   render(<Keypad onNumberClick={onNumberClick} onOperationClick={() => {}} onEqualClick={() => {}} onClearClick={() => {}} onToggleSign={() => {}} />)

   const button = screen.getByText('5')
   userEvent.click(button)

   expect(onNumberClick).toHaveBeenCalledWith('5')
})

test('llama a onOperationClick cuando se presiona una operación', () => {
   const onOperationClick = jest.fn()
   render(<Keypad onNumberClick={() => {}} onOperationClick={onOperationClick} onEqualClick={() => {}} onClearClick={() => {}} onToggleSign={() => {}} />)

   const button = screen.getByText('+')
   userEvent.click(button)

   expect(onOperationClick).toHaveBeenCalledWith('+')
})

test('llama a onClearClick cuando se presiona el botón C', () => {
   const onClearClick = jest.fn()
   render(<Keypad onNumberClick={() => {}} onOperationClick={() => {}} onEqualClick={() => {}} onClearClick={onClearClick} onToggleSign={() => {}} />)

   const button = screen.getByText('C')
   userEvent.click(button)

   expect(onClearClick).toHaveBeenCalled()
})