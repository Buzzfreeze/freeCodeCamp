---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

เมื่อรันถึง `return` statement การทำงานของ function จะหยุดลง และคืนค่าให้กับจุดที่เรียกใช้ฟังก์ชัน 

**Example**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

ด้านบนจะแสดง string `Hello` ในหน้า console และคืนค่า string `World` โดย string `byebye` จะไม่แสดงใน console เลย เพราะสิ้นสุดการทำงานของ function ที่คำสั่ง `return` 



# --instructions--

จงแก้ไขฟังก์ชัน `abTest` โดยถ้า `a` หรือ `b` น้อยกว่า `0` ฟังก์ชันจะออกจากการทำงานทันทีแล้วคืนค่า `undefined`

**Hint**  

จำไว้ว่า [`undefined` เป็นคีย์เวิร์ดหนึ่ง](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables) ที่ไม่ใช่ string

# --hints--

`abTest(2,2)` ควรคืนค่า number


```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2,2)` ควรคืนค่า `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2,2)` ควรคืนค่า `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2,-2)` ควรคืนค่า `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2,8)` ควรคืนค่า `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3,3)` ควรคืนค่า `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0,0)` ควรคืนค่า `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

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
