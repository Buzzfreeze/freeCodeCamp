---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

`push()` และ `unshift()` เป็น method ที่ทำงานตรงข้ามกับ `pop()` และ `shift()` เลย

จากที่เห็นคุณน่าจะเดาได้แล้วว่า `pop()` จะใช้ดึง element ออกจากท้าย array และ `shift()` จะใช้ดึง element ออกจากหน้า array 

ความต่างของ `pop()` และ `shift()` กับ `push()` และ `unshift()` ก็คือ `pop()` และ `shift()` จะไม่รับพารามิเตอร์ และทั้งสอง method จะดึง element ออกได้ทีละ 1 ตัวเท่านั้น

ลองมาดูตัวอย่าง:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

ตัวแปร `greetings` จะมีค่าเป็น `['whats up?', 'hello']`

```js
greetings.shift();
```

ตัวแปร `greetings` จะมีค่าเป็น `['hello']`

และ method ทั้งสองตัวนี้จะคืนค่าเป็น element ที่ถูกดึงออกมา ตามตัวอย่างนี้:

```js
let popped = greetings.pop();
```

ตัวแปร `greetings` จะมีค่าเป็น `[]` และ ตัวแปร `popped` จะมีค่าเป็น `hello`

# --instructions--

เราได้ประกาศฟังก์ชัน `popShift` ซึ่งรับ array เป็น argument และคืนค่าเป็น array ใหม่ 

จงแก้ไขฟังก์ชันโดยใช้ `pop()` และ `shift()` เพื่อดึง element แรกและ element สุดท้ายของ array argument ออก แล้วนำ element ที่ถูกดึงออกไปเก็บในตัวแปรในฟังก์ชัน `popShift` ที่ชื่อ `popped` และ `shifted` เพื่อให้ฟังก์ชันคืนค่าเป็น array ของตัวแปรนี้

# --hints--

การเรียกใช้ฟังก์ชัน `popShift(["challenge", "is", "not", "complete"])` ต้องได้ค่าเป็น `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

 ต้องใช้ method `pop()` ในฟังก์ชัน `popShift`

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

 ต้องใช้ method `shift()` ในฟังก์ชัน `popShift`

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // แก้ไขบรรทัดนี้
  let shifted; // แก้ไขบรรทัดนี้
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // แก้ไขบรรทัดนี้
  let shifted = arr.shift(); // แก้ไขบรรทัดนี้
  return [shifted, popped];
}
```
