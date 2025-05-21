import Display from "./Display"

export default {
   title: "Display",
   component: Display
}

export const Default = () => <Display value="0" />
export const NumeroGrande = () => <Display value="123456789" />
export const Error = () => <Display value="ERROR" />