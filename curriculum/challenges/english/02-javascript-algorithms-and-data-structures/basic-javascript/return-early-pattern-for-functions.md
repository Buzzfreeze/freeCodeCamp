---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

ฟังก์ชันจะหยุดทำงานเมื่อเจอคำสั่ง `return` แล้วก็จะทำการคืนค่าให้กับจุดที่เรียกใช้ฟังก์ชัน

**Example**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

เมื่อเรียกใช้ฟังก์ชันด้านบน หน้า console จะแสดง string คำว่า `Hello` และฟังก์ชันจะคืนค่า string `World` ออกมา โดยเราจะไม่เห็น string `byebye` ใน console เลย เพราะว่าฟังก์ชันหยุดทำงานตั้งแต่ตอนเจอคำสั่ง `return` แล้ว



# --instructions--

จงแก้ไขฟังก์ชัน `abTest` โดยให้ตรวจสอบว่าถ้า `a` หรือ `b` มีค่าน้อยกว่า `0` ฟังก์ชันจะหยุดทำงานทันทีแล้วคืนค่า `undefined` ออกมา

**Hint**  

อย่าลืมว่า [`undefined` เป็นคีย์เวิร์ด](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables) ที่ไม่ใช่ string

# --hints--

การเรียกใช้ฟังก์ชัน `abTest(2,2)` ต้องคืนค่าออกมาเป็นข้อมูลประเภท number


```js
assert(typeof abTest(2, 2) === 'number');
```

การเรียกใช้ฟังก์ชัน `abTest(2,2)` ต้องคืนค่าออกมาเป็น `8`

```js
assert(abTest(2, 2) === 8);
```

การเรียกใช้ฟังก์ชัน `abTest(-2,2)` ต้องคืนค่าออกมาเป็น `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

การเรียกใช้ฟังก์ชัน `abTest(2,-2)` ต้องคืนค่าออกมาเป็น `undefined`

```js
assert(abTest(2, -2) === undefined);
```

การเรียกใช้ฟังก์ชัน `abTest(2,8)` ต้องคืนค่าออกมาเป็น `18`

```js
assert(abTest(2, 8) === 18);
```

การเรียกใช้ฟังก์ชัน `abTest(3,3)` ต้องคืนค่าออกมาเป็น `12`

```js
assert(abTest(3, 3) === 12);
```

การเรียกใช้ฟังก์ชัน `abTest(0,0)` ต้องคืนค่าออกมาเป็น `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function abTest(a, b) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
