---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

ถ้าคุณอัปเดตเว็บไซต์ของคุณ และคุณต้องการให้ผู้ใช้ดาวน์โหลดเวอร์ชันที่ใหม่ที่สุดเสมอ คุณสามารถพยายามปิดใช้งานการแคชบนเบราว์เซอร์บน client ได้  
ซึ่งเราจะใช้ฟังก์ชันนี้ระหว่างเขียนเว็บก็ได้เช่นกัน การแคชจะเพิ่มประสิทธิภาพของหน้าเว็บ ถ้าปิดไว้เว็บของคุณอาจช้าลง ดังนั้นใช้ตัวเลือกนี้เมื่อมีความจำเป็นจริงๆเท่านั้น

# --instructions--

ให้ใช้ method `helmet.noCache()` ในเซิร์ฟเวอร์ของคุณ

# --hints--

ต้องใช้ middleware `helmet.noCache()` อย่างถูกต้อง

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
