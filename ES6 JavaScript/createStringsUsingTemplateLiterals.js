//Create Strings using Template Literals //
//  This is a special type of string that makes creating complex strings easier.
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line
   
    return failureItems;
  }
   
  const failuresList = makeList(result.success);
   
  console.log(failuresList);
  /* OUTPUT:
  [ '<li class="text-warning">max-length</li>',
    '<li class="text-warning">no-amd</li>',
    '<li class="text-warning">prefer-arrow-functions</li>' ]
    */  