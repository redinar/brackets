module.exports = function check(str, bracketsConfig) {
  let stack =[];
  openingBrackets = ['(', '[', '{', '|'];
  closingBrackets = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|'
  }
  for (let i=0; i<str.length; i++){
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (stack.length === 0) return false;
    
    if (stack[stack.length-1] === closingBrackets[str[i]]) {
      stack.pop();
    }
  }

  if (stack.length === 0) return true
  else return false;
}
