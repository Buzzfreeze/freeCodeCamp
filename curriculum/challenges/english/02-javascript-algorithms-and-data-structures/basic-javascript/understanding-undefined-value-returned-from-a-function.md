---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

ฟังก์ชันสามารถมีหรือไม่มี `return` statement ก็ได้ แต่ในกรณีที่ฟังก์ชันไม่มี `return` statement เมื่อเราเรียกใช้ฟังก์ชันนี้ ฟังก์ชันจะทำประมวลผลภายใน และคืนค่าออกมาเป็น `undefined`


**ตัวอย่าง**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
```

ฟังก์ชัน `addSum` เป็นฟังก์ชันที่ไม่่มี `return` statement ฟังก์ชันนี้จะเปลี่ยนค่าตัวแปร `sum` ในระดับ global แต่คืนค่าออกมาเป็น `undefined`

# --instructions--

จงสร้างฟังก์ชันชื่อ `addFive` ที่ไม่มี argument โดยฟังก์ชันนี้จะนำ 5 ไปบวกให้กับตัวแปร `sum` แต่จะคืนค่าออกมาเป็น `undefined`

# --hints--

`addFive` ต้องเป็นฟังก์ชัน

```js
assert(typeof addFive === 'function');
```

เมื่อทั้งสองฟังก์ชันทำงาน ตัวแปร `sum` ควรมีค่าเท่ากับ `8`

```js
assert(sum === 8);
```

ค่าที่คืนออกมาจากฟังก์ชัน `addFive` ควรเป็น `undefined`


```js
assert(addFive() === undefined);
```

ภายในฟังก์ชัน `addFive` คุณต้องนำตัวแปร `sum` มาบวก `5`

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

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
