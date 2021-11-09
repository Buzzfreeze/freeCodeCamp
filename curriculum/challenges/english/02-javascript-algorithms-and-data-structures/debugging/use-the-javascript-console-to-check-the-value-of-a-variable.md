---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

Chrome และ Firefox ต่างก็มี JavaScript consoles หรือเรียกกันว่า DevTools ที่ยอดเยี่ยม สำหรับการ debug JavaScript

คุณสามารถใช้งาน Developer tools ได้ที่เมนูของ Chrome หรือ Web Console ที่เมนูของ Firefox ถ้าคุณใช้เบราว์เซอร์อื่นหรือโทรศัพท์มือถือ เราแนะนำให้คุณเปลี่ยนมาใช้ Firefox หรือ Chrome ที่เป็นเวอร์ชัน desktop

`console.log()` method ซึ่งแสดงผลลัพธ์ที่อยู่ในวงเล็บออกมาที่หน้า console เป็น debugging tool ที่ช่วยเราได้มาก การวางคำสั่งนี้ไว้ที่จุดที่หนึ่งๆ ในโค้ด ทำให้คุณสามารถเห็นค่าของตัวแปรได้ทันที การมีผลลัพธ์ในใจว่าควรเป็นอะไร ก่อนเข้าไปตรวจดูว่าตอนนี้มีค่าเป็นอะไรเป็นวิธีการปฏิบัติที่ดี นอกจากนี้การมี check point เพื่อตรวจสอบการทำงานตลอดทั้งโปรแกรมของคุณจะช่วยให้เจาะไปยังจุดที่เกิดปัญหาได้ดียิ่งขึ้น

ตัวอย่างของการพิมพ์ string `Hello world!` ออกมายังหน้า console

```js
console.log('Hello world!');
```

# --instructions--

จงใช้ `console.log()` method เพื่อพิมพ์ค่าตัวแปร `a` ที่อยู่ในโค้ด

# --hints--

โค้ดของคุณควรใช้ `console.log()` เพื่อตรวจสอบค่าของตัวแปร `a`

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
