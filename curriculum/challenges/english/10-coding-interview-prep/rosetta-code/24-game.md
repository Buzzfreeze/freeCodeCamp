---
id: 5951e88f64ebf159166a1176
title: 24 game
challengeType: 5
forumTopicId: 302218
dashedName: 24-game
---

# --description--

คุณคงรู้จัก [เกม 24](https://en.wikipedia.org/wiki/24_Game) แล้วใช่มั้ย?

เกมนี้จะให้คุณทำการ บวก ลบ คูณ หาร เลขที่มีให้ทั้ง 4 ตัว เพื่อทำให้ได้ผลลัพธ์เป็น 24

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าเป็นสตริงที่มีตัวเลขสี่หลัก โดยแต่ละหลักมีค่าได้ตั้งแต่ 1 ถึง 9  และเลขซ้ำได้ 

ให้ฟังก์ชันนี้คืนค่าเป็นวิธีการคำนวณที่จะทำให้ได้ค่าเป็น 24 ถ้าไม่มีทางได้ 24 ให้คืนค่าเป็นสตริง "no solution exists"

**กฏ:**
<ul>
  <li> ใช้ได้แค่ บวก ลบ คูณ หาร เท่านั้น </li>
  <li> การหารต้องใช้เลขแบบ floating point ด้วย เพื่อทำให้เศษไม่หายไป </li>
  <li> ห้ามใช้เลขเพื่อสร้างเป็นเลขใหม่ (เช่น ถ้าเราให้เลขไปเป็น  1, 2, 2, 1 แล้วคุณคืนค่าผลลัพธ์มาเป็น 12+12 จะถือว่าผิด)</li>
  <li> เรียงลำดับเลขได้ตามสบายเลย ไม่ต้องอิงตามลำดับที่ส่งเข้าไปในฟังก์ชันก็ได้ </li>
</ul>

| ตัวอย่าง input                  | ตัวอย่าง output             |
| ----------------------------- | ------------------------- |
| <code>solve24("4878");</code> | <code>(7-8/8)\*4</code>   |
| <code>solve24("1234");</code> | <code>3\*1\*4\*2</code>   |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |

# --hints--

`solve24` ต้องเป็นฟังก์ชัน

```js
assert(typeof solve24 === 'function');
```

`solve24("4878")` ต้องคืนค่าเป็น `(7-8/8)*4` หรือ `4*(7-8/8)`

```js
assert(include(answers[0], removeParentheses(solve24(testCases[0]))));
```

`solve24("1234")` ต้องคืนค่าเป็น `1*2*3*4`

```js
assert(include(answers[1], removeParentheses(solve24(testCases[1]))));
```

`solve24("6789")` ต้องคืนค่าเป็น `(6*8)/(9-7)` หรือ `(8*6)/(9-7)`

```js
assert(include(answers[2], removeParentheses(solve24(testCases[2]))));
```

`solve24("1127")` ต้องคืนค่าเป็น `(1+7)*(1+2)`

```js
assert(include(answers[3], removeParentheses(solve24(testCases[3]))));
```

# --seed--

## --after-user-code--

```js
const testCases = [
  '4878',
  '1234',
  '6789',
  '1127'
];

const answers = [
  ['(7-8/8)*4', '4*(7-8/8)', '(4-8+7)*8', '(4+7-8)*8', '(7+4-8)*8', '(7-8+4)*8', '8*(4-8+7)', '8*(4+7-8)', '8*(7+4-8)', '8*(7-8+4)'],
  ['1*2*3*4', '1*2*4*3', '1*3*2*4', '1*3*4*2', '1*4*2*3', '1*4*3*2', '2*1*3*4', '2*1*4*3', '2*3*1*4', '2*3*4*1', '2*4*3*1', '2*4*1*3', '3*1*2*4', '3*1*4*2', '3*2*1*4', '3*2*4*1', '3*4*1*2', '3*4*2*1', '4*1*2*3', '4*1*3*2', '4*2*1*3', '4*2*3*1', '4*3*1*2', '4*3*2*1', '(1+2+3)*4', '(1+3+2)*4', '(2+1+3)*4', '(2+3+1)*4', '(3+1+2)*4', '(3+2+1)*4', '4*(1+2+3)', '4*(2+1+3)', '4*(2+3+1)', '4*(3+1+2)', '4*(3+2+1)'],
  ['(6*8)/(9-7)', '(8*6)/(9-7)', '6*8/(9-7)', '8*6/(9-7)'],
  ['(1+7)*(2+1)', '(1+7)*(1+2)', '(1+2)*(1+7)', '(1+2)*(7+1)', '(2+1)*(1+7)', '(7+1)*(2+1)']
];

function include(ansArr, res) {
  const index = ansArr.indexOf(res);
  return index >= 0;
}

//The main method for detecting single parentheses
function removeParentheses(ans) {
  for (let i = 0; i < ans.length; i++) {
    if (!isNaN(ans[i])) {
      ans = removeParenthesesHelper(ans, i);
    }
  }
  return ans;
}

//Helper to remove left and right parantheses
function removeParenthesesHelper(ans, i) {
  while (i > 0 && i < ans.length - 1) {
    if (ans[i - 1] === '(' && ans[i + 1] === ')') {
      //Paranthesis detected. Remove them.
      ans = replaceChar(ans, '', i - 1);
      ans = replaceChar(ans, '', i);
      i--;
    } else {
      return ans;
    }
  }
  return ans;
}

//Replace a character at a given index for the provided character
function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);
  let newString = firstPart + replaceChar + lastPart;
  return newString;
}
```

## --seed-contents--

```js
function solve24 (numStr) {

  return true;
}
```

# --solutions--

```js
function solve24(numStr) {
  const digitsArr = numStr.split('');
  const answers = [];

  const digitPermutations = [];
  const operatorPermutations = [];

  function generateDigitPermutations (digits, permutations = []) {
    if (digits.length === 0) {
      digitPermutations.push(permutations);
    }
    else {
      for (let i = 0; i < digits.length; i++) {
        const curr = digits.slice();
        const next = curr.splice(i, 1);
        generateDigitPermutations(curr.slice(), permutations.concat(next));
      }
    }
  }

  function generateOperatorPermutations (permutations = []) {
    const operators = ['+', '-', '*', '/'];
    if (permutations.length === 3) {
      operatorPermutations.push(permutations);
    }
    else {
      for (let i = 0; i < operators.length; i++) {
        const curr = permutations.slice();
        curr.push(operators[i]);
        generateOperatorPermutations(curr);
      }
    }
  }

  generateDigitPermutations(digitsArr);
  generateOperatorPermutations();

  interleave();

  return answers[0];

  function interleave () {
    for (let i = 0; i < digitPermutations.length; i++) {
      for (let j = 0; j < operatorPermutations.length; j++) {
        const d = digitPermutations[i];
        const o = operatorPermutations[j];
        const perm = [
          `${d[0]}${o[0]}${d[1]}${o[1]}${d[2]}${o[2]}${d[3]}`,
          `(${d[0]}${o[0]}${d[1]})${o[1]}${d[2]}${o[2]}${d[3]}`,
          `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
          `${d[0]}${o[0]}${d[1]}${o[1]}(${d[2]}${o[2]}${d[3]})`,
          `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]}${o[2]}${d[3]})`,
          `(${d[0]}${o[0]}${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
          `(${d[0]}${o[0]}${d[1]})${o[1]}(${d[2]}${o[2]}${d[3]})`
        ];

        perm.forEach(combination => {
          const res = eval(combination);

          if (res === 24) {
            return answers.push(combination);
          }
        });
      }
    }
  }
}
```
