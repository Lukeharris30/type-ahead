import { clearListOptions } from "./clearListOptions"
export function setInputValueAndSubmit(inputValue: string, element: HTMLInputElement, optionsListContainer: HTMLElement, ){
    if( inputValue === ''){
        return
    }
    console.log('emiting change')
    element.setAttribute('value', inputValue)
    element.value = inputValue
    const event = new Event('change')
    element.dispatchEvent(event)
    clearListOptions(optionsListContainer)
}