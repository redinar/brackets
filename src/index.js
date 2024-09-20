module.exports = function check(str, bracketsConfig) {
  let stack =[];
  let lastAdded;
  let prevAdded;
  openingBrackets = {
      ['(']: ')',
      ['[']: ']',
      ['{']: '}',
      ['|']: '|'
  }
  closingBrackets = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|'
  }
  for (let i=0; i<str.length; i++){
    stack.push(str[i]);
    lastAdded = stack[stack.length-1];
    prevAdded = stack[stack.length-2];
    if ((prevAdded === closingBrackets[lastAdded]) && (lastAdded === openingBrackets[prevAdded])) {
      stack.pop();
      stack.pop();
    }
  }

  if(stack.length === 0) return true
  else return false
}
