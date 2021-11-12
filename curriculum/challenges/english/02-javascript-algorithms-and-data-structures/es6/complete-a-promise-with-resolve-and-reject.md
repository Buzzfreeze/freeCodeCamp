---
id: 5cdafbc32913098997531680
title: Complete a Promise with resolve and reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

promise มีสามสถานะ `pending`, `fulfilled` และ `rejected` promise ที่คุณสร้างไปในบทที่แล้วจะติดอยู่ในสถานะ `pending` เพราะคุณยังไม่ได้ทำให้ promise สมบูรณ์ พารามิเตอร์ `resolve` และ `reject` ที่ให้เป็น argument ของ promise จะถูกใช้ดังนี้ `resolve` จะถุกใช้เมื่อคุณต้องการให้ promise ของคุณสำเร็จ และ `reject` จะถูกใช้เมื่อคุณต้องการให้มัน fail โดย method เหล่านี้รับค่า argument ดังที่แสดงด้านล่าง

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

ตัวอย่างข้างต้นใช้ strings เป็น argument ให้กับฟังก์ชันเหล่านี้ แต่จริงๆ แล้วมันสามารถเป็นอะไรก็ได้ บ่อยครั้ง อาจเป็น object ที่คุณดึงข้อมูล มาวางบนเว็บไซต์ของคุณหรือที่อื่นๆ

# --instructions--


จงสร้าง promise เพื่อจัดการ success และ failure ถ้า `responseFromServer` เป็น `true` ให้เรียก method `resolve` เพื่อทำตาม promise ให้สำเร็จ แล้วนำ string ที่มีค่า `We got the data` ส่งเข้าไปใน `resolve` แต่หาก `responseFromServer` เป็น `false` ให้ใช้ method `reject` แทนและส่ง string : `Data not received` เข้าไป

# --hints--

`resolve` ควรถูกเรียกด้วย string ที่กำหนดไว้ เมื่อเงื่อนไข `if` เป็น `true`

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` ควรถูกเรียกด้วย string ที่กำหนดไว้ เมื่อเงื่อนไข `if` เป็น `false`

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
