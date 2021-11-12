---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

`push()` และ `unshift()` เป็น method ที่มีการทำงานตรงข้ามกับ `pop()` และ `shift()` คุณอาจเดาได้ในตอนนี้ว่า `pop()` *ดึงออก*  element ออกจากส่วนท้ายของ array ในขณะที่ `shift()` จะดึง element ออกจากจุดเริ่มต้น สิ่งที่เหมือนกันระหว่าง `pop()` และ `shift()` และพี่น้องของมัน `push()` และ `unshift()` ก็คือทุก method ไม่มีพารามิเตอร์ และแต่ละ method อนุญาตให้แก้ไข array ได้ทีละ 1 element เท่านั้น

ลองมาดูตัวอย่าง

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` ควรมีค่า `['whats up?', 'hello']`

```js
greetings.shift();
```

`greetings` ควรมีค่า `['hello']`

เราสามารถคืนค่าเป็น element ที่ถูกดึงออกมา ดังตัวอย่างนี้

```js
let popped = greetings.pop();
```

`greetings` ควรมีค่า `[]`, และ `popped` ควรมีค่า `hello`.

# --instructions--

เราได้ประกาศฟังก์ชัน `popShift` ซึ่งรับ array เป็น argument และคืนค่าเป็น array ใหม่ จงแก้ไขฟังก์ชันโดยใช้ `pop()` และ `shift()` เพื่อดึง element แรกและ element สุดท้ายของ array argument ออก แล้วนำ elements ที่ถูกดึงออกไปมากำหนดค่าให้กับตัวแปรในฟังก์ชัน `popShift` ที่เกี่ยวข้อง เพื่อคืนค่าเป็น array ของตัวแปรเหล่านั้น

# --hints--

`popShift(["challenge", "is", "not", "complete"])` ควรส่งคืน `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

 `popShift` function ควรใช้ `pop()` method

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

 `popShift` function ควรใช้ `shift()` method

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```
