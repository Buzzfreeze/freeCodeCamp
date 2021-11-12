---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

ตอนนี้คุณรู้แล้วว่า object คืออะไร รวมถึงฟีเจอร์พื้นฐาน และข้อดีของ object กล่าวโดยสรุป คือ object คือที่เก็บ key-value ซึ่งยืดหยุ่น และใช้งานง่ายในการจัดโครงสร้างข้อมูล ***และ*** ใช้เวลาในการค้นหาที่รวดเร็วมาก บทเรียนที่เหลือ เราจะอธิบายการทำงานทั่วไปหลายอย่าง ที่คุณสามารถทำกับ object ได้ เพื่อให้คุณรู้สึกสบายใจที่จะใช้โครงสร้างข้อมูลที่มีประโยชน์เหล่านี้ในโปรแกรมของคุณ

ในบทก่อนหน้านี้ เราได้เพิ่มและแก้ไขคู่ key-value ของ object ที่นี่เราจะดูว่าเราสามารถ *ลบ* คู่ key-value ออกจาก object ได้อย่างไร

มาทบทวนตัวอย่าง object `foods` ของเราอีกครั้งเป็นครั้งสุดท้าย หากเราต้องการลบ key `apples` เราสามารถลบออกได้โดยใช้ keyword `delete` ดังนี้:

```js
delete foods.apples;
```

# --instructions--

จงใช้ keyword delete เพื่อลบ  `oranges`, `plums` และ key `strawberries` จาก object `foods`

# --hints--

object `foods` ควรมีแค่ 3 key: `apples`, `grapes`, และ `bananas`

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

key `oranges`, `plums` และ `strawberries` ควรถูกลบโดยใช้ `delete`

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

// Only change code below this line

// Only change code above this line

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
