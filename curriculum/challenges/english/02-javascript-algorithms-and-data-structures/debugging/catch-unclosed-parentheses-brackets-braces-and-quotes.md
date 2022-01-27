---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

syntax error อีกรูปแบบนึงที่ควรระวังก็คือ `()` `{}` `[]` `""` `''` จะต้องถูกเปิดและปิดเสมอ ปกติเรามักจะพลาดเวลาที่กลับไปแก้โค้ดเดิมแล้วใส่เครื่องหมายพวกนี้แค่ข้างเดียว  
แล้วก็ต้องระวังการแทรกชุดคำสั่งเข้าไปในอีกคำสั่งนึงด้วย เช่น การแทรก callback function เป็น argument ที่ส่งเข้าไปใน method

วิธีที่จะช่วยป้องกันไม่ให้เราพลาดแบบนี้ได้ก็คือ ทุกครั้งที่เราใช้เครื่องหมายพวกนี้เพื่อเปิด ก็ให้พิมพ์ตัวปิดตามทันที แล้วค่อยย้าย cursor อยู่ระหว่างตัวปิดและตัวเปิด ก่อนที่จะเขียนโค้ดที่อยู่ข้างใน แต่เดี๋ยวนี้ code editor ส่วนใหญ่จะสร้างตัวปิดให้เราโดยอัตโนมัติแล้ว

# --instructions--

ให้แก้ไข error ในโค้ด

# --hints--

array ที่ประกาศนั้นมีโค้ดไม่ครบ ให้แก้การประกาศ array นั้นให้ถูกต้อง

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

method `.reduce()` ก็มีโค้ดไม่ครบให้แก้การเรียกใช้ method ถ้าแก้ถูก console จะต้องแสดงคำว่า `Sum of array values is: 6`

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
