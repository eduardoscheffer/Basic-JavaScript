// Conditional (ternary) Operator:
// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

function findGrater (a, b) {
    if (a > b) {
        return "a is greater"
    }
    else {
        return "b is greater"
    }
};

// the same function can be re-written using the conditional operator:
function findGreater (a, b) {
    return a > b ? "a is greater": "b is greater";
};
// The following function uses if, else if, and else statements to check multiple conditions:
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  };
}
  // the same function above can be rewritten using multiple conditional operators:
  function findGreaterOrEqual (a, b) {
      return (a === b) ? "a and b are equal"
      : (a > b) ? "a is greater"
      : "b is greater";
};