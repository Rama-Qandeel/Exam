/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log("PART 4");

const isABalancedString = (str) => {
  str = str.split("");
  let sqare = 0;
  let parenth = 0;
  let kerly = 0;
  str.forEach((ele) => {
    if (ele === "(" || ele === ")") {
      sqare++;
    }
    if (ele === "[" || ele === "]") {
      parenth++;
    }
    if (ele === "{" || ele === "}") {
      kerly++;
    }
  });

  return sqare % 2 === 0 && parenth % 2 === 0 && kerly % 2 === 0 ? "yes" : "no";
};
/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
