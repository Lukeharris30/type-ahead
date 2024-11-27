export function filterOptions(text: string, optionsList: string[]): string[] {
  return text === ""
    ? []
    : optionsList.filter((option) => option.includes(text));
}
