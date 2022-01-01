---
id: 5cdafbb0291309899753167f
title: Create a JavaScript Promise
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

promise ใน JavaScript นั้นมีความหมายตรงตามตัวเลย คือใช้เพื่อสัญญา (promise) ว่าจะทำอะไรบางอย่าง ซึ่งปกติสิ่งที่สัญญามักเป็นการทำงานแบบ asynchronous และเมื่องานเสร็จสิ้น คุณจะทำหรือไม่ทำตามสัญญาก็ได้ 
`promise` นั้นเป็นฟังก์ชัน constructor ดังนั้นคุณต้องใช้ keyword `new` เพื่อสร้าง โดย `promise` จะรับฟังก์ชันที่มีพารามิเตอร์สองตัวคือ `resolve` และ `reject` ซึ่งเป็น method ที่ใช้กำหนดผลลัพธ์ของ promise 
`promise` จะมี syntax ตามนี้:


```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

จงสร้าง promise ใหม่ชื่อ `makeServerRequest` แล้วส่งฟังก์ชันที่มีพารามิเตอร์สองตัวชื่อ `resolve` และ `reject` เข้าไปใน Constructor



# --hints--

คุณควรกำหนดค่า promise ให้กับตัวแปรที่ชื่อ `makeServerRequest`

```js
assert(makeServerRequest instanceof Promise);
```

promise ของคุณควรรับฟังก์ชันที่มีพารามิเตอร์เป็น `resolve` และ `reject`    

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
