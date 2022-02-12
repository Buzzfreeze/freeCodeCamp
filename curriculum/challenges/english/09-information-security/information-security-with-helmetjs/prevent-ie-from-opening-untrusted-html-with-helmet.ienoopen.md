---
id: 587d8248367417b2b2512c3b
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

Internet Explorer บางรุ่นจะเปิดไฟล์ HTML โดยใช้สภาพแวดล้อมของไซต์ของคุณได้ ซึ่งหมายความว่าหน้า HTML นี้จะเข้าถึงค่าต่างๆในภาพแวดล้อมของเว็บของคุณได้ (เช่น cookie)  
middleware ที่เราจะใช้นี้จะตั้งค่า header X-Download-Options เป็น noopen ซึ่งจะป้องกันไม่ให้ผู้ใช้ IE เปิดไฟล์ HTML ในสภาพแวดล้อมของไซต์อื่นได้

# --instructions--

ให้ใช้ method `helmet.ieNoOpen()` ในเซิร์ฟเวอร์ของคุณ

# --hints--

ต้องใช้ middleware `helmet.ieNoOpen()` อย่างถูกต้อง

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
