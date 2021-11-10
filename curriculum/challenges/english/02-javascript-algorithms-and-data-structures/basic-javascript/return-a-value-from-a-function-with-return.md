---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

เราสามารถส่งค่าไปยังฟังก์ชันด้วย <dfn>arguments</dfn> คุณสามารถใช้คำสั่ง `return` เพื่อส่งค่ากลับจากฟังก์ชันได้

**Example**

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
```

`answer` มีค่า `8`.

`plusThree` รับ <dfn>argument</dfn> ผ่านเข้ามายัง `num` และส่งกลับค่าเท่ากับ `num + 3`.

# --instructions--

จงสร้างฟังก์ชัน `timesFive` ที่รับ argument 1 ตัว นำมาคูณด้วย `5` แล้วคืนค่าเป็นผลลัพธ์ที่คำนวณได้

# --hints--

`timesFive` ควรเป็น function

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` ควรคืนค่า `25`

```js
assert(timesFive(5) === 25);
```

 `timesFive(2)` ควรคืนค่า  `10`

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` ควรคืนค่า `0`

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
