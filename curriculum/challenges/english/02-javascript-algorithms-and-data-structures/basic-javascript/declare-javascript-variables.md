---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

ในทางวิทยาการคอมพิวเตอร์ <dfn>ข้อมูล</dfn> คือสิ่งที่สำคัญ โดยภาษา JavaScript มี <dfn>ประเภทข้อมูล</dfn> ทั้งหมด 8 ชนิด คือ `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, และ `object`

ตัวอย่างเช่น คอมพิวเตอร์จะมองตัวเลข (เช่นเลข `12`) ว่าต่างจาก `strings` (เช่น `"12"`, `"dog"` หรือ `"123 cats"` ซึ่งเป็นชุดตัวอักษร)
คอมพิวเตอร์สามารถคำนวณตัวเลขได้ แต่ไม่สามารถคำนวณตัวอักษรได้ 

<dfn>ตัวแปร</dfn> ช่วยให้คอมพิวเตอร์เก็บและแก้ไขข้อมูลได้ ซึ่งจะทำโดยการชี้ไปยังข้อมูลแทนที่จะใช้ตัวข้อมูลเอง ซึ่งข้อมูลด้านบนทั้ง 8 ประเภทสามารถเก็บลงตัวแปรได้ทั้งหมด

โดยตัวแปรของคอมพิวเตอร์ก็เหมือนกับตัวแปร x และ y ที่ใช้ในวิชาคณิตศาสตร์ เพราะฉะนั้นตัวแปรก็คือการตั้งชื่อสั้นๆ ให้ข้อมูลที่เราจะใช้ 
ตัวแปรของคอมพิวเตอร์จะต่างจากตัวแปรคณิตศาสตร์ เพราะว่าค่าของตัวแปรคอมพิวเตอร์จสามารถเปลี่ยนแปลงได้ตลอด

เราบอก JavaScript ให้สร้าง หรือ <dfn>ประกาศ</dfn> ตัวแปรโดยใช้ keyword `var` ไว้ด้านหน้า เช่น:


```js
var ourName;
```

โค้ดด้านบนเป็นการสร้างตัวแปรที่ชื่อว่า `ourName` โดยใน JavaScript เราจะลงท้ายคำสั่งด้วย semicolons `;`
ชื่อของตัวแปรสามารถเป็นได้ทั้งตัวเลข, ตัวอักษร และ `$` หรือ `_` แต่ต้องไม่มีเว้นวรรค และต้องไม่ขึ้นต้นด้วยตัวเลข

# --instructions--

จงใช้ keyword `var` ในการสร้างตัวแปรชื่อ `myName`

**Hint**  

ถ้าติดปัญหา ให้ดูที่ตัวอย่าง `ourName` ด้านบน

# --hints--

คุณต้องประกาศตัวแปร `myName` ด้วยคีย์เวิร์ด `var` และลงท้ายด้วย semicolon

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
