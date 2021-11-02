---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/)

HTTP Strict Transport Security (HSTS) เป็นนโยบายความปลอดภัยเว็บที่ช่วยปกป้องเว็บไซต์จากการโจมตี protocol downgrade และ cookie hijacking หากเว็บไซต์ของคุณสามารถเข้าถึงได้ผ่าน HTTPS คุณสามารถขอให้เบราว์เซอร์ของผู้ใช้หลีกเลี่ยงการใช้ HTTP ที่ไม่ปลอดภัย ด้วยการตั้งค่าส่วน header ให้ Strict-Transport-Security โดยที่คุณบอกให้เบราว์เซอร์ใช้ HTTPS สำหรับคำขอในอนาคตในระยะเวลาที่กำหนด สิ่งนี้จะใช้ได้สำหรับคำขอที่มาหลังจากคำขอเริ่มต้น

# --instructions--

กำหนดค่า `helmet.hsts()` เพื่อใช้ HTTPS ในอีก 90 วันข้างหน้า ส่งผ่าน config object `{maxAge: timeInSeconds, force: true}` คุณสามารถสร้างตัวแปร `ninetyDaysInSeconds = 90*24*60*60;` เพื่อใช้สำหรับ `timeInSeconds` Replit ได้เปิดใช้งาน hsts แล้ว หากต้องการเขียนทับการตั้งค่าของมันคุณต้องตั้งค่าฟิลด์ "force" ให้เป็น true ใน config object เราจะสกัดกั้นและกู้คืนส่วนหัวของ Replit หลังจากตรวจสอบเพื่อ test แล้ว


Note: การกำหนดค่า HTTPS บนเว็บไซต์ที่กำหนดเองจำเป็นต้องมีการได้มาซึ่งโดเมน และใบรับรอง SSL/TLS

# --hints--

helmet.hsts() middleware ควรติดตั้งอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

maxAge ควรจะต้องเท่ากับ 7776000 s (90 วัน)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
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
