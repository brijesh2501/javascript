/**
 * Find count of repeated character in string
 *
 * @format
 * @javascript
 */

let str = "Brijesh Rawat";

let lowerCaseStr = str.toLowerCase();

let repeatedCharObj = {};
for (i = 0; i < lowerCaseStr.length; i++) {
  if (repeatedCharObj.hasOwnProperty(lowerCaseStr[i])) {
    repeatedCharObj[lowerCaseStr[i]] = repeatedCharObj[lowerCaseStr[i]] + 1;
  } else {
    repeatedCharObj[lowerCaseStr[i]] = 1;
  }
}
console.log(repeatedCharObj);
