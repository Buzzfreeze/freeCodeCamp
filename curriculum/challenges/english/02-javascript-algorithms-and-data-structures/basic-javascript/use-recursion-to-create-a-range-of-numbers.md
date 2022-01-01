---
id: 5cc0bd7a49b71cb96132e54c
title: Use Recursion to Create a Range of Numbers
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

เรามาฝึกใช้ recursion กันอีกทีดีกว่า 

# --instructions--

คราวนี้เราได้ประกาศฟังก์ชันชื่อ `rangeOfNumbers` ที่รับพารามิเตอร์สองตัวไว้ให้แล้ว 
ให้เขียนฟังก์ชันตามเงื่อนไขดังนี้

1. ฟังก์ชันนี้ต้องคืนค่าเป็น array ที่มีข้อมูลข้างในเป็น integer 
2. array ที่คืนออกมานี้จะต้องมีค่าเป็นตัวเลขที่ไล่จาก `startNum` ไปจนถึง `endNum` 
3. `startNum` จะต้องมีค่าน้อยกว่าหรือเท่ากับ `endNum` เสมอ 
4. ฟังก์ชันของคุณต้องใช้ recursion โดยการเรียกตัวเองและห้ามใช้ loop ในโค้ด 
5. ฟังก์ชันยังต้องทำงานได้ถ้า `startNum` และ `endNum` มีค่าเท่ากัน

# --hints--

ฟังก์ชันของคุณต้องคืนค่าออกมาเป็น array

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

ห้ามใช้ loop ในโค้ด (ไม่ว่าจะเป็น `for`, `while` หรือ higher order functions เช่น  `forEach`, `map`, `filter` และ `reduce`)

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

ต้องใช้ recursion ในฟังก์ชัน `rangeOfNumbers` 

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

การเรียกใช้ฟังก์ชัน `rangeOfNumbers(1, 5)` ต้องคืนค่าออกมาเป็น `[1, 2, 3, 4, 5]`

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

การเรียกใช้ฟังก์ชัน `rangeOfNumbers(6, 9)` ต้องคืนค่าออกมาเป็น `[6, 7, 8, 9]`

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

การเรียกใช้ฟังก์ชัน `rangeOfNumbers(4, 4)` ต้องคืนค่าออกมาเป็น `[4]`

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
