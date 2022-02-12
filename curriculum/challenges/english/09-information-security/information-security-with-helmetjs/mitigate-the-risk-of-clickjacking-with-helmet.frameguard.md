---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
forumTopicId: 301582
dashedName: mitigate-the-risk-of-clickjacking-with-helmet-frameguard
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

หน้าเว็บของคุณสามารถถูกนำไปใส่ใน `<frame>` หรือ `<iframe>` ได้โดยไม่ต้องได้รับความยินยอมจากคุณ ซึ่งอาจส่งผลให้เกิดการโจมตีแบบ Clickjacking และการโจมตีในรูปแบบอื่นๆ 

Clickjacking เป็นเทคนิคในการหลอกให้ผู้ใช้โต้ตอบกับหน้าเว็บที่เป็นคนละเว็บกับที่ผู้ใช้คิด 
วิธีนี้จะทำให้แฮคเกอร์สามารถนำเว็บของคุณไปใช้แบบอันตรายได้ โดยการใช้ iframe 
ซึ่งถ้าใช้วิธีนี้แฮ็กเกอร์สามารถวางเลเยอร์ซ้อนอยู่บนเพจของคุณโดยที่ผู้ใช้ไม่เห็นได้  
หรืออาจซ่อนปุ่มเพื่อเรียกใช้สคริปต์ที่อันตรายได้ 
middleware นี้จะตั้งค่า header ส่วน X-Frame-Options ซึ่งจะจำกัดว่าใครจะสามารถวางเว็บของคุณไว้ใน frame ได้บ้าง 
header ตัวนี้มีสามโหมด คือ DENY, SAMEORIGIN และ ALLOW-FROM

ซึ่งโดยทั่วไปแล้วเราไม่ต้องการให้เว็บของเราถูกนำไปใช้ใน frame ได้

# --instructions--

ให้ใช้ `helmet.frameguard()` โดยส่ง configuration object `{action: 'deny'}` เข้าไป

# --hints--

ต้องใช้ middleware `helmet.frameguard()` อย่างถูกต้อง

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

ต้องตั้งค่า 'action' ของ helmet.frameguard() ให้เป็น 'DENY'

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
