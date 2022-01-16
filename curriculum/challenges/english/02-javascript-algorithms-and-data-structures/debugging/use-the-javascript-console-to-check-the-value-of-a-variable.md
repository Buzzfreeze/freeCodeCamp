---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

ทั้ง Chrome และ Firefox มี JavaScript console หรือที่เรียกกันว่า DevTool ที่ใช้ debug JavaScript ได้ดีมาก

คุณจะใช้งาน console ได้จากเมนู Developer tool ใน Chrome หรือจากเมนู Web Console ใน Firefox 
ถ้าคุณใช้เบราว์เซอร์อื่นหรือใช้โทรศัพท์มือถือ เราขอแนะนำให้เปลี่ยนมาใช้ Firefox หรือ Chrome บน desktop แทน

method `console.log()` จะแสดงผลลัพธ์ที่อยู่ในวงเล็บออกมาที่หน้า console 
method นี้เป็นเครื่องมือในการ debugg ที่มีประโยชน์ที่สุด ถ้าเราวางโค้ดนี้ไว้ในจุดที่เหมาะสมจะช่วยให้เราเห็นค่าของตัวแปรในขณะที่โค้ดทำงานได้ เราควรที่จะมีค่าของตัวแปรนั้นในใจก่อนที่เราจะดูว่าค่าที่ log ออกมาเป็นอะไร 
การที่เรามีจุดที่เอาไว้ตรวจสอบค่าทั่วทั้งโค้ดจะช่วยให้เราหาจุดที่เกิดปัญหาง่ายขึ้น

ตัวอย่างของการแสดง string `Hello world!` บนหน้า console

```js
console.log('Hello world!');
```

# --instructions--

จงใช้ method `console.log()` เพื่อพิมพ์ค่าของตัวแปร `a` ที่อยู่ในโค้ด

# --hints--

ต้องใช้ `console.log()` ในโค้ดเพื่อแสดงค่าของตัวแปร `a` ออกมา

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
