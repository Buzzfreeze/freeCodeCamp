---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

Functional programming เป็นรูปแบบนึงของการเขียนโปรแกรมที่มีความเรียบง่าย, มีความโดดเดียว (isolated functions) กล่าวคือ ไม่ก่อให้เกิดผลกระทบต่อข้อมูลที่อยู่ภายนอกขอบเขตของฟังก์ชัน (function scope) นั่นคือ ทำเพียง `INPUT -> PROCESS -> OUTPUT`

Functional programming เป็นเรื่องเกี่ยวกับ

1) Isolated functions - ไม่ขึ้นอยู่กับ state ของ program รวมถึงไม่มีการแก้ไขตัวแปร global ที่อยู่ภายนอกฟังก์ชัน

2) Pure functions - ค่าที่ส่งออกมาจากฟังก์ชัน (return value) ต้องเป็นค่าเดิมเสมอ ถ้าส่งค่า Input เดิมเข้าไป

3) Functions with limited side effects - การเปลี่ยนแปลง state ของ program ที่อยู่ภายนอกฟังก์ชันจะต้องมีการควบคุมอย่างระมัดระวัง

# --instructions--

สมาชิกของ freeCodeCamp ชอบรับประทานชา

ใน code editor มีการกำหนดฟังก์ชัน `prepareTea` และ `getTea` ไว้ให้คุณแล้ว ให้คุณเรียกฟังก์ชัน `getTea` เพื่อทำชา 40 ถ้วย แล้วนำไปเก็บไว้ที่ตัวแปร `tea4TeamFCC`

# --hints--

ตัวแปร `tea4TeamFCC` ควรเก็บชา 40 ถ้วยให้กับทีม

```js
assert(tea4TeamFCC.length === 40);
```

ตัวแปร `tea4TeamFCC` ควรเก็บค่าที่เป็น 'greenTea'

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
