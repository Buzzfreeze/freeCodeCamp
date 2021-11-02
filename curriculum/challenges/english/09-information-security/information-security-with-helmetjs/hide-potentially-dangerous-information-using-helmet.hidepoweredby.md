---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/)

แฮกเกอร์สามารถใช้ประโยชน์จากช่องโหว่ที่ทราบใน Express/Node หากพบว่าไซต์ของคุณขับเคลื่อนโดย Express `X-Powered-By: Express` จะถูกส่งไปในทุกคำขอที่มาจาก Express โดยค่าเริ่มต้น ใช้ `helmet.hidePoweredBy()` middleware เพื่อลบ X-Powered-By header

# --hints--

helmet.hidePoweredBy() middleware ควรถูกติดตั้งอย่างถูกต้อง

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
