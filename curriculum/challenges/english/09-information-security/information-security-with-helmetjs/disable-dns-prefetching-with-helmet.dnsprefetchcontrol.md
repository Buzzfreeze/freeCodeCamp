---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

เบราว์เซอร์ส่วนใหญ่จะดึงข้อมูล DNS ของลิงก์ในหน้าเพจล่วงหน้า เพื่อให้ทำงานได้เร็ว โดยจะทำให้เบราว์เซอร์รู้ว่าจะต้องพาผู้ใช้ไปที่ IP ไหน ตั้งแต่ก่อนที่ผู้ใช้จะคลิกลิงค์ 
ซึ่งอาจนำไปสู่การใช้บริการ DNS มากเกินไป (หากคุณเป็นเจ้าของเว็บไซต์ขนาดใหญ่ มีผู้เข้าชมหลายล้านคน) ปัญหาความเป็นส่วนตัว (ผู้แอบฟังคนหนึ่งอาจเดาได้ว่าคุณอยู่ในหน้าไหน) หรือการเปลี่ยนแปลงสถิติหน้าเพจ (บางลิงก์อาจขึ้นว่าเข้าชมแล้ว ทั้งๆที่ยังไม่เคยเข้า)  
ถ้าคุณต้องการความปลอดภัยที่สูงขึ้น คุณสามารถปิดใช้งานการดึงข้อมูล DNS ล่วงหน้าได้ โดยต้องแลกกับประสิทธิภาพที่ลดลง

# --instructions--

ให้ใช้ method `helmet.dnsPrefetchControl()` ในเซิร์ฟเวอร์ของคุณ

# --hints--

ต้องใช้ middleware `helmet.dnsPrefetchControl()` อย่างถูกต้อง

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
