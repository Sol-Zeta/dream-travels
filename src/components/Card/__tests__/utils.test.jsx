import { tripDescription } from "../utils";

describe("tripDescription function", () => {
  const shortDescrition =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  const longDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptatum quam incidunt est magnam eveniet eligendi? A placeat ex quis, eos reprehenderit, architecto assumenda nulla, eligendi vero animi accusamus?";
  const trimmedDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptatum quam incidunt est magnam eveniet eligendi? A placeat ex quis,...";
  it("returns the same description if it is within the maxLength", () => {
    expect(tripDescription(shortDescrition)).toBe(shortDescrition);
  });

  it('trims the description to maxLength and adds " ..."', () => {
    expect(tripDescription(longDescription)).toBe(trimmedDescription);
  });

  it("returns an empty string if description is empty", () => {
    const emptyDescription = "";
    expect(tripDescription(emptyDescription)).toBe("");
  });

  it("returns an empty string if description is undefined or null", () => {
    expect(tripDescription(undefined)).toBe("");
    expect(tripDescription(null)).toBe("");
  });
});
