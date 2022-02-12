---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

HTTP Strict Transport Security (HSTS) เป็นนโยบายความปลอดภัยเว็บที่ช่วยปกป้องเว็บไซต์จากการโจมตีแบบ protocol downgrade และ cookie hijacking 
ถ้าเว็บไซต์ของคุณสามารถเข้าถึงได้โดยใช้ HTTPS คุณสามารถขอให้เบราว์เซอร์ของผู้ใช้หลีกเลี่ยงการใช้ HTTP ที่ไม่ปลอดภัยได้
โดยการตั้งค่า header Strict-Transport-Security  
header นี้จะเป็นการบอกให้เบราว์เซอร์ใช้ HTTPS สำหรับคำขอในอนาคตในช่วงระยะเวลาที่กำหนด 
ซึ่งจะใช้ได้หลังจากส่ง request แรกไปแล้ว

# --instructions--

กำหนดค่า `helmet.hsts()` เพื่อให้ใช้ HTTPS ไปอีก 90 วัน 
โดยการส่ง config object ที่มีค่าเป็น `{maxAge: timeInSeconds, force: true}` เข้าไปในฟังก์ชัน
คุณสามารถสร้างตัวแปร `ninetyDaysInSeconds = 90*24*60*60;` เพื่อใช้สำหรับคำนวณ `timeInSeconds` ได้ 
ถ้าคุณใช้ Replit แล้ว header hsts จะถูกเปิดใช้งานอยู่แล้ว หากต้องการเขียนทับการตั้งค่าเดิม คุณต้องตั้งค่าฟิลด์ "force" ให้เป็น true ใน config object 


Note: ในการใช้ HTTPS บนเว็บไซต์ของคุณเอง คุณจะจำเป็นต้องมีโดเมน และ SSL/TLS Certificate

# --hints--

ต้องใช้ middleware `helmet.hsts()` อย่างถูกต้อง

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

maxAge ต้องมีค่าเป็น 7776000 วินาที (90 วัน)

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
