---
id: 587d7b88367417b2b2512b45
title: 'Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

ตอนนี้คุณได้ทำแบบทดสอบที่เกี่ยวข้องกับ higher-order functions เช่น `map()`, `filter()` และ `reduce()` แล้ว ถึงเวลาแล้วที่คุณจะได้ใช้ความรู้เหล่านั้นในการทำแบบทดสอบที่ยากมากขึ้น

# --instructions--

จงเขียนโค้ดฟังก์ชัน `squareList` โดยสามารถใช้ `map()`, `filter()` และ `reduce()` ผสมกันได้ และฟังก์ชันนี้ควรคืนค่าเป็น array ตัวใหม่ที่ประกอบด้วยเลขยกกำลังสองของจำนวนเต็มบวก (เลขทศนิยมไม่ใช่เลขจำนวนเต็ม) โดยฟังก์ชันนี้รับ argument เป็น array ของเลขจำนวนจริง 
ตัวอย่าง array ของเลขจำนวนจริง คือ `[-3, 4.8, 5, 3, -3.2]`

Complete the code for the `squareList` function using any combination of `map()`, `filter()`, and `reduce()`. The function should return a new array containing the squares of *only* the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is `[-3, 4.8, 5, 3, -3.2]`.

**หมายเหตุ:** ฟังก์ชันของคุณไม่ควรใช้ `for` หรือ `while` loops หรือ `forEach()` function

# --hints--

`squareList` ควรเป็น `function`.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

ห้ามใช้ `for`, `while` และ `forEach` 

```js
assert(!code.match(/for|while|forEach/g));
```

ควรใช้ `map`, `filter` หรือ `reduce`

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

ฟังก์ชันนี้ควรคืนค่าเป็น `array`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` ควรคืนค่าเป็น `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` ควรคืนค่าเป็น `[9, 100, 49]`.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
