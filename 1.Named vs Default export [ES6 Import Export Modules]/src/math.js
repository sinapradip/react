const pi = 3.1415;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // Default export
export { doublePi, triplePi }; // Named export

// Default export can be only 1 per file

// To make exports more than one we can use named export
// And named export functions should be named exactly the same while importing in ohter file unlike default export
