import { writeListOptionsInSelect } from "./utlis/writeListOptions"
import { renderListOptions } from "./utlis/renderListOptions"
import { setInputValueAndSubmit } from "./utlis/setInputValueAndSubmit"
export function setupTypeAhead(element: HTMLInputElement, optionsList: string[], optionsListContainer: HTMLElement) {
    element.addEventListener('input', filterResults)
    
    function filterResults(e: Event){
        const text = (e.target as HTMLInputElement).value.toLowerCase()
        handleInputComparison(text)
    }
    
    function handleInputComparison(text: string){
        const exactMatch = optionsList.filter(option => option === text)

        if(exactMatch && exactMatch.length === 1){
            console.log('Match found')
            setInputValueAndSubmit(exactMatch[0], element, optionsListContainer)
         } else {
            renderListOptions(writeListOptionsInSelect(text, optionsList), element, optionsListContainer)
        
        }
    }
 
}
