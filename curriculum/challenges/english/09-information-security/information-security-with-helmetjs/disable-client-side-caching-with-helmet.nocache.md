---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/)

หากคุณกำลังปล่อยการอัปเดตสำหรับเว็บไซต์ของคุณ และคุณต้องการให้ผู้ใช้ดาวน์โหลดเวอร์ชันที่ใหม่กว่าเสมอ คุณสามารถ (ลอง) ปิดใช้งานการแคชบนเบราว์เซอร์ของ client ได้ กรณีนี้ก็สามารถเป็นประโยชน์ในการพัฒนาได้เช่นกัน การแคชมีประโยชน์ด้านประสิทธิภาพ ซึ่งคุณจะเสียมันไป ดังนั้นใช้ตัวเลือกนี้เมื่อมีความจำเป็นจริงเท่านั้น

# --instructions--

ให้ใช้ `helmet.noCache()` method บนเซิร์ฟเวอร์ของคุณ
Use the `helmet.noCache()` method on your server.

# --hints--

helmet.noCache() middleware ควรถูกติดตั้งอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nocache');
      assert.equal(
        data.headers['cache-control'],
        'no-store, no-cache, must-revalidate, proxy-revalidate'
      );
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
