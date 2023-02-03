/**
 * Find count of repeated character in string
 *
 * @format
 * @javascript
 */

let str = "Hello World";

let repeatedCharObj = {};
for (i = 0; i < str.length; i++) {
  if (repeatedCharObj.hasOwnProperty(str[i])) {
    repeatedCharObj[str[i]] = repeatedCharObj[str[i]] + 1;
  } else {
    repeatedCharObj[str[i]] = 1;
  }
}
console.log(repeatedCharObj);
