---
id: 5cdafbe72913098997531682
title: Handle a Rejected Promise with catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

method `catch` ใช้เมื่อ promise ของคุณถูก reject ซึ่งจะทำงานทันทีหลังจาก method `reject` ของ promise ถูกเรียกใช้ 
นี่คือ syntax:

```js
myPromise.catch(error => {
  
});
```

`error` เป็น argument ที่ถูกส่งไปยัง method `reject`

# --instructions--

จงเพิ่ม method `catch` ให้กับ promise ของคุณ โดยใช้ `error` เป็นพารามิเตอร์ของ callback function แล้ว log `error` ไปยังหน้า console

# --hints--

คุณควรเรียกใช้ method `catch` กับ promise

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

method `catch` ของคุณมี callback function ที่มี `error` เป็นพารามิเตอร์

```js
assert(errorIsParameter);
```

คุณควร log `error` ไปยังหน้า console

```js
assert(
  errorIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.catch\(.*?error.*?console.log\(error\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
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

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```
