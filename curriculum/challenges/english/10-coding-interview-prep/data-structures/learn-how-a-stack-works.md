---
id: 587d8250367417b2b2512c5e
title: Learn how a Stack Works
challengeType: 1
forumTopicId: 301705
dashedName: learn-how-a-stack-works
---

# --description--

คุณอาจคุ้นเคยกับกองหนังสือบนโต๊ะของคุณที่เป็นชั้นๆ คุณอาจเคยใช้คุณลักษณะ undo ของโปรแกรมแก้ไขข้อความ คุณอาจเคยชินกับการกดปุ่มย้อนกลับบนโทรศัพท์เพื่อกลับไปยังมุมมองก่อนหน้าในแอปของคุณ

คุณรู้ไหมว่าพวกเขามีอะไรที่เหมือนกัน? พวกเขาทั้งหมดเก็บข้อมูลในลักษณะที่คุณสามารถย้อนกลับได้

หนังสือที่อยู่บนสุดในกองคือเล่มที่ถูกนำมาวางไว้สุดท้าย ถ้าคุณเอาหนังสือเล่มนั้นออกจากกองหนังสือของคุณ คุณจะเห็นหนังสือที่วางอยู่ที่นั่นก่อนหนังสือเล่มบนสุด

หากคุณลองคิดดู จากตัวอย่างข้างต้น คุณจะได้ service ประเภท <dfn>Last-In-First-Out</dfn> เราจะพยายามเขียนโค้ดของเราด้วยการเลียนแบบหลักการนี้

รูปแบบการจัดเก็บข้อมูลนี้เรียกว่า <dfn>Stack</dfn> โดยเฉพาะอย่างยิ่ง เราจะต้องใช้ `push()` method ที่ผลัก JavaScript object ที่ด้านบนสุดของ stack  และ `pop()` method ที่ลบ JavaScript object ที่อยู่บนสุดของ stack ในขณะนั้น

# --instructions--

ที่นี่เรามี stack ของการบ้านที่แสดงเป็น array : `"BIO12"` อยู่ที่ฐาน และ `"PSY44"` อยู่ที่ด้านบนสุดของ stack 

แก้ไข array ที่กำหนดและปฏิบัติเหมือนเป็น `stack` โดยใช้ JavaScript method ที่กล่าวถึงข้างต้น ลบ element ด้านบน `"PSY44"` ออกจาก stack  จากนั้นเพิ่ม `"CS50"` ให้เป็น element ใหม่บนสุดของ stack 

# --hints--

`homeworkStack` ควรมีแค่ 4 element

```js
assert(homeworkStack.length === 4);
```

Element สุดท้ายใน `homeworkStack` ควรเป็น `”CS50”`

```js
assert(homeworkStack[3] === 'CS50');
```

`homeworkStack` ไม่ควรจะมี `"PSY44"` อยู่

```js
assert(homeworkStack.indexOf('PSY44') === -1);
```

การประกาศเริ่มต้นของ `homeworkStack` ไม่ควรถูกเปลี่ยนแปลง 

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
// Only change code below this line
```

# --solutions--

```js
// solution required
```
