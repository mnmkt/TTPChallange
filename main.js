// Name: Minami Kato
// Phone: 310-902-2518
// email: minamikato@gmail.com

// Q1.
function sumOfTwo(a, b, v) {
  let arr = [];

  for(let x = 0; x < a.length; x++) {
     let i = v - a[x];
     arr[i] = a[x];
  }

  for(let y = 0; y < b.length; y++) {
     if(arr[b[y]] != null) {
        return true;
     }
  }

  return false;
}



// Q2.
function stringReformatting(s, k) {
  let newStr = '';
  let i = s.length;
  let counter = 1;

  while (--i > -1) {
      let str = s[i];
      if (str !== '-') {
          newStr = str + newStr;
          if (counter % k === 0 && i != 0) {
              newStr = '-' + newStr;
          }
          counter++;
      }
  }
  return newStr;
}




// Q3.
function getClosingParen(sentence, openingParenIndex) {
  let openP = 0;

  for (let p = openingParenIndex + 1; p < sentence.length; p++) {
      let str = sentence[p];

      if (str === '(') {
          openP += 1;
      } else if (str === ')') {
          if (openP === 0) {
              return p;
          } else {
              openP -= 1;
          }
      }
  }

  return 'Error';
}
