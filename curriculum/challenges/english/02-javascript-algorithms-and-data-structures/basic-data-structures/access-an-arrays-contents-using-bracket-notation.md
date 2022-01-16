---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

สิ่งที่ไม่ว่าจะเป็นโครงสร้างข้อมูลแบบไหนก็ทำได้คือ การเก็บข้อมูล และการดึงข้อมูลได้ทุกเมื่อที่เราต้องการ ตอนนี้เราได้เรียนวิธีสร้าง array ไปแล้ว มาลองดูวิธีเข้าถึงข้อมูลของ array นั้นกัน

ตัวอย่างด้านล่างจะประกาศ array ง่ายๆที่มีสมาชิก 3 ตัวข้างใน: 

```js
let ourArray = ["a", "b", "c"];
```

สมาชิกของ array แต่ละตัวจะมี <dfn>index</dfn> ซึ่ง index มีหน้าที่ 2 อย่างคือ 
(1) เป็นตำแหน่งของ element นั้นใน array และ (2) เป็นเลขที่ใช้เข้าถึง element ตำแหน่งนั้น สิ่งสำคัญอีกอย่างที่ต้องรู้คือใน JavaScript นั้น array เป็น <dfn>zero-indexed</dfn> แปลว่า element แรกของ array จะอยู่ที่ตำแหน่ง ***ศูนย์*** ไม่ใช่ตำแหน่งที่หนึ่ง 
ในการดึง element จาก array ให้ใส่ index ในวงเล็บใหญ่ (`[]`) ต่อท้าย array หรือต่อท้ายตัวแปรที่อ้างอิง object array เราเรียกวิธีนี้ว่าเป็นการใช้ <dfn>bracket notation</dfn> 
เช่น ถ้าเราอยากดึง `a` จาก `ourArray` แล้วมาเก็บลงตัวแปร `ourVariable` เราจะใช้วิธีนี้ได้:

```js
let ourVariable = ourArray[0];
```

ตอนนี้ `ourVariable` จะมีค่าเป็น `a`

นอกจากการใช้ index เพื่อดึงค่าแล้ว เรายังสามารถ*กำหนดค่า*ให้ element ตาม index ได้ด้วย:

```js
ourArray[1] = "not b anymore";
```

ตอนนี้เราทำการเปลี่ยนค่าที่ index 1 จาก string `b` เป็น `not b anymore` โดยการใช้ bracket notation ทำให้ตอนนี้ `ourArray` มีค่าเป็น `["a", "not b anymore", "c"]`

# --instructions--

ให้ทำแบบฝึกหัดนี้ โดยกำหนดค่าตำแหน่งที่ 2 (index `1`) ของ `myArray` เป็นอะไรก็ได้ตามที่คุณต้องการ ยกเว้นตัวอักษร `b`

# --hints--

`myArray[0]` ต้องมีค่าเป็นตัวอักษร `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` ต้องไม่ใช่ตัวอักษร `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` ต้องมีค่าเป็นตัวอักษร `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` ต้องมีค่าเป็นตัวอักษร `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
