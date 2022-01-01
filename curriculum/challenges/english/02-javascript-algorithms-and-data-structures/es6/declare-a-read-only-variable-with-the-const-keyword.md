---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

นอกจากคีย์เวิร์ด `let` แล้ว เราก็ยังมีคีย์เวิร์ด `const` ที่เป็นคีย์เวิร์ดใหม่ใน ES6 ด้วย

`const` นั้นใช้งานคล้ายกับ `let` แต่ตัวแปรที่ประกาศด้วย `const` เป็น read-only ซึ่งหมายความว่าเป็นค่าคงที่และจะไม่สามารถกำหนดค่าให้ใหม่ได้อีก

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

หน้า console จะแสดง error ในจังหวะที่มีการกำหนดค่าใหม่ให้กับตัวแปร `FAV_PET`

จากโค้ดด้านบน จะเห็นได้ว่า ถ้าเรากำหนดค่าใหม่ให้กับตัวแปรที่ประกาศด้วย `const` จะทำให้เกิด error ดังนั้น เราจึงควรประกาศตัวแปรที่ไม่ต้องการกำหนดค่าใหม่ด้วย `const` เสมอ เพื่อให้เรากำหนดค่าใหม่ให้ตัวแปรนี้ไม่ได้ นอกจากนี้ ชื่อตัวแปรที่เป็นค่าคงที่นี้นิยมตั้งชื่อเป็นตัวพิมพ์ใหญ่ทั้งหมด ถ้ามีหลายคำให้คั่นด้วย underscore `(_)`

**หมายเหตุ:** โปรแกรมเมอร์จะนิยมใช้ตัวพิมพ์ใหญ่ทั้งหมดในการตั้งชื่อตัวแปรที่เปลี่ยนแปลงค่าไม่ได้ และใช้ตัวพิมพ์เล็กหรือ camelCase ในการตั้งชื่อตัวแปรที่เปลี่ยนแปลงค่าได้ (object และ array) ในแบบทดสอบต่อไป เราจะได้เห็นตัวอย่างของการใช้ตัวพิมพ์เล็กในการตั้งชื่อตัวแปร array


# --instructions--

จงปรับแก้โค้ดให้ทุกตัวแปรประกาศด้วย `let` หรือ `const` โดยใช้ `let` เมื่อคุณต้องการเปลี่ยนค่าตัวแปร และใช้ `const` เมื่อคุณต้องการให้ค่าตัวแปรมีค่าคงที่ และให้เปลี่ยนชื่อตัวแปรที่ประกาศด้วย `const` ให้เป็นตัวพิมพ์ใหญ่ทั้งหมด

# --hints--

ไม่ควรมี `var` อยู่ในโค้ด

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` ต้องเป็นค่าคงที่ที่ประกาศด้วย `const`

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

ต้องประกาศตัวแปร `i` ด้วย `let`

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

ต้องแก้ `console.log` เพื่อให้แสดงตัวแปร `SENTENCE`

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```
