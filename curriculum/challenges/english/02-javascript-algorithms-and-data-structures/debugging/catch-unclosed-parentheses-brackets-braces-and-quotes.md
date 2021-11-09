---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

syntax error อีกรูปแบบนึงที่ควรระวังก็คือ วงเล็บและเครื่องหมายคำพูดจะต้องมีเป็นคู่เสมอ เรามักจะใส่ไม่ครบเมื่อแก้ไขโค้ดเดิม โดยการแทรกคำสั่งเข้าไปแล้วใส่วงเล็บหรือเครื่องหมายคำพูดเพียงข้างเดียว นอกจากนี้ ให้ระมัดระวังเมื่อมีการแทรกชุดคำสั่งเข้าไปในอีกคำสั่งนึง เช่น การแทรก callback function เป็น argument ส่งเข้าไปใน method

วิธีการหนึ่งที่ป้องกันข้อผิดพลาดนี้ได้ ก็คือ เมื่อใดก็ตามที่พิมพ์ตัวเปิด ก็ให้พิมพ์ตัวปิดทันที แล้วคลิกให้ cursor อยู่ระหว่างตัวปิดและตัวเปิด จากนั้นก็เขียนโค้ดตามปกติ อย่างไรก็ตาม code editor ส่วนใหญ่ในปัจจุบันสร้างตัวปิดให้เราอัตโนมัติ

# --instructions--

ให้แก้ไข error ในโค้ด

# --hints--

โค้ดของคุณควรแก้ไขส่วนที่หายไปของ array

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

โค้ดของคุณควรแก้ไขส่วนที่หายไปของ `.reduce()` method และผลลัพธ์ที่แสดงใน console ควรเป็น `Sum of array values is: 6`

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
