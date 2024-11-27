import { expect, test } from "vitest";
import { renderListOptions } from "../../utils/renderListOptions.ts";

test("renderListOptions", () => {
  const optionsListContainer = document.createElement("div");
  renderListOptions(["apple"], optionsListContainer);
  const parser = new DOMParser();
  const doc = parser.parseFromString(
    optionsListContainer.innerHTML,
    "text/html",
  );
  const fieldset = doc.querySelector("fieldset");
  expect(fieldset).not.toBeNull();

  const label = fieldset!.querySelector('label[for="apple"]');
  expect(label).not.toBeNull();

  const input = label!.querySelector(
    'input#apple[data-dynamic-typeahead][type="radio"][value="apple"]',
  );
  expect(input).not.toBeNull();

  expect(label!.textContent).toContain("apple");
});
