---
id: 587d7b8a367417b2b2512b4c
title: >-
  Use Destructuring Assignment with the Rest Parameter to Reassign Array
  Elements
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

ในบางครั้งถ้าเราใช้ array destructuring เราอาจอยากเก็บ element ที่เหลือใน array ตัวอื่น

ในตัวอย่างด้านล่าง เราจะได้ผลลัพธ์คล้ายๆ กับ `Array.prototype.slice()`:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

console จะแสดงค่า `1, 2` และ `[3, 4, 5, 7]`

ตัวแปร `a` และ `b` ดึงค่าแรกและค่าที่สองจาก array และเพราะว่ามี rest parameter อยู่ ดังนั้น `arr` เก็บค่าที่เหลือในรูปแบบของ array โดย rest element จะทำงานได้ถูกต้องถ้าเป็นตัวแปรสุดท้ายในลิสต์เท่านั้น แต่เราจะไม่สามารถใช้ rest parameter เพื่อรับค่า element ที่เหลืออยู่โดยไม่รับ element สุดท้ายของ array ได้

# --instructions--

จงใช้ destructuring assignment กับ rest parameter เพื่อทำงานเหมือน `Array.prototype.slice()` โดยให้ `arr` เป็น array ย่อยที่รับค่ามาจาก array หลักที่ชื่อ `source` โดยไม่รับ element 2 ตัวแรก 

# --hints--

`arr` ต้องมีค่าเป็น `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` ต้องมีค่าเป็น `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

ห้ามใช้ `Array.slice()` โดยตรง

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

ให้ทำการ destructure จาก array `list` 

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  const arr = list; // แก้ไขบรรทัดนี้
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
