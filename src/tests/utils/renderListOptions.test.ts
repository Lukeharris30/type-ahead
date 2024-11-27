import { expect, test } from "vitest";
import { renderListOptions } from "../../utils/renderListOptions.ts";

test("renderListOptions", () => {
  const optionsListContainer = document.createElement("div");
  renderListOptions(["apple"], optionsListContainer);
  expect(optionsListContainer.innerHTML).toEqual(/*html*/ `
        <fieldset>
            <div>
                <label for="apple"><input name="apple" id="apple" data-dynamic-typeahead type="radio" value="apple"/>apple</label>
            </div>
        </fieldset>`);
});
