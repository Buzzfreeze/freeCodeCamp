---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

Functional programming เป็นรูปแบบนึงของการเขียนโปรแกรมที่มีจะเขียนฟังก์ชันให้เรียบง่าย และกระทบข้อมูลที่อยู่ภายนอกขอบเขตของฟังก์ชัน 
โดยฟังก์ชันจะทำงานแค่ `INPUT -> PROCESS -> OUTPUT`

การเขียนฟังก์ชันใน Functional programming จะใช้หลักการนี้:

1) Isolated function - ไม่ขึ้นอยู่กับ state ของโปรแกรม และต้องไม่แก้ไขตัวแปร global ที่อยู่นอกฟังก์ชัน

2) Pure function - ถ้าเราใส่ Input เป็นค่าเดิม เราจะได้ Output เป็นค่าเดิมเสมอ

3) Function with limited side effect - การเปลี่ยนแปลง state ของ program ที่อยู่ภายนอกฟังก์ชันจะต้องทำโดยให้เกิดผลกระทบต่อฟังก์ชันอื่นน้อยที่สุด

# --instructions--

พวกเราชอบกินชากันใช่มั้ย?

เราได้สร้างฟังก์ชัน `prepareTea` และ `getTea` ใน code editor ไว้ให้คุณแล้ว ให้คุณเรียกฟังก์ชัน `getTea` เพื่อชงชา 40 แก้ว แล้วนำไปเก็บไว้ที่ตัวแปร `tea4TeamFCC`

# --hints--

ตัวแปร `tea4TeamFCC` ต้องเก็บค่าของชาทั้งหมด 40 แก้ว

```js
assert(tea4TeamFCC.length === 40);
```

ตัวแปร `tea4TeamFCC` ต้องเก็บค่าเป็น array ของ string `greenTea`

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// ฟังก์ชันนี้จะคืนค่าเป็น string ที่เราถือว่าเป็นชาเขียว 1 แก้ว
const prepareTea = () => 'greenTea';

/*
ถ้าเราส่งค่าประเภทของชาที่อยากได้ และจำนวนชาที่อยากได้เข้าไปในฟังก์ชันนี้ 
ฟังก์ชันนี้จะคืนค่าเป็น array ของ string (โดย string แต่ละตัวจะถือว่าเป็นชาหนึ่งแก้ว)
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// แก้โค้ดใต้บรรทัดนี้เท่านั้น
const tea4TeamFCC = null;
// แก้โค้ดเหนือบรรทัดนี้เท่านั้น
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
