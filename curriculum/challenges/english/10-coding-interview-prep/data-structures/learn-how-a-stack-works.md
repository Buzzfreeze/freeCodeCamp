---
id: 587d8250367417b2b2512c5e
title: Learn how a Stack Works
challengeType: 1
forumTopicId: 301705
dashedName: learn-how-a-stack-works
---

# --description--

คุณอาจคุ้นเคยกับกองหนังสือบนโต๊ะของคุณที่เป็นชั้นๆ 
คุณอาจเคยใช้คุณลักษณะ undo ของโปรแกรมแก้ไขข้อความ คุณอาจเคยชินกับการกดปุ่มย้อนกลับบนโทรศัพท์เพื่อกลับไปยังหน้าที่แล้ว ในแอปของคุณ

คุณรู้ไหมว่าสิ่งเหล่านี้มีอะไรที่เหมือนกัน? 
สิ่งหล่านี้เก็บข้อมูลในลักษณะที่คุณสามารถย้อนกลับได้

หนังสือที่อยู่บนสุดในกองคือเล่มที่ถูกนำมาวางไว้สุดท้าย ถ้าคุณเอาหนังสือเล่มนั้นออกจากกองหนังสือของคุณ คุณจะเห็นหนังสือที่วางอยู่ก่อนหนังสือเล่มบนสุด

หากคุณลองคิดดู จากตัวอย่างข้างต้น คุณจะได้ service ประเภท <dfn>Last-In-First-Out</dfn> (ถ้าเข้าทีหลังจะถูกดึงออกก่อน) เราจะพยายามเขียนโค้ดของเราด้วยการเลียนแบบหลักการนี้

รูปแบบการจัดเก็บข้อมูลนี้เรียกว่า <dfn>Stack</dfn> โดยเฉพาะอย่างยิ่ง เราจะต้องใช้ method `push()` ที่เติม JavaScript object ไปด้านบนสุดของ stack  และ method `pop()` ที่ลบ JavaScript object ที่อยู่บนสุดของ stack ในขณะนั้น

# --instructions--

ตอนนี้เรามี stack ของการบ้านที่แสดงเป็น array: `"BIO12"` อยู่ด้านล่าง และ `"PSY44"` อยู่ที่ด้านบนสุดของ stack

แก้ไข array ที่กำหนด โดยมองว่า array นี้เป็นเหมือน `stack` โดยใช้ JavaScript method `push()` และ `pop()` เพื่อลบ element ด้านบน (`"PSY44"`) ออกจาก stack  จากนั้นเพิ่ม `"CS50"` ให้เป็น element ใหม่บนสุดของ stack 

# --hints--

`homeworkStack` ควรมีแค่ 4 element

```js
assert(homeworkStack.length === 4);
```

element สุดท้ายใน `homeworkStack` ควรเป็น `”CS50”`

```js
assert(homeworkStack[3] === 'CS50');
```

`homeworkStack` ไม่ควรจะมี `"PSY44"` อยู่

```js
assert(homeworkStack.indexOf('PSY44') === -1);
```

ห้ามแก้การประกาศค่าเริ่มต้นของ `homeworkStack`

```js
assert(
  code.match(/=/g).length === 1 &&
    /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(
      code
    )
);
```

# --seed--

## --seed-contents--

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
// solution required
```
