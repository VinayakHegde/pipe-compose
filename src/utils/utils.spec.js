import * as utils from "./utils";

it("should return the Initials", () => {
  expect(utils.getInitials("John Smith")).toBe("JS");
});

it("should return string in uppercase", () => {
  expect(utils.uppercase("John Smith")).toBe("JOHN SMITH");
});

it("should return reverded string ", () => {
  expect(utils.reverse("something")).toBe("gnihtemos");
});

it.each([
  ["John Smith", utils.pipe()],
  ["john smith john smith", utils.pipe((string) => `${string} ${string}`.toLowerCase())],
  ["JOHN SMITH", utils.pipe(utils.uppercase)],
  ["JS", utils.pipe(utils.getInitials)],
  ["JS", utils.pipe(utils.getInitials, utils.uppercase)],
  ["SJ", utils.pipe(utils.getInitials, utils.uppercase, utils.reverse)]
])("should return %s - pipe ", (expected, fn) => {
  expect(fn("John Smith")).toBe(expected);
});
