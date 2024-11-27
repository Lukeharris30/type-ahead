import { filterOptions } from "./utils/filterOptions";
import { renderListOptions } from "./utils/renderListOptions";
import { setInputValueAndSubmit } from "./utils/setInputValueAndSubmit";
import { attachEventListenerToListOptions } from "./utils/attachEventListenerToListOptions";

export function setupTypeAhead(
  element: HTMLInputElement,
  optionsList: string[],
  optionsListContainer: HTMLElement,
) {
  element.addEventListener("input", filterResults);

  function filterResults(e: Event) {
    const text = (e.target as HTMLInputElement).value.toLowerCase();
    handleInputComparison(text);
  }

  function handleInputComparison(text: string) {
    const exactMatch = optionsList.filter((option) => option === text);

    if (exactMatch && exactMatch.length === 1) {
      console.log("Match found");
      setInputValueAndSubmit(exactMatch[0], element, optionsListContainer);
    } else {
      renderListOptions(filterOptions(text, optionsList), optionsListContainer);
      attachEventListenerToListOptions(
        Array.from(
          optionsListContainer.querySelectorAll("[data-dynamic-typeahead]"),
        ),
        element,
        optionsListContainer,
      );
    }
  }
}
