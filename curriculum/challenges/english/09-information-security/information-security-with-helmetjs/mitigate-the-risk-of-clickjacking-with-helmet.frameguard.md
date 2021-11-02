---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
forumTopicId: 301582
dashedName: mitigate-the-risk-of-clickjacking-with-helmet-frameguard
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec)หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/)

หน้าเว็บของคุณสามารถถูกนำไปใส่ใน `<frame>` หรือ `<iframe>` โดยไม่ต้องได้รับความยินยอมจากคุณ ซึ่งอาจส่งผลให้เกิดการโจมตีแบบ Clickjacking เหนือสิ่งอื่นใด Clickjacking เป็นเทคนิคในการหลอกให้ผู้ใช้โต้ตอบกับหน้าเว็บที่แตกต่างจากที่ผู้ใช้คิด สามารถรับได้จากการรันเว็บเพจของคุณในบริบทที่เป็นอันตราย โดยใช้ iframe ในบริบทนั้น แฮ็กเกอร์สามารถวางเลเยอร์ทับซ่อนอยู่บนเพจของคุณได้ ปุ่มที่ซ่อนอยู่สามารถใช้เพื่อเรียกใช้สคริปต์ที่ไม่ดีได้ middleware นี้ตั้งค่าส่วน X-Frame-Options header มันจะจำกัดผู้ที่สามารถวางเว็บไซต์ของคุณใน frame  ซึ่งมีสามโหมด: DENY, SAMEORIGIN และ ALLOW-FROM

ซึ่งโดยทั่วไปแล้วเราไม่ต้องการให้เว็บเพจของเราได้รับการ frame 

# --instructions--

ให้ใช้ `helmet.frameguard()` ส่งผ่านด้วย configuration object `{action: 'deny'}`

# --hints--

helmet.frameguard() middleware ควรถูกติดตั้งอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(
        data.appStack,
        'frameguard',
        'helmet.frameguard() middleware is not mounted correctly'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

'action' ของ helmet.frameguard() ควรตั้งค่าให้เป็น 'DENY'

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.property(data.headers, 'x-frame-options');
      assert.equal(data.headers['x-frame-options'], 'DENY');
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
