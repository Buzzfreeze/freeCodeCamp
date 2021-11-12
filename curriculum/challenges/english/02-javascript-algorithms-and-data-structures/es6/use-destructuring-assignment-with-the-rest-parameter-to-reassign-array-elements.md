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

ในบางสถานการณ์ที่เกี่ยวข้องกับ array destructuring เราอาจต้องการนำ elements ที่เหลือมาเป็น array อีกตัวแยกต่างหาก

ผลลัพธ์จะคล้ายกับ `Array.prototype.slice()` ดังนี้

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

console จะแสดงค่า `1, 2` และ `[3, 4, 5, 7]`

ตัวแปร `a` และ `b` รับค่าแรกและค่าที่สองจาก array แต่เนื่องจากมี rest parameter อยู่ ดังนั้น `arr` จึงรับค่าที่เหลือในรูปแบบของ array โดย rest element ทำงานได้ถูกต้องก็ต่อเมื่อเป็นตัวแปรสุดท้ายในลิสต์ อย่างไรก็ตาม คุณไม่สามารถใช้ rest parameter เพื่อรับค่า subarray ย่อยที่อยู่เป็น element สุดท้ายของ array เดิม

# --instructions--

Use destructuring assignment with the rest parameter to perform an effective `Array.prototype.slice()` so that `arr` is a sub-array of the original array `source` with the first two elements omitted.



จงใช้ destructuring assignment กับ rest parameter ในการทำ `Array.prototype.slice()` เพื่อให้ `arr` เป็น sub-array ของ array `source` ที่ไม่มี elements 2 ตัวแรก 

# --hints--

`arr` ควรเป็น `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` ควรเป็น `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

ไม่ควรใช้ `Array.slice()` 

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

ควรใช้ Destructuring กับ `list` 

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
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
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
