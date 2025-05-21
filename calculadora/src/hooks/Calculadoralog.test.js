import { renderHook, act } from "@testing-library/react"
import { useCalculator } from "./Calculadoralog"

describe("useCalculator", () => {
   test("handleNumberClick actualiza el display correctamente", () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
         result.current.handleNumberClick("5")
      })

      expect(result.current.display).toBe("5")
   })


   test("handleClearClick reinicia el estado", () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
         result.current.handleNumberClick("5")
         result.current.handleOperationClick("+")
         result.current.handleNumberClick("3")
         result.current.handleEqualClick()
         result.current.handleClearClick()
      })

      expect(result.current.display).toBe("0")
   })
})