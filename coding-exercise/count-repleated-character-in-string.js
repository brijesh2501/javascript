/**
 * Find count of repeated character in string
 *
 * @format
 * @javascript
 */

let str = "Hello World";
let lowerCaseStr = str.toLowerCase();
let charArr = lowerCaseStr.split("");
let charCountObj = {};
charArr.map((c) => {
  if (charCountObj.hasOwnProperty(c)) {
    charCountObj[c] = charCountObj[c] + 1;
  } else {
    charCountObj[c] = 1;
  }
});
console.log(charCountObj);
