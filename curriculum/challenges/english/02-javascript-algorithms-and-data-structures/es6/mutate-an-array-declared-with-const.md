---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

ใน JavaScript ยุคใหม่โปรแกรมเมอร์จะนิยมประกาศตัวแปรด้วย `const`

โปรแกรมเมอร์บางคนมักกำหนดตัวแปรโดยใช้ `const` ยกเว้นถ้าเขาจะรู้ว่าตัวแปรนี้จะต้องมีการเปลี่ยนแปลงข้อมูล เขาถึงที่จะใช้ `let`

แต่เราต้องเข้าใจก่อนว่า object (รวมถึง array และ function) ที่ประกาศโดยใช้ `const` จะยังคงเปลี่ยนแปลงได้ เพราะว่า `const` จะป้องกันไม่ให้กำหนดค่าใหม่เท่านั้น

```js
const s = [5, 6, 7];
s = [1, 2, 3]; // บรรทัดนี้จะ error
s[2] = 45; // บรรทัดนี้จะทำงานได้
console.log(s);
```

ในตัวอย่างนี้ บรรทัด `s = [1, 2, 3]` ทำให้เกิด error ส่วนการ `console.log` จะแสดงค่าเป็น `[5, 6, 45]`

ตามตัวอย่างด้านบน เราสามารถเปลี่ยนแปลงข้อมูลของ array `[5, 6, 7]` ได้ และตัวแปร `s` จะมีค่าเป็น array ที่เปลี่ยนไป `[5, 6, 45]` 
ถ้ายังจำได้ array เป็นประเภทข้อมูลที่ mutable หมายความว่าข้อมูลภายใน array `s` จะเปลี่ยนแปลงได้ แต่เพราะว่าเราประกาศตัวแปรด้วย `const` เราจึงไม่สามารถทำให้ตัวแปร `s` ชี้ไปยัง array อื่นได้


# --instructions--

เราได้ประกาศ array `s` โดยใช้ `const s = [5, 7, 2]` ให้ลองเปลี่ยน array นี้ ให้เป็น `[2, 5, 7]` โดยใช้การ assign ค่าให้ element ใน array

# --hints--

ห้ามเปลี่ยนการใช้ `const` เพื่อประกาศตัวแปร

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` ควรเป็นค่าคงที่ (ประกาศโดยใช้ `const` )

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

คุณไม่ควรแก้ไขโค้ดในส่วนของการประกาศ array

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` ควรมีค่าเป็น `[2, 5, 7]`

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // การใช้คำสั่ง s = [2, 5, 7] โดยตรงจะทำให้เกิด error

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
