---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

ตอนนี้พวกเราเริ่มมีอารมณ์แปรปรวนกันแล้ว เราเลยอยากกินชา 2 แบบ คือชาเชียวและชาดำ 
เกร็ดความรู้: ถ้าคุณเจอลูกค้าที่มีอารมณ์แปรปรวน อย่าตกใจไป มันเป็นเรื่องปกติ

จากข้อมูลด้านบน เราต้องกลับมาดูฟังก์ชัน `getTea` จากแบบทดสอบที่แล้ว ถ้าเราอยากชงชาหลายแบบ เราจะแก้ `getTea` ให้รับค่า parameter เป็นฟังก์ชัน เพื่อที่จะเปลี่ยนชาที่ชงได้ วิธีนี้จะทำให้เรามีอิสระในการใช้ฟังก์ชัน `getTea` มากขึ้น และทำให้โปรแกรมเมอร์จัดการได้ง่ายขึ้น ถ้าความต้องการของลูกค้าเปลี่ยนไป

แต่ก่อนอื่น เรามาดูคำจำกัดความที่ใช้ใน Functional Programming กันก่อน

<dfn>Callback</dfn> คือฟังก์ชันที่ถูกส่งเข้าไปยังอีกฟังก์ชันนึง เพื่อกำหนดเงื่อนไขในการรันฟังก์ชัน คุณน่าจะเคยเห็นฟังก์ชันเหล่านี้ถูกส่งเข้าไปเป็น parameter ใน method อื่น 
เช่น method `filter` ซึ่ง callback function ที่เราส่งไปให้ method นี้จะเป็นตัวที่บอก JavaScript ว่าต้องทำการกรอง array ยังไง

<dfn>First class</dfn> function คือฟังก์ชันที่เก็บลงในตัวแปรได้ ส่งเข้าไปในฟังก์ชันอื่นได้ หรือคืนออกมาจากฟังก์ชันอื่นได้ (เหมือนว่าเป็นค่าทั่วๆไป) ซึ่งใน JavaScript นั้น ทุกฟังก์ชันจะเป็น first class function ทั้งหมด

<dfn>higher order</dfn> function คือฟังก์ชันที่รับ argument เป็นฟังก์ชัน หรือคืนค่าเป็นฟังก์ชัน

ส่วน <dfn>lambda</dfn> คือฟังก์ชันที่ถูกส่งเข้าไปในฟังก์ชันื่อน หรือเป็นฟังก์ชันถูกคืนค่ามาจากอีกฟังก์ชันนึง

# --instructions--

ให้ชงชาเขียว 27 แก้ว และชาดำ 13 แก้ว แล้วเก็บไว้ในตัวแปร `tea4GreenTeamFCC` และ `tea4BlackTeamFCC` ตามลำดับ และต้องแก้ไขฟังก์ชัน `getTea` เพื่อให้รับค่าฟังก์ชันเป็น argument แรกด้วย

หมายเหตุ: จำนวนแก้วชาที่ชงจะเป็น argument สุดท้ายของฟังก์ชันเหมือนเดิม เราจะคุยเรื่องนี้ในบทเรียนถัดไป

# --hints--

ตัวแปร `tea4GreenTeamFCC` ต้องมีค่าของชาเขียวทั้ง 27 แก้ว

```js
assert(tea4GreenTeamFCC.length === 27);
```

ตัวแปร `tea4GreenTeamFCC` ต้องเก็บค่าของชาเขียว (`greenTea`)

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

ตัวแปร `tea4BlackTeamFCC` ต้องมีค่าของชาดำทั้ง 13 แก้ว

```js
assert(tea4BlackTeamFCC.length === 13);
```

ตัวแปร `tea4BlackTeamFCC` ต้องเก็บค่าของชาดำ (`blackTea`)

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// ฟังก์ชันนี้จะคืนค่าเป็น string ที่เราถือว่าเป็นชาเขียว 1 แก้ว
const prepareGreenTea = () => 'greenTea';

// ฟังก์ชันนี้จะคืนค่าเป็น string ที่เราถือว่าเป็นชาดำ 1 แก้ว
const prepareBlackTea = () => 'blackTea';

/*
ถ้าเราส่งค่าประเภทของชาที่อยากได้ และจำนวนชาที่อยากได้เข้าไปในฟังก์ชันนี้ 
ฟังก์ชันนี้จะคืนค่าเป็น array ของ string (โดย string แต่ละตัวจะถือว่าเป็นชาหนึ่งแก้ว)
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

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
