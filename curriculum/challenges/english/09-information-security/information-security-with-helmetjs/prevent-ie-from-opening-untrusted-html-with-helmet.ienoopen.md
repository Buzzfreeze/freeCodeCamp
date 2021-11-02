---
id: 587d8248367417b2b2512c3b
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/).

เว็บแอปพลิเคชันบางตัวจะแสดง HTML ที่ไม่น่าเชื่อถือสำหรับการดาวน์โหลด ตามค่าเริ่มต้น Internet Explorer บางรุ่นจะเปิดไฟล์ HTML เหล่านั้นในแวดล้อมของไซต์ของคุณ ซึ่งหมายความว่าหน้า HTML ที่ไม่น่าเชื่อถือสามารถเริ่มทำสิ่งเลวร้ายในแวดล้อมของหน้าเว็บของคุณได้ middleware นี้จะตั้งค่า X-Download-Options header เป็น noopen ซึ่งจะป้องกันไม่ให้ผู้ใช้ IE ดำเนินการดาวน์โหลดในแวดล้อมของไซต์ที่เชื่อถือได้

# --instructions--

ให้ใช้ `helmet.ieNoOpen()` method บนเซิร์ฟเวอร์ของคุณ

# --hints--

helmet.ieNoOpen() middleware ควรถูกติดตั้งอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'ienoopen');
      assert.equal(data.headers['x-download-options'], 'noopen');
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
