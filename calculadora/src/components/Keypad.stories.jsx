import Keypad from "./Keypad"

export default {
   title: "Keypad",
   component: Keypad
}

export const Default = () => (
   <Keypad
      onNumberClick={() => {}}
      onOperationClick={() => {}}
      onEqualClick={() => {}}
      onClearClick={() => {}}
      onToggleSign={() => {}}
   />
)