---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

ในวิทยาการคอมพิวเตอร์ <dfn>data</dfn> คือสิ่งที่มีความหมายต่อคอมพิวเตอร์ ภาษา JavaScript มี <dfn>ประเภทข้อมูล</dfn> แตกต่างกัน 8 ชนิด ได้แก่ `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, และ `object`

ตัวอย่างเช่น คอมพิวเตอร์แยกความแตกต่างระหว่างตัวเลข เช่น ตัวเลข `12` และ `strings` อย่างเช่น `"12"`, `"dog"` หรือ `"123 cats"` ซึ่งเป็นชุดตัวอักษร คอมพิวเตอร์จะสามารถคำนวณทางคณิตศาสตร์กับตัวเลขได้ แต่ไม่สามารถทำกับ string ได้ 

<dfn>Variables</dfn> (ตัวแปร) ช่วยให้คอมพิวเตอร์จัดเก็บและจัดการข้อมูลในรูปแบบไดนามิก ซึ่งจะทำโดยการใช้ "label" (ป้ายกำกับ) ชี้ไปยังข้อมูลแทนที่จะใช้ตัวข้อมูลเอง ทั้ง 8 ประเภทข้อมูลจะถูกเก็บไว้ใน variable

Variable คล้ายกับตัวแปร x และ y ที่คุณใช้ในวิชาคณิตศาสตร์ หมายความว่าเป็นชื่อง่ายๆ ที่ใช้แทนข้อมูลที่เราต้องการอ้างถึง ตัวแปรคอมพิวเตอร์จะต่างจากตัวแปรคณิตศาสตร์ในเรื่องการเก็บค่าที่แตกต่างกันในแต่ละเวลา

เราบอก JavaScript ให้สร้าง หรือ <dfn>ประกาศ</dfn> ตัวแปรโดยใช้ keyword `var` ไว้ด้านหน้า เช่น:


```js
var ourName;
```

การสร้าง variable ชื่อว่า `ourName` ใน JavaScript เราจะปิดคำสั่งด้วย semicolons ; ชื่อ Variable สามารถเป็นตัวเลข, ตัวอักษร และ `$` หรือ `_` แต่ต้องไม่มีเว้นวรรค หรือเริ่มด้นด้วยตัวเลข

# --instructions--

จงใช้ keyword `var` ในการสร้าง variable `myName`

**Hint**  

ดูที่ตัวอย่าง `ourName` ด้านบน ถ้าคุณติดปัญหา

# --hints--

คุณควรประกาศ `myName` ด้วยคีย์เวิร์ด `var` และจบด้วย semicolon

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
