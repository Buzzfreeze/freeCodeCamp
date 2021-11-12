---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

แน่นอนว่าฟีเจอร์พื้นฐานของโครงสร้างข้อมูลใดๆ ก็ตาม ไม่ได้มีแค่การเก็บข้อมูลเท่านั้น แต่ต้องสามารถดึงข้อมูลนั้นตามที่สั่งได้อีกด้วย  ตอนนี้เราได้เรียนรู้วิธีสร้าง array แล้ว เรามาเริ่มคิดกันว่าเราสามารถเข้าถึงข้อมูลของ array นั้นได้อย่างไร

เราประกาศ array อย่างง่ายตามที่แสดงด้านล่าง มีสามรายการในนั้น : 

```js
let ourArray = ["a", "b", "c"];
```

แต่ละ item ของ array จะมี <dfn>index</dfn> ซึ่ง index มีหน้าที่สองอย่างคือเป็นตำแหน่งของรายการนั้นใน array และเป็นวิธีที่คุณใช้อ้างอิงถึง อย่างไรก็ตาม สิ่งสำคัญที่ควรทราบคือ array ใน JavaScript เป็น <dfn>zero-indexed</dfn> หมายความว่า element แรกของ array จริงๆ แล้วอยู่ที่ตำแหน่ง ***ศูนย์*** ไม่ใช่ตำแหน่งแรก ในการดึง element จาก array เราสามารถใส่ index ในวงเล็บและวางต่อที่ส่วนท้ายของ array หรือโดยทั่วๆ ไป ก็จะนำ มาต่อกับตัวแปรที่อ้างอิง object array สิ่งนี้เรียกว่า <dfn>bracket notation</dfn> ตัวอย่างเช่น หากเราต้องการดึงข้อมูล `a` จาก `ourArray` แล้วกำหนดค่าให้กับตัวแปร เราสามารถทำได้โดยใช้โค้ดต่อไปนี้:

```js
let ourVariable = ourArray[0];
```

ตอนนี้ `ourVariable` มีค่า `a`

นอกจากการเข้าถึงค่าที่เกี่ยวข้องกับ index แล้ว คุณยังสามารถ *set* index ให้เป็นค่าที่ต้องการ โดยใช้สัญลักษณ์เดียวกันได้:

```js
ourArray[1] = "not b anymore";
```

ตอนนี้เราทำการ reset ค่าที่ index 1 จาก string `b` เป็น `not b anymore` โดยการใช้ bracket notation ตอนนี้ `ourArray` มีค่า `["a", "not b anymore", "c"]`

# --instructions--

จงทำแบบฝึกหัดนี้ให้สำเร็จ โดยกำหนดค่าตำแหน่งที่ 2 (index `1`) ของ `myArray` เป็นอะไรก็ได้ตามที่คุณต้องการ ยกเว้นตัวอักษร `b`

# --hints--

`myArray[0]` ควรเท่ากับตัวอักษร `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` ควรไม่เท่ากับตัวอักษร `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` ควรเท่ากับตัวอักษร `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` ควรเท่ากับตัวอักษร `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
