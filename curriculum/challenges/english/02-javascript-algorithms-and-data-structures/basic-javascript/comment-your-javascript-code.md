---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
removeComments: false
videoUrl: 'https://scrimba.com/c/c7ynnTp'
forumTopicId: 16783
dashedName: comment-your-javascript-code
---

# --description--

การ Comment คือการทำให้ JavaScript ไม่ประมวลผลโค้ดในส่วนที่ comment
การ comment เป็นการจดบันทึกไว้ให้คุณหรือผู้อื่นที่มาอ่านโค้ดเข้าใจว่าโค้ดนั้นใช้ทำอะไร

ในภาษา JavaScript มีการเขียน comment อยู่ 2 วิธี:

วิธีที่ 1 - การใช้เครื่องหมาย `//` จะทำให้ JavaScript ข้ามโค้ดในบรรทัดนั้นที่อยู่หลังเครื่องหมาย 
การเขียนวิธีนี้เรียกว่า in-line comment:

```js
// This is an in-line comment.
```

วิธีที่ 2 - การ comment หลายบรรทัดสามารถทำได้โดยเริ่มต้นด้วย `/*` และปิดด้วย `*/` 
การเขียนวิธีนี้เรียกว่า multi-line comment:

```js
/* This is a
multi-line comment */
```

**หมายเหตุ:** ในขณะที่เขียน code คุณควรใส่ comment เป็นประจำ เพื่ออธิบายการทำงานของส่วนต่างๆ ของ code
การ comment ที่ดีจะช่วยให้ผู้อื่นและตัวคุณเองที่กลับมาอ่านโค้ดในภายหลัง เข้าใจว่าโค้ดในส่วนนี้ใช้ทำอะไรและสามารถทำงานร่วมกันได้

# --instructions--

ลองสร้าง comment แต่ละประเภท

# --hints--

สร้าง comment โดยใช้ `//` ซึ่งข้อความที่ถูก comment มีความยาวอย่างน้อย 5 ตัวอักษร

```js
assert(code.match(/(\/\/)...../g));
```

สร้าง comment โดยใช้ `/* */` ซึ่งข้อความที่ถูก comment มีความยาวอย่างน้อย 5 ตัวอักษร

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
