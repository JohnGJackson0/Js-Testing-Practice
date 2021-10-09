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

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`X ${title}`);
    console.log(title);
    console.log(error);
  }
}

//basic assertion library
async function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreatedThan(expected) {},
  };
}
