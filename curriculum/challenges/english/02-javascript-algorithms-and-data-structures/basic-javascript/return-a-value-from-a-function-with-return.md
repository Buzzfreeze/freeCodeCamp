---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

เรารู้แล้วว่าเราสามารถส่งค่าไปยังฟังก์ชันได้ด้วย <dfn>argument</dfn> 
คุณยังสามารถใช้คำสั่ง `return` เพื่อส่งค่ากลับออกมาจากฟังก์ชันได้อีกด้วย

**Example**

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
```

ตัวแปร `answer` จะมีค่าเป็น `8`

ฟังก์ชั้น `plusThree` รับ <dfn>argument</dfn> ผ่านเข้ามาทาง `num` และคืนค่าออกไปเป็นผลลัพธ์ของ `num + 3`

# --instructions--

จงสร้างฟังก์ชัน `timesFive` ที่รับ argument 1 ตัว แล้วนำมาคูณด้วย `5` จากนั้นคืนค่าผลลัพธ์ที่คำนวณได้ออกไป

# --hints--

`timesFive` ต้องเป็น function

```js
assert(typeof timesFive === 'function');
```

การเรียกใช้ฟังก์ชัน `timesFive(5)` ต้องคืนค่าออกไปเป็น `25`

```js
assert(timesFive(5) === 25);
```

 การเรียกใช้ฟังก์ชัน `timesFive(2)` ต้องคืนค่าออกไปเป็น  `10`

```js
assert(timesFive(2) === 10);
```

การเรียกใช้ฟังก์ชัน `timesFive(0)` ต้องคืนค่าออกไปเป็น `0`

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
