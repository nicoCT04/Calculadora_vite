import { renderHook, act } from '@testing-library/react'
import { useCalculator } from './Calculadoralog'

describe('useCalculator', () => {
   test('handleNumberClick actualiza el display correctamente', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
         result.current.handleNumberClick('5')
      })

      expect(result.current.display).toBe('5')
   })

   test('handleOperationClick y handleEqualClick manejan resultados negativos correctamente', () => {
      const { result } = renderHook(() => useCalculator())
   
      act(() => {
         result.current.handleNumberClick('6') // Ingresar 6
         result.current.handleOperationClick('+') // Presionar +
         result.current.handleNumberClick('3') // Ingresar 3
         result.current.handleEqualClick() // Presionar =
      })
   
      expect(result.current.display).toBe('9') // Verificar que el resultado sea 9
   
      act(() => {
         result.current.handleClearClick() // Reiniciar
         result.current.handleNumberClick('5') // Ingresar 5
         result.current.handleOperationClick('-') // Presionar -
         result.current.handleNumberClick('8') // Ingresar 8
         result.current.handleEqualClick() // Presionar =
      })
   
      expect(result.current.display).toBe('ERROR') // Verificar que el resultado sea ERROR
   })

   test('handleEqualClick muestra ERROR si el resultado es negativo', () => {
      const { result } = renderHook(() => useCalculator())
   
      act(() => {
         result.current.handleNumberClick('5') // Ingresar 5
         result.current.handleOperationClick('-') // Presionar -
         result.current.handleNumberClick('8') // Ingresar 8
         result.current.handleEqualClick() // Presionar =
      })
   
      expect(result.current.display).toBe('ERROR') // Verificar que el resultado sea ERROR
   })

   test('handleClearClick reinicia el estado', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
         result.current.handleNumberClick('5')
         result.current.handleOperationClick('+')
         result.current.handleNumberClick('3')
         result.current.handleEqualClick()
         result.current.handleClearClick()
      })

      expect(result.current.display).toBe('0')
   })
})