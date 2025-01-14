---
id: 5900f3b61000cf542c50fec9
title: 'Problem 74: Digit factorial chains'
challengeType: 5
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

ตัวเลข 145 เป็นที่รู้จักกันดีสำหรับคุณสมบัติที่ผลรวมของ factorial ของตัวเลขเท่ากับ 145:

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

อีกตัวที่เป็นที่รู้จักน้อยกว่าคือ 169 โดยเลขนี้จะสร้างชุดของตัวเลขที่ยาวที่สุดที่เชื่อมโยงกลับไปที่ 169; โดยชุดตัวเลขนี้มีแค่สามลูป คือ:

$$\begin{align}
&169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\
&872 → 45362 → 872\\\\
\end{align}$$


ไม่ยากเลยที่จะพิสูจน์ว่าในที่สุดทุก ๆ หมายเลขเริ่มต้นจะติดอยู่ในloopในที่สุด ตัวอย่างเช่น:

$$\begin{align}
&69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\
&540 → 145\\ (→ 145)\\\\
\end{align}$$

เริ่มต้นด้วย 69 ทำให้เกิด chain ของคำศัพท์ที่ไม่ซ้ำห้าคำ แต่ chain ที่ไม่ซ้ำที่ยาวที่สุดที่มีจำนวนเริ่มต้นต่ำกว่าหนึ่งล้านคือ 60 terms

มีกี่ชุดตัวเลขที่เริ่มด้วยค่าที่ต่ำกว่า `n` โดยมี 60 ค่าที่ไม่ซ้ำกัน

# --hints--

`digitFactorialChains(2000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` ต้องคืนค่าเป็น `6`

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` ต้องคืนค่าเป็น `42`

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` ต้องคืนค่าเป็น `282`

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` ต้องคืนค่าเป็น `402`

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0;
    while (number > 0) {
      sum += factorials[number % 10];
      number = Math.floor(number / 10);
    }
    return sum;
  }

  const factorials = [1];
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i);
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0;

  for (let i = 2; i < n; i++) {
    let curNum = i;
    let chainLength = 0;
    const curSequence = [];
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum);
      curNum = sumDigitsFactorials(curNum);
      chainLength++;
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum];
        break;
      }
    }
    if (chainLength === 60) {
      result++;
    }
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j;
    }
  }
  return result;
}
```
