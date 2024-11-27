import { clearListOptions } from "./clearListOptions";

export function renderListOptions(
  list: string[],
  optionsListContainer: HTMLElement,
): void {
  clearListOptions(optionsListContainer);
  if (list.length === 0) {
    return;
  }
  const inputGroup = optionsListContainer.appendChild(
    document.createElement("fieldset"),
  );
  inputGroup.innerHTML = list
    .map(
      (option) => /*html*/ `
        <label for="${option}">
            <input name="${option}" id="${option}" data-dynamic-typeahead type="radio" value="${option}">
            ${option}
            </label>`,
    )
    .join("");
}
