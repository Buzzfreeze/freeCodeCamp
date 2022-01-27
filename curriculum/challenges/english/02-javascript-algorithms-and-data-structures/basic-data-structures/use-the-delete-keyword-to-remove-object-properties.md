---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

ตอนนี้คุณรู้แล้วว่า object คืออะไร รวมถึงฟีเจอร์พื้นฐาน และข้อดีของ object 
ถ้าจะให้สรุป object ก็คือที่เก็บ key-value มีความเป็นอิสระ และใช้งานง่ายในการจัดโครงสร้างข้อมูล ***และ*** จะใช้เวลาน้อยมากในการดึงข้อมูลขึ้นมา 
ในบทเรียนที่เหลือ เราจะอธิบายการใช้ object  เพื่อให้คุณใช้โครงสร้างข้อมูลนี้ในโปรแกรมของคุณ ได้อย่างสะดวกและถูกต้อง

ในบทก่อนหน้านี้ เราได้เพิ่มและแก้ไขคู่ key-value ของ object ไปแล้ว ที่นี้เราจะมาดูว่าเราจะ *ลบ* คู่ key-value ออกจาก object ได้อย่างไร

ลองดู object `foods` ของเรากันอีกที ถ้าเราต้องการลบ key `apples` เราสามารถลบออกได้โดยใช้ keyword `delete` ดังนี้:

```js
delete foods.apples;
```

# --instructions--

จงใช้ keyword delete เพื่อลบ key `oranges`, `plums` และ `strawberries` ออกจาก object `foods`

# --hints--

object `foods` ต้องเหลือ 3 key แค่สามตัวคือ `apples`, `grapes`, และ `bananas`

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

ต้องลบ key `oranges`, `plums` และ `strawberries` โดยใช้คำสั่ง `delete`

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
