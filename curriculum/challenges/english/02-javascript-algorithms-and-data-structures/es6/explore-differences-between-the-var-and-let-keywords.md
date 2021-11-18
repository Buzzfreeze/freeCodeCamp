---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

ปัญหาสำคัญเมื่อประกาศตัวแปรด้วยคีย์เวิร์ด `var` ก็คือ คุณสามารถประกาศตัวแปรซ้ำได้โดยไม่เกิด error

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

ในที่นี้หน้า console จะแสดง string `David`

จากโค้ดด้านบน คุณเห็นได้ว่า ตัวแปร `camper` มีการกำหนดค่าเป็น `James` จากนั้นก็ถูกแทนที่ค่าด้วย `David` ซึ่งถ้าเป็นแอปเล็กๆ คุณอาจไม่เจอปัญหานี้ แต่หากเป็นแอปที่ใหญ่ขึ้นมา คุณอาจเผลอไปแทนที่ค่าตัวแปรโดยไม่ตั้งใจ เนื่องจากการใช้ `var` ไม่ได้ทำให้เกิด error ใดๆ ดังนั้นการค้นหาและแก้ไข bugs ก็ทำได้ยากมากขึ้น อย่างไรก็ตาม `let` ซึ่งเป็นคีย์เวิร์ดใหม่ใน ES6 ช่วยแก้ปัญหานี้ได้ หากคุณแทนที่ `var` ด้วย `let` ในการประกาศตัวแปรในโค้ดข้างต้น ก็จะเกิด error ขึ้นมา 

```js
let camper = 'James';
let camper = 'David';
```

เราสามารถเห็น error นี้ใน console ของ browser ดังนั้น ตัวแปรที่ชื่อเหมือนกันสามารถประกาศได้เพียงครั้งเดียวหากใช้ `let` ซึ่งไม่เหมือนกับ `var` นอกจากนี้ยังมี `"use strict"` ที่เปิด Strict Mode เพื่อตรวจสอบความผิดพลาดของโค้ดและคำสั่งที่ไม่ปลอดภัย (unsafe actions) ได้ ยกตัวอย่างเช่น

```js
"use strict";
x = 3.14;
```

ในที่นี้แสดง error `x is not defined`

# --instructions--

จงปรับแก้โค้ให้ใช้เพียงคีย์เวิร์ด `let`

# --hints--

`var` ไม่ควรมีอยู่ในโค้ด

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` ควรเป็น string `Oliver`

```js
assert(catName === 'Oliver');
```

`quote` ควรเป็น string `Oliver says Meow!`

```js
assert(quote === 'Oliver says Meow!');
```

# --seed--

## --seed-contents--

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

# --solutions--

```js
let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();
```
