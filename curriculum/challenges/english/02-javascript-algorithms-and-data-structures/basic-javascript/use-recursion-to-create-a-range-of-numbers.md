---
id: 5cc0bd7a49b71cb96132e54c
title: Use Recursion to Create a Range of Numbers
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

ต่อจากบทเรียนที่แล้ว เราให้โอกาสคุณอีกครั้งในการสร้างฟังก์ชันแบบ recursive เพื่อแก้ปัญหา

# --instructions--

เราได้ประกาศฟังก์ชันชื่อ `rangeOfNumbers` ด้วยพารามิเตอร์สองตัว ฟังก์ชันควรคืนค่า array ของ integer ซึ่งเริ่มต้นด้วยตัวเลขจากพารามิเตอร์ `startNum` และลงท้ายด้วยตัวเลขจากพารามิเตอร์ `endNum` ตัวเลขเริ่มต้นจะน้อยกว่าหรือเท่ากับเลขสุดท้ายเสมอ ฟังก์ชันของคุณต้องใช้ recursion โดยการเรียกตัวเองและไม่ใช้ loop ใดๆ นอกจากนี้ยังควรทำงานได้ทั้งในกรณีที่ `startNum` และ `endNum` มีค่าเท่ากัน

# --hints--

function ของคุณควรคืนค่า array

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

โค้ดของคุณไม่ควรใช้ loop ทุกประเภท (`for`, `while` หรือ higher order functions เช่น  `forEach`, `map`, `filter` และ `reduce`)

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` ควรใช้ recursive ในการแก้ปัญหา

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` ควรคืนค่า `[1, 2, 3, 4, 5]`

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` ควรคืนค่า `[6, 7, 8, 9]`

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` ควรคืนค่า `[4]`

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
