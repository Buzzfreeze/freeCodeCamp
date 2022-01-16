---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

ถ้ายังจำได้ในบทที่แล้วเราบอกว่า `splice()` รับพารามิเตอร์ได้ถึง 3 ตัว พารามิเตอร์ตัวที่สาม จะใช้เป็น element ที่จะเพิ่มลงใน array การทำแบบนี้จะแก้ element ไม่ว่าจะตัวเดียวหรือหลายตัวได้อย่างรวดเร็ว


```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

จากตัวอย่างด้านบน เลข `12` ที่ซ้ำกันจะถูกลบออก 1 ตัว แล้วเพิ่ม `13` และ `14` ที่ index เดียวกัน ดังนั้น array `numbers` จะกลายเป็น `[ 10, 11, 12, 13, 14, 15 ]`

ในตัวอย่างนี้ `splice()` รับค่าตามนี้ 

1. index ที่จะเริ่มลบ element (`3`)
2. จำนวน element ที่จะลบ (`1`) และ 
3. argument สองตัวท้ายเป็น element (`13`, `14`) ที่เราจะแทรกเข้าไป 

การแทรก element จะแทรกที่ index เดียวกับที่เราระบุ ในการแทรก element แบบนี้เราจะแทรกเข้าไปกี่ตัวก็ได้โดยให้ระบุ element แล้วคั่นด้วยเครื่องหมาย comma ตามหลัง `amountToDelete`

# --instructions--

เราประกาศฟังก์ชัน `htmlColorNames` ซึ่งจะรับ array ของสีที่ใช้ได้บน HTML มาเป็น argument 
ให้แก้ฟังก์ชันโดยใช้  `splice()` เพื่อลบ element 2 ตัวแรกของ array ออก และเพิ่ม `'DarkSalmon'` และ `'BlanchedAlmond'` เข้าไปแทนในตำแหน่งเดิม


# --hints--

การเรียกใช้ `htmlColorNames` ต้องคืนค่าเป็น `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

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

ต้องใช้ method `splice()` ในฟังก์ชัน `htmlColorNames`

```js
assert(/.splice/.test(code));
```

ห้ามใช้ `shift()` หรือ `unshift()`

```js
assert(!/shift|unshift/.test(code));
```

ห้ามใช้ bracket notation (`[]`)

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
