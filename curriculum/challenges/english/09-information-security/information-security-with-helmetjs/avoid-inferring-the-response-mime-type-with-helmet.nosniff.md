---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) เบราว์เซอร์สามารถใช้ content หรือ MIME sniffing เพื่อแทนที่การตอบสนอง `Content-Type` header เพื่อคาดเดาและประมวลผลข้อมูลโดยใช้ implicit content type แม้ว่าสิ่งนี้จะสะดวกในบางสถานการณ์ แต่ก็สามารถนำไปสู่การโจมตีที่เป็นอันตรายได้เช่นกัน middleware นี้ตั้งค่า X-Content-Type-Options header เป็น `nosniff` โดยสั่งให้เบราว์เซอร์ไม่ข้าม `Content-Type` ที่ให้มา

# --instructions--

ให้ใช้ `helmet.noSniff()` method บนเวิร์ฟเวอร์ของคุณ

# --hints--

helmet.noSniff() middleware ควรถูกติดตั้งอย่างถูกต้อง

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
