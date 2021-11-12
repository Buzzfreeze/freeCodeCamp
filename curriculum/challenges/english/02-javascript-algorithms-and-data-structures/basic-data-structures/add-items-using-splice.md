---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

จำได้ไหมว่า ในบทที่แล้วเราพูดถึง `splice()` ที่สามารถรับพารามิเตอร์ได้สูงสุด 3 ตัว? คุณสามารถใช้พารามิเตอร์ตัวที่สาม ที่ประกอบด้วย element หนึ่งหรือหลายตัว เพื่อเพิ่มให้กับ array นี่เป็นความสามารถที่มีประโยชน์สำหรับการปรับแก้ element หรือชุดของ element ได้อย่างรวดเร็ว


```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

`12` ที่แสดงซ้ำเป็นครั้งที่ 2 จะถูกลบออก แล้วเพิ่ม `13` และ `14` ที่ index เดียวกัน ดังนั้น array `numbers` จะเป็น `[ 10, 11, 12, 13, 14, 15 ]`

ในที่นี้เราเริ่มต้นด้วย array ของตัวเลข จากนั้น เราส่งต่อสิ่งต่อไปนี้ไปยัง `splice()`: index ที่จะเริ่มลบ element (3), จำนวน element ที่จะลบ (1) และ arguments ที่เหลือ (13, 14) คือ element ที่เราจะนำไปแทรก โดยแทรกที่ index เดียวกันนั้น อย่างไรก็ตาม เราสามารถนำ element เข้าไปแทรก จำนวนเท่าใดก็ได้ (คั่นด้วยเครื่องหมาย comma) ตามหลัง `amountToDelete`

# --instructions--

เราประกาศ function `htmlColorNames` ซึ่งจะนำ array ของ HTML colors มาเป็น argument จงแก้ไข function โดยใช้  `splice()` เพื่อลบสอง element แรกของ array และเพิ่ม `'DarkSalmon'` และ `'BlanchedAlmond'` ในที่ตำแหน่งเดียวกันนั้น


# --hints--

`htmlColorNames` ควรคืนค่า `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

`htmlColorNames` function ควรใช้ `splice()` method

```js
assert(/.splice/.test(code));
```

คุณไม่ควรใช้ `shift()` หรือ `unshift()`

```js
assert(!/shift|unshift/.test(code));
```

คุรไม่ควรใช้ brackets ของ array 

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
