---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

นอกจากคีย์เวิร์ด `let` แล้ว ก็ยังมีคีย์เวิร์ด `const` ที่เป็นคีย์เวิร์ดใหม่ใน ES6 

`const` มีฟีเจอร์เหมือนกับ `let` แต่ตัวแปรที่ประกาศด้วย `const` เป็น read-only หรือพูดอีกนัยหนึ่งว่า เป็นค่าคงที่และไม่สามารถกำหนดค่าใหม่ได้อีก

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

หน้า console จะแสดง error เนื่องจากมีการกำหนดค่าใหม่ให้กับตัวแปร `FAV_PET`

จากข้างต้น คุณจะเห็นว่า การกำหนดค่าให้กับตัวแปรที่ประกาศด้วย `const` ทำให้เกิด error ดังนั้น คุณควรประกาศตัวแปรที่คุณไม่ต้องการกำหนดค่าใหม่ด้วยคีย์เวิร์ด `const` เสมอ เพื่อว่าเวลาที่คุณเผลอกำหนดค่าใหม่ให้กับตัวแปรจะได้ทำไม่ได้ นอกจากนี้ ชื่อตัวแปรที่เป็นค่าคงที่นี้นิยมกำหนดเป็นตัวพิมพ์ใหญ่ทั้งหมด หากมีหลายคำให้คั่นด้วย underscore (_)

**หมายเหตุ:** เป็นเรื่องปกติที่นักพัฒนาจะใช้ตัวพิมพ์ใหญ่ทั้งหมดในการตั้งชื่อตัวแปรที่เปลี่ยนแปลงค่าไม่ได้ และใช้ตัวพิมพ์เล็กหรือ camelCase ในการตั้งชื่อตัวแปรที่เปลี่ยนแปลงค่าได้ (objects และ arrays) สำหรับแบบทดสอบต่อจากนี้ คุณจะได้เห็นตัวอย่างของการใช้ตัวพิมพ์เล็กในการตั้งชื่อตัวแปร array 


# --instructions--

จงปรับแก้โค้ด เพื่อให้ทุกตัวแปรประกาศด้วย `let` หรือ `const` โดยใช้ `let` เมื่อคุณต้องการเปลี่ยนค่าตัวแปร และใช้ `const` เมื่อคุณต้องการให้ค่าตัวแปรคงที่ไม่เปลี่ยนแปลง นอกจากนี้ ให้เปลี่ยนชื่อตัวแปรที่ประกาศด้วย `const` ให้เป็นไปตามแนวปฎิบัติโดยทั่วไป นั่นคือ ทำให้ตัวแปรค่าคงที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

# --hints--

`var` ไม่ควรมีอยู่ในโค้ด

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` ควรเป็นตัวแปรค่าคงที่ที่ประกาศด้วย `const`

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i` ควรประกาศด้วย `let`

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` ควรปรับเปลี่ยนเพื่อพิมพ์ตัวแปร `SENTENCE`

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

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
