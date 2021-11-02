---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/)

ในการปรับปรุงประสิทธิภาพ เบราว์เซอร์ส่วนใหญ่จะดึงระเบียน DNS ล่วงหน้าสำหรับลิงก์ในหน้าเพจ ด้วยวิธีนี้ IP ปลายทางจะทราบอยู่แล้วเมื่อผู้ใช้คลิกที่ลิงค์ ซึ่งอาจนำไปสู่การใช้บริการ DNS มากเกินไป (หากคุณเป็นเจ้าของเว็บไซต์ขนาดใหญ่ มีผู้เข้าชมหลายล้านคน…) ปัญหาความเป็นส่วนตัว (ผู้แอบฟังคนหนึ่งอาจอนุมานว่าคุณอยู่ในหน้าเพจใดหน้าเพจหนึ่ง) หรือการเปลี่ยนแปลงสถิติหน้าเพจ (บางลิงก์อาจ ปรากฏว่าเข้าเยี่ยมชมแม้ว่าจะไม่ใช่ก็ตาม) หากคุณมีความต้องการด้านความปลอดภัยสูง คุณสามารถปิดใช้งานการดึงข้อมูล DNS ล่วงหน้าได้ โดยต้องแลกกับประสิทธิภาพที่ลดลง

# --instructions--

ใช้ `helmet.dnsPrefetchControl()` method บนเซิร์ฟเวอร์ของคุณ

# --hints--

helmet.dnsPrefetchControl() middleware ควรถูกติดตั้งอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'dnsPrefetchControl');
      assert.equal(data.headers['x-dns-prefetch-control'], 'off');
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
