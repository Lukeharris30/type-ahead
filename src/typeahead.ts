import { filterOptions } from "./utils/filterOptions";
import { renderListOptions } from "./utils/renderListOptions";
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
