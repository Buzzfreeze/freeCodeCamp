---
id: 5cdafbd72913098997531681
title: Handle a Fulfilled Promise with then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Promise มีประโยชน์มาก เมื่อคุณมีกระบวนการที่ไม่ทราบว่าต้องใช้เวลานานเท่าใดในโค้ดของคุณ (เช่น บางอย่างที่เป็น asynchronous) ซึ่งมักจะเป็น server request (คำขอเซิร์ฟเวอร์) เมื่อคุณส่ง server request อาจใช้เวลาพอสมควร และหลังจากเสร็จสิ้น คุณมักต้องการให้ทำอะไรบางอย่างหลังจากได้รับการตอบสนองจากเซิร์ฟเวอร์ ซึ่งสิ่งเหล่านี้สามารถทำได้โดยใช้ method `then` โดย method `then` จะรันทันทีหลังจากที่ promise ของคุณมีการ `resolve` แล้ว นี่คือตัวอย่าง:

```js
myPromise.then(result => {
  
});
```

`result` มาจาก argument ที่กำหนดให้กับ method `resolve`

# --instructions--

จงเพิ่ม `then` method ให้กับ promise ของคุณ และใช้ `result` เป็น parameter ของ callback function แล้ว log `result` ที่หน้า console

# --hints--

คุณควรเรียกใช้ method `then` กับ promise

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

method `then` ควรมี callback function โดยมี `result` เป็นพารามิเตอร์

```js
assert(resultIsParameter);
```

คุณควร log `result` ไปยังหน้า console

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
  // responseFromServer is set to true to represent a successful response from a server
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
  // responseFromServer is set to true to represent a successful response from a server
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
