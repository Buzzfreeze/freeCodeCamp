---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)
เบราว์เซอร์สามารถใช้ content sniffing หรือ MIME sniffing เพื่อเปลี่ยน header `Content-Type` ของ response เป็น implicit content type แทน
ถึงแม้ว่าฟีเจอร์นี้จะใช้ได้ในบางกรณี แต่ก็สามารถนำไปสู่การโจมตีที่เป็นอันตรายได้เช่นกัน 
middleware ที่จะเรียนนี้จะใช้ตั้งค่า header X-Content-Type-Options เป็น `nosniff` เพื่อให้เบราว์เซอร์ใช้ `Content-Type` ที่ให้มา

# --instructions--

ให้ใช้ method `helmet.noSniff()` ในเซิร์ฟเวอร์ของคุณ

# --hints--

ต้องใช้ middleware `helmet.noSniff()` อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
