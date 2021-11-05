---
id: 5900f3a31000cf542c50feb6
title: 'Problem 55: Lychrel numbers'
challengeType: 5
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

ถ้ามี 47 และตัวที่กลับกัน นำมาบวกกัน 47 + 74 = 121 จะเป็น palindromic

ทุกจำนวนไม่ได้เป็นแบบ palindromes

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

349 มี 3 iterations สำหรับ palindrome

แม้จะยังไม่มีใครพิสูจน์ได้ แต่ก็คิดว่าตัวเลขบางตัว เช่น 196 ไม่ใช่ palindrome แม้ว่าจะกลับกัน จึงเพิ่มกระบวนการเรียกว่า Lychrel number แม้ว่า theoretical nature ของจำนวน ของจุดประสงค์ของปัญหานี้ เรียกจำนวนนี้ว่า Lychrel  นอกจากนี้จะได้ทราบว่าสำหรับทุกเลขที่ต่ำกว่า ten-thousand จะเป็นดังเช่น (i) เป็น palindrome ที่น้อยกว่า 50 iterations หรือ (ii) ไม่มี computing power เพื่อ map ไปเป็น palindrome ในจำนวน 10677 มีเลขแรกที่มีมากกว่า 50 iterations ก่อนที่จะเป็น palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

มี palindromic numbers เป็น Lychrel numbers เช่น 4994

Lychrel กี่ตัวที่มีค่าน้อยกว่า `num`

**Note:** Wording ถูกปรับเปลี่ยนจาก 24 April 2007  ไปเป็น theoretical nature of Lychrel numbers

# --hints--

`countLychrelNumbers(1000)` ควร return number.

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` ควร return 13.

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` ควร return 39.

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` ควร return 76.

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` ควร return 140.

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` ควร return 249.

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
