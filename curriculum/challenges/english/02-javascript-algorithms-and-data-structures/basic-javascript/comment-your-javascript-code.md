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

Comment คือบรรทัดของโค้ดที่ JavaScript จะตั้งใจปล่อยผ่าน การ Comment เป็นวิธีในการจดบันทึกให้ตัวคุณ หรือผู้อื่นที่ต้องการทราบในภายหลังว่าโค้ดนั้นใช้ทำอะไร

ในภาษา JavaScript มีการเขียน comments อยู่ 2 วิธี:

การใช้ `//` จะบอก JavaScript ให้ปล่อยผ่านข้อความที่เหลือในบรรทัดนั้นๆ เรียกว่า in-line comment:

```js
// This is an in-line comment.
```

คุณสามารถ comment หลายบรรทัด โดยเริ่มต้นด้วย `/*` และจบด้วยด้วย `*/` ซึ่งเรียกว่า multi-line comment:

```js
/* This is a
multi-line comment */
```

**หมายเหตุ:** ในขณะที่คุณเขียน code คุณควรใส่ comment เป็นประจำ เพื่ออธิบายการทำงานของส่วนต่างๆ ของ code  การ comment ที่ดี จะช่วยสื่อสารวัตถุประสงค์ของคุณกับผู้อื่น และสำหรับตัวคุณเองในอนาคต

# --instructions--

ลองสร้าง comment แต่ละประเภท

# --hints--

คุณควรสร้าง comment โดยใช้ `//` ซึ่ง comment ประกอบด้วยอย่างน้อย 5 ตัวอักษร

```js
assert(code.match(/(\/\/)...../g));
```

คุณควรสร้าง comment โดยใช้ `/* */` ซึ่ง comment ประกอบด้วยอย่างน้อย 5 ตัวอักษร

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
