/**
 * Find count of repeated character in string
 *
 * @format
 * @javascript
 */

let name = "Brijesh Rawat";
let lowerCase = name.toLowerCase();
console.log(lowerCase);
let charArr = lowerCase.split("");

console.log(charArr);

let newObj = {};
charArr.map((c) => {
  let count = 1;
  if (newObj[c]) {
    newObj[c] = count + 1;
  } else {
    newObj[c] = 1;
  }
});

console.log(newObj);
