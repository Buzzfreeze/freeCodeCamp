---
id: 5cdafbd72913098997531681
title: Handle a Fulfilled Promise with then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

promise จะมีประโยชน์มากๆ ถ้าโค้ดของคุณมีส่วนที่ทำงานโดยไม่รู้ว่าจะใช้เวลาเท่าไหร่ (เช่น การทำงานที่เป็น asynchronous) ซึ่งมักจะเป็นการส่ง request ไปยังเซิร์ฟเวอร์ การส่ง request ไปยังเซิร์ฟเวอร์นั้นจะใช้เวลาพอสมควร ปกติแล้วหลังการส่ง request เสร็จสิ้น เรามักจะต้องทำอะไรบางอย่างกับค่าที่เซิร์ฟเวอร์ส่งกลับมา ซึ่งเราสามารถทำได้โดยใช้ method `then` โดย method `then` จะทำงานทันทีหลังจากที่ promise ของคุณมีการ `resolve` แล้ว ตามตัวอย่างด้านล่าง:

```js
myPromise.then(result => {
  
});
```

`result` มาจาก argument ที่คุณใส่ตอนเรียกใช้ method `resolve`

# --instructions--

ให้ใช้ method `then` ให้กับ promise ของคุณ และใช้ `result` เป็น parameter ของ callback function แล้ว log `result` ที่หน้า console

# --hints--

ต้องใช้ `then` กับ promise

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

method `then` ต้องมี callback function ที่มีพารามิเตอร์เป็น `result`

```js
assert(resultIsParameter);
```

ต้อง log `result` บน console ด้วย

```js
assert(
  resultIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer ถูกตั้งให้เป็น true เพื่อสื่อว่าเซิร์ฟเวอร์ได้คืนค่ามาให้เราอย่างถูกต้อง
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer ถูกตั้งให้เป็น true เพื่อสื่อว่าเซิร์ฟเวอร์ได้คืนค่ามาให้เราอย่างถูกต้อง
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```
