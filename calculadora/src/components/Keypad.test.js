import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Keypad from "./Keypad"

test("llama a onNumberClick cuando se presiona un número", () => {
   const onNumberClick = jest.fn()
   const { getByText } = render(
      <Keypad 
         onNumberClick={onNumberClick}
         onOperationClick={() => {}}
         onEqualClick={() => {}}
         onClearClick={() => {}}
         onToggleSign={() => {}}
      />
   )

   fireEvent.click(getByText("5"))
   expect(onNumberClick).toHaveBeenCalledWith("5")
})

test("llama a onOperationClick cuando se presiona una operación", () => {
   const onOperationClick = jest.fn()
   const { getByText } = render(
      <Keypad 
         onNumberClick={() => {}}
         onOperationClick={onOperationClick}
         onEqualClick={() => {}}
         onClearClick={() => {}}
         onToggleSign={() => {}}
      />
   )

   fireEvent.click(getByText("+"))
   expect(onOperationClick).toHaveBeenCalledWith("+")
})

test("llama a onClearClick cuando se presiona el botón C", () => {
   const onClearClick = jest.fn()
   const { getByText } = render(
      <Keypad 
         onNumberClick={() => {}}
         onOperationClick={() => {}}
         onEqualClick={() => {}}
         onClearClick={onClearClick}
         onToggleSign={() => {}}
      />
   )

   fireEvent.click(getByText("C"))
   expect(onClearClick).toHaveBeenCalled()
})