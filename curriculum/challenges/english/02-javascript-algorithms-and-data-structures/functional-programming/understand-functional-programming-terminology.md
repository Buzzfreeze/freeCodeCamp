---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

ทีม FCC มีอารมณ์แปรปรวนและตอนนี้ต้องการชา 2 ประเภท คือ ชาเชียวและชาดำ 
ข้อมูลทั่วไป: การที่ลูกค้ามีอารมณ์แปรปรวนเป็นเรื่องที่พบเจอได้ เป็นเรื่องปกติ

ตามข้อมูลดังกล่าว เราต้องกลับมาดูฟังก์ชัน `getTea` จากแบบทดสอบที่แล้ว เพื่อจัดการกับความต้องการชาที่แตกต่างกัน เราสามารถปรับแก้ `getTea` เพื่อรับค่าฟังก์ชันเป็น parameter เพื่อที่จะสามารถเปลี่ยนประเภทชาที่จัดเตรียมได้ วิธีนี้ทำให้ `getTea` มีความยืดหยุ่นและทำให้โปรแกรมเมอร์สามารถจัดการได้ดีขึ้นเมื่อความต้องการของลูกค้ามีการเปลี่ยนแปลง

แต่ก่อนอื่น มาดูความหมายของคำจำกัดความต่างๆ เกี่ยวกับเรื่องนี้กัน

<dfn>Callbacks</dfn> เป็นฟังก์ชันที่ถูกส่งเข้าไปยังอีกฟังก์ชันนึง เพื่อกำหนดเงื่อนไขในการรันฟังก์ชัน คุณอาจเห็นว่าฟังก์ชันเหล่านี้ถูกส่งเข้าไปเป็น parameter ของอีก method นึง ตัวอย่างเช่น `filter` ซึ่งเป็น callback function ที่บอก JavaScript ถึงเงื่อนไขของการ filter array

ฟังก์ชันที่สามารถถูกกำหนด (assigned) ค่าให้กับตัวแปร, ส่งผ่านเข้าไปในฟังก์ชันอื่น หรือ คืนค่าจากฟังก์ชันอื่นได้เช่นเดียวกับตัวแปรอื่นๆ เรียกว่า <dfn>first class</dfn> functions ซึ่งใน JavaScript นั้น ทุกฟังก์ชันเป็น first class function

ฟังก์ชันที่มี argument เป็นฟังก์ชันอื่น หรือคืนค่าเป็นฟังก์ชัน เรียกว่า <dfn>higher order</dfn> functions

ฟังก์ชันที่ถูกส่งเข้าไปหรือถูกคืนค่ามาจากอีกฟังก์ชันนึง เรียกว่า <dfn>lambda</dfn>.

# --instructions--

จงเตรียมชาเขียว 27 ถ้วย และชาดำ 13 ถ้วย แล้วเก็บไว้ในตัวแปร `tea4GreenTeamFCC` และ `tea4BlackTeamFCC` ตามลำดับ นอกจากนี้ต้องแก้ไขฟังก์ชัน `getTea` เพื่อให้รับค่าฟังก์ชันเป็น argument แรก

หมายเหตุ: จำนวนถ้วยชายังคงส่งเข้าฟังก์ชันเป็น argument สุดท้าย เราจะกล่าวถึงอีกครั้งในบทเรียนถัดไป

# --hints--

ตัวแปร `tea4GreenTeamFCC` ควรเก็บค่าชาเขียว 27 ถ้วย

```js
assert(tea4GreenTeamFCC.length === 27);
```

ตัวแปร `tea4GreenTeamFCC` ควรเก็บค่าชาเขียว

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

ตัวแปร `tea4BlackTeamFCC` ควรเก็บค่าชาดำ 13 ถ้วย

```js
assert(tea4BlackTeamFCC.length === 13);
```

ตัวแปร `tea4BlackTeamFCC` ควรเก็บค่าชาดำ

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
