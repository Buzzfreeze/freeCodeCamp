---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

แฮกเกอร์สามารถใช้ประโยชน์จากช่องโหว่ของ Express/Node ถ้าเขารู้ว่าเว็บของคุณใช้งาน Express อยู่ ซึ่งทุกคำขอที่มาจาก Express จะมี header `X-Powered-By: Express` นี้เป็นค่าเริ่มต้น ให้ใช้ middleware `helmet.hidePoweredBy()` เพื่อลบ header `X-Powered-By` ออก

# --hints--

ต้องใช้ middleware `helmet.hidePoweredBy()` อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hidePoweredBy');
      assert.notEqual(data.headers['x-powered-by'], 'Express');
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
