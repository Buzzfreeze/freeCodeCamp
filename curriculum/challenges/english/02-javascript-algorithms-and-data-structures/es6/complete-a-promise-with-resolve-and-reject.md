---
id: 5cdafbc32913098997531680
title: Complete a Promise with resolve and reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

promise นั้นมีสามสถานะ `pending`, `fulfilled` และ `rejected`  
promise ที่คุณสร้างไปในบทที่แล้วจะอยู่ในสถานะ `pending` เพราะคุณยังไม่ได้ทำให้ promise เสร็จสิ้น  
พารามิเตอร์ `resolve` และ `reject` ที่ให้เป็น argument ของ promise จะถูกใช้ตามนี้  
เราจะใช้ `resolve` ถ้าต้องการให้ promise สำเร็จ และใช้ `reject` ถ้าต้องการให้ promise นั้นล้มเหลว  
โดย method สองตัวนี้จะรับค่า argument ตามตัวอย่างด้านล่าง:

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

ตัวอย่างด้านบนใช้ string เป็น argument ให้กับฟังก์ชันสองตัวนี้ แต่จริงๆแล้วจะเป็นอะไรก็ได้ หลายๆครั้งจะใช้ object ที่คุณดึงข้อมูลมาใช้บนเว็บไซต์ของคุณหรือดึงมาใช้ที่อื่น

# --instructions--


ให้ promise จัดการว่า promise จะสำเร็จหรือล้มเหลว 
ถ้า `responseFromServer` เป็น `true` ให้เรียกใช้ method `resolve` เพื่อทำ promise ให้สำเร็จ โดยส่งค่า string `We got the data` เข้าไปใน `resolve` 
แต่หาก `responseFromServer` เป็น `false` ให้ใช้ method `reject` แทนและส่ง string `Data not received` เข้าไปใน `reject`

# --hints--

ต้องเรียกใช้ `resolve` ด้วย string ที่กำหนดให้ เมื่อเงื่อนไข `if` เป็น `true`

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

ต้องเรียกใช้ `reject` ด้วย string ที่กำหนดให้ เมื่อเงื่อนไข `if` เป็น `false`

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // ตัวแปร responseFromServer นั้นเป็นค่าที่ server ส่งกลับมาให้
  let responseFromServer;
    
  if(responseFromServer) {
    // แก้ไขบรรทัดนี้
  } else {  
    // แก้ไขบรรทัดนี้
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // ตัวแปร responseFromServer นั้นเป็นค่าที่ server ส่งกลับมาให้
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
