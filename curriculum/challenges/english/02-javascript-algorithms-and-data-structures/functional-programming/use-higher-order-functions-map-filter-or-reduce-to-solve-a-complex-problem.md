---
id: 587d7b88367417b2b2512b45
title: 'Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

ตอนนี้คุณได้ทำแบบทดสอบที่เกี่ยวกับ higher-order function เช่น `map()`, `filter()` และ `reduce()` แล้ว ถึงเวลาที่คุณจะได้ใช้ความรู้นี้มาทำแบบทดสอบที่ยากขึ้นแล้ว

# --instructions--

ให้เขียน `squareList` โดยใช้ `map()`, `filter()` และ `reduce()` ผสมกันได้  
ฟังก์ชันนี้จะต้องคืนค่าเป็น array ที่มีค่า element แต่ละตัวเป็นเลขยกกำลังสองที่เป็นจำนวนเต็มบวกของ array ที่เป็น argument (เลขทศนิยมไม่ใช่เลขจำนวนเต็ม)  
โดยฟังก์ชันนี้รับ argument เป็น array ของเลขจำนวนจริง  
ตัวอย่าง array ของเลขจำนวนจริง คือ `[-3, 4.8, 5, 3, -3.2]`

**หมายเหตุ:** ห้ามใช้ `for` หรือ `while` loop หรือฟังก์ชัน `forEach()` ในโค้ด

# --hints--

`squareList` ต้องเป็น `function`

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

ห้ามใช้ `for`, `while` และ `forEach` 

```js
assert(!code.match(/for|while|forEach/g));
```

ต้องใช้ `map`, `filter` หรือ `reduce`

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

ฟังก์ชันนี้ต้องคืนค่าเป็น `array`

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

การเรียกใช้ฟังก์ชัน `squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` ต้องได้ค่าเป็น `[16, 1764, 36]`

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

การเรียกใช้ฟังก์ชัน `squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` ต้องได้ค่าเป็น `[9, 100, 49]`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return arr;
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
