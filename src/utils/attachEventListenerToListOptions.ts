import { setInputValueAndSubmit } from "./setInputValueAndSubmit";

export function attachEventListenerToListOptions(
  listOptions: HTMLInputElement[],
  element: HTMLInputElement,
  optionsListContainer: HTMLElement,
) {
  listOptions.forEach((option) => {
    option.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      setInputValueAndSubmit(target.value, element, optionsListContainer);
    });
  });
}
