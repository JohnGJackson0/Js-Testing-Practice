const { sum, subtract } = require("./math");

//testing framework
/*
test makes this a framework and the benefits are: 
1. stack trace will print out which assertion
logic has failed 
2. all tests will be ran regaurdless of if one 
failed
*/

test("sum adds numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});
test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});


