---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

การประกาศตัวแปรด้วย `const` ใชักันมากสำหรับ JavaScript สมัยใหม่

โปรแกรมเมอร์บางคนมักกำหนดตัวแปรโดยใช้ `const` เป็นค่าเริ่มต้น เว้นแต่พวกเขาจะรู้ว่าต้องกำหนดค่าใหม่ เฉพาะในกรณีนี้เท่านั้น ที่จะใช้ `let`

อย่างไรก็ตาม สิ่งสำคัญคือต้องเข้าใจว่า object (รวมถึง array และ function) ที่กำหนดให้กับตัวแปรที่ใช้ `const` ยังคงเปลี่ยนแปลงได้ การใช้การประกาศ `const` จะป้องกันการกำหนดค่าใหม่ของให้กับตัวแปรเท่านั้น

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` จะขึ้น error ส่วน `console.log` จะแสดงค่า `[5, 6, 45]`

อย่างที่คุณเห็น คุณสามารถเปลี่ยนแปลงค่าออบเจกต์ `[5, 6, 7]` ได้ และตัวแปร `s` จะยังคงชี้ไปที่ array ที่เปลี่ยนแปลง `[5, 6, 45]` อย่างไรก็ตาม เช่นเดียวกับ array ทั้งหมด elements ของ array `s` จะเปลี่ยนแปลงได้ แต่เนื่องจากมีการใช้ `const` คุณจึงไม่สามารถนำตัวแปร `s` ชี้ไปยัง array อื่นได้


# --instructions--

array ถูกประกาศเป็น `const s = [5, 7, 2]` จงแก้ array ให้เป็น `[2, 5, 7]` โดยใช้ element assignments ต่างๆ

# --hints--

คุณไม่ควรแทนที่ keyword `const`

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` ควรเป็นตัวแปรคงที่ (โดยใช้ `const` )

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

คุณไม่ควรแก้ไขการประกาศ array เดิม

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` ควรมีค่าเป็น `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
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
