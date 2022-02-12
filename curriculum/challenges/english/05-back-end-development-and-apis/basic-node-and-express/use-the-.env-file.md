---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

ไฟล์ `.env` เป็นไฟล์ที่จะซ่อนอยู่ ซึงจะใช้เก็บ environment variable ของแอปของคุณ 
ไฟล์ `.env` นี้จะไม่มีใครสามารถเข้าถึงได้นอกจากตัวคุณเอง และซึ่งไฟล์นี้จะใช้เก็บข้อมูลที่คุณต้องการซ่อนไม่ให้คนอื่นเห็นด้วย เช่น ใช้เก็บ API key ที่ใช้เชื่อมต่อกับบริการภายนอก หรือเก็บ URI ของฐานข้อมูลของคุณ 
แล้วยังใช้เก็บการตั้งค่าแอปของคุณได้ด้วย ซึ่งถ้าใช้เก็บการตั้งค่า คุณจะเปลี่ยนแปลงการทำงานของแอปโดยที่ไม่ต้องเขียนโค้ดใหม่ได้ คุณแค่ต้องแก้ไฟล์นี้แล้วรันโค้ดใหม่เท่านั้นเอง


การอ่านค่าของ environment variable จะทำได้โดยใช้ `process.env.VAR_NAME`  
โดย object `process.env` เป็น object ของ Node และค่าที่อ่านได้จะเป็น string 
โดยปกติแล้ว ชื่อตัวแปรจะเป็นตัวพิมพ์ใหญ่ทั้งหมดและคั่นด้วย underscore (`_`) 

ไฟล์ `.env` เป็นไฟล์ shell คุณจึงไม่จำเป็นต้องใส่ตัวแปรหรือค่าของตัวแปรนั้นไว้ในเครื่องหมาย quote (`""` หรือ `''`)แต่สิ่งสำคัญที่ควรรู้คือ ต้องไม่มีการเว้นวรรคหน้าหรือหลังหมายเท่ากับ เมื่อคุณกำหนดค่าให้กับตัวแปร เช่น `VAR_NAME=value` 
โดยปกติแล้ว เราจะเขียนตัวแปรแต่ละตัวแยกบรรทัดกัน

# --instructions--

มาลองใส่การตั้งค่าแอปไว้ใน environmental variable กัน!

ให้สร้างไฟล์ `.env` ที่โฟล์เดอร์ชั้นนอกสุดของแอปคุณ (อยู่ในโฟลเดอร์เดียวกับ `myApp.js`) แล้วสร้างตัวแปร `MESSAGE_STYLE=uppercase`

จากนั้น ใน route handler ของ `/json` ที่คุณสร้างไว้ในแบบทดสอบที่แล้ว 
ให้ดูว่าถ้า `process.env.MESSAGE_STYLE` มีค่าเป็น `uppercase` ให้แปลงข้อความใน response object เป็นตัวพิมพ์ใหญ่  
โดย response object จะเป็น `{"message": "Hello json"}` หรือ `{"message": "HELLO JSON"}` ขึ้นอยู่กับค่าของ `MESSAGE_STYLE`

**Note:** ถ้าคุณใช้ Replit คุณจะไม่สามารถสร้างไฟล์ `.env` ได้ ให้สร้าง tab <dfn>SECRETS</dfn> เพื่อเพิ่มตัวแปรแทน

ถ้าคุณเขียนโค้ดบนเครื่องตัวเอง คุณจำเป็นต้องใช้ package `dotenv` ที่จะนำตัวแปลจากไฟล์ `.env` ไปเก็บลงใน `process.env` ให้
คุณจะติดตั้ง package นี้ได้โดยใช้คำสั่ง `npm install dotenv` 
จากนั้นที่บรรทัดแรกของไฟล์ `myApp.js` ให้เรียกใช้คำสั่ง `require('dotenv').config()`

# --hints--

การตอบสนองจุดปลายทาง `/json` ควรเปลี่ยนตามตัวแปรสภาพแวดล้อม `MESSAGE_STYLE`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
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
