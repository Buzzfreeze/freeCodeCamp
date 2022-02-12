---
id: 5900f3a31000cf542c50feb6
title: 'Problem 55: Lychrel numbers'
challengeType: 5
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

ถ้ามี 47 กับเลขที่กลับกัน คือ 74 แล้วนำมาบวกกัน 47 + 74 = 121 จะเป็น palindrome

ทุกจำนวนไม่ได้เป็น palindrome ได้ง่ายๆ เช่น

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

349 ต้องดำเนินการแบบนี้ 3 ครั้งถึงจะกลายเป็น palindrome

แม้จะยังไม่มีใครพิสูจน์ได้ แต่ก็คิดว่าตัวเลขบางตัว เช่น 196 จะไม่มีทางเป็น palindrome ถึงแม่ว่าเราจะเอาเลขมากลับด้านและบวกกัน โดยวิธีนี้เรียกว่า Lychrel number 

เรากำหนดให้ Lychrel number มีเงื่อนไขเพิ่มเติมคือเป็น palindrome โดยดำเนินการน้อยกว่า 50 ครั้ง 

มีเลขที่เป็น palindrome และเป็น Lychrel number ด้วย เช่น 4994

Lychrel number กี่ตัวที่มีค่าน้อยกว่า `num`


# --hints--

`countLychrelNumbers(1000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` ต้องคืนค่าเป็น 13

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` ต้องคืนค่าเป็น 39

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` ต้องคืนค่าเป็น 76

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` ต้องคืนค่าเป็น 140

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` ต้องคืนค่าเป็น 249

```js
assert.strictEqual(countLychrelNumbers(10000), 249);
```

# --seed--

## --seed-contents--

```js
function countLychrelNumbers(num) {

  return true;
}

countLychrelNumbers(10000);
```

# --solutions--

```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```
