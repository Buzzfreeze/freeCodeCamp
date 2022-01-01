---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

ปัญหาสำคัญเมื่อประกาศตัวแปรด้วยคีย์เวิร์ด `var` ก็คือ คุณสามารถประกาศตัวแปรทับกันได้โดยที่จะไม่เกิด error ขึ้น

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

จากโค้ดด้านบน คุณจะเห็นได้ว่า ตัวแปร `camper` มีการกำหนดค่าเป็น `James` ก่อน จากนั้นก็ถูกแทนที่ค่าด้วย `David` แล้วหน้า console จึงแสดง string `David` ออกมา

ซึ่งถ้าเป็นแอปเล็กๆ คุณอาจไม่เจอปัญหานี้ แต่หากเป็นแอปที่ใหญ่ขึ้นมา เมื่อคุณมีโค้ดที่เยอะและยาวขึ้นคุณอาจเผลอไปแทนที่ค่าตัวแปรโดยไม่ตั้งใจ เนื่องจากการใช้ `var` ประกาศตัวแปรซ้ำนั้นไม่ได้ทำให้เกิด error ขึ้น ทำให้การค้นหาและแก้ไขบัคก็ทำได้ยากมากขึ้น 

แต่ ES6 ก็มี `let` ซึ่งเป็นคีย์เวิร์ดใหม่ในที่จะช่วยแก้ปัญหานี้ได้ ถ้าคุณเปลี่ยนไปใช้ `let` แทน `var` ในการประกาศตัวแปรในโค้ดด้านบน ก็จะเกิด error ขึ้นมา 
(คุณจะได้เรียนรู้เกี่ยวกับฟีเจอร์อื่นๆ ของ ES6 ในบทเรียนอื่นไปในภายหลัง)

```js
let camper = 'James';
let camper = 'David';
```

เราจะเห็น error นี้ใน console ของ browser

ถ้า `let` เราจะประกาศตัวแปรที่ชื่อเหมือนกันได้เพียงครั้งเดียวซึ่งไม่เหมือนกับ `var` 
นอกจากนี้ยังมี `"use strict"` ที่เปิด Strict Mode เพื่อตรวจสอบความผิดพลาดของโค้ดและคำสั่งที่ไม่ปลอดภัย (unsafe action) ได้ เช่น:

```js
"use strict";
x = 3.14;
```

ตัวอย่างนี้จะแสดง error `x is not defined`

# --instructions--

จงปรับแก้โค้ดให้ใช้แค่คีย์เวิร์ด `let`

# --hints--

ห้ามใช้ `var` ในโค้ด

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` ต้องเป็น string ซึ่งมีค่าเป็น `Oliver`

```js
assert(catName === 'Oliver');
```

`quote` ต้องเป็น string ซึ่งมีค่าเป็น `Oliver says Meow!`

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
