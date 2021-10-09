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

global.test = test;
global.expect = expect;
