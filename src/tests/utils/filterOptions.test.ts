import { expect, test } from "vitest";
import { filterOptions } from "../../utils/filterOptions.ts";

test("filterOptions", () => {
  expect(filterOptions("a", ["apple", "banana", "orange"])).toEqual([
    "apple",
    "banana",
    "orange",
  ]);
  expect(filterOptions("ap", ["apple", "banana", "orange"])).toEqual(["apple"]);
});
