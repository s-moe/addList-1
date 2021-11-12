describe("01-addList", function () {
  it("returns 0 with no args", function () {
    expect(addList()).toBe(0);
  });
  it("adds list of numbers", function () {
    expect(addList(2, 7)).toBe(9);
    expect(addList(0, 7, -1)).toBe(6);
  });
});