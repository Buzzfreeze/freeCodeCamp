---
id: 5cdafbb0291309899753167f
title: Create a JavaScript Promise
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

promise ใน JavaScript เป็นสิ่งที่คุณใช้ในการทำบางสิ่งบางอย่างที่มักเกิดขึ้นไม่พร้อมกัน เมื่องานเสร็จสิ้น คุณอาจจะทำตามสัญญาหรือไม่ก็ได้ `Promise` เป็นฟังก์ชัน constructor ดังนั้นคุณต้องใช้ keyword `new` เพื่อสร้าง โดยจะใช้ฟังก์ชันเป็น argument โดยมีพารามิเตอร์สองตัวคือ `resolve` และ `reject`ซึ่ง method เหล่านี้ใช้ในการกำหนดผลลัพธ์ของ promise โดย syntax มีลักษณะดังนี้:


```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

จงสร้าง promise ใหม่ชื่อ `makeServerRequest` แล้วส่งผ่านฟังก์ชันด้วยพารามิเตอร์ `resolve` และ `reject` ไปยัง Constructor



# --hints--

คุณควรกำหนดค่า promise ให้กับตัวแปรที่ประกาศด้วยชื่อ `makeServerRequest`

```js
assert(makeServerRequest instanceof Promise);
```

promise ของคุณควรรับ function ที่มี `resolve` และ `reject` เป็นพารามิเตอร์   

```js
assert(
  code.match(
    /Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
