---
id: 5cdafbe72913098997531682
title: Handle a Rejected Promise with catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

เราจะใช้ method `catch` ใช้เมื่อ promise ของคุณถูก reject ซึ่งจะทำงานทันทีหลังจาก method `reject` ของ promise ถูกเรียกใช้ 
ตัวอย่างนี้จะแสดง syntax ของ method `catch`:

```js
myPromise.catch(error => {
  
});
```

`error` มาจาก argument ที่คุณใส่ตอนเรียกใช้ method `reject`

# --instructions--

จงเพิ่ม method `catch` ให้กับ promise ของคุณ โดยใช้ `error` เป็นพารามิเตอร์ของ callback function แล้ว log `error` ไปยังหน้า console

# --hints--

ต้องใช้ `catch` กับ promise

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

method `catch` ต้องมี callback function ที่มีพารามิเตอร์เป็น `error`

```js
assert(errorIsParameter);
```

ต้อง log `error` บน console ด้วย

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
  // responseFromServer ถูกตั้งให้เป็น false เพื่อสื่อว่าเซิร์ฟเวอร์ไม่สามารถคืนค่ามาให้เราได้อย่างถูกต้อง
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
  // responseFromServer ถูกตั้งให้เป็น false เพื่อสื่อว่าเซิร์ฟเวอร์ไม่สามารถคืนค่ามาให้เราได้อย่างถูกต้อง
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
