---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

ฟังก์ชันสามารถมี `return` statement ได้ แต่ก็ไม่จำเป้นต้องมี ในกรณีที่ฟังก์ชันไม่มี `return` statement เมื่อเราเรียกฟังก์ชันนี้ จะมีประมวลผลโค้ดภายใน และคืนค่า `undefined` ออกมา


**Example**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
```

`addSum` เป็นฟังก์ชันที่ไม่่มี `return` statement ฟังก์ชันนี้จะเปลี่ยนค่าตัวแปร global `sum` แต่คืนค่าเป็น `undefined`

# --instructions--

จงสร้างฟังก์ชัน `addFive` ที่ไม่มี argument โดยฟังก์ชันนี้จะนำ 5 ไปบวกให้กับตัวแปร `sum` แต่คืนค่าเป็น `undefined`

# --hints--

`addFive` ควรเป็นฟังก์ชัน

```js
assert(typeof addFive === 'function');
```

เมื่อทั้งสองฟังก์ชันรัน `sum` ควรเท่ากับ `8`

```js
assert(sum === 8);
```

ค่าที่คืนจาก `addFive` ควรเป็น `undefined`


```js
assert(addFive() === undefined);
```

ภายในฟังก์ชัน `addFive` คุณควรบวก `5` กับตัวแปร `sum`

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
