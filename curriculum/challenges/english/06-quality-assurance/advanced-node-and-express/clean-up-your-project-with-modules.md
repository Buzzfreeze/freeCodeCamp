---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--


ตอนนี้โค้ดทั้งหมดที่คุณเขียนอยู่ในไฟล์ `server.js` 
ซึ่งการที่มีโค้ดรวมอยู่ที่เดียวแบบนี้ จะทำให้จัดการโค้ดยาก และเวลาจะเพิ่มเติมอะไรก็จะลำบาก  
ให้สร้างไฟล์ใหม่ 2 ไฟล์ ชื่อ `routes.js` และ `auth.js`

ไฟล์ใหม่ที่สร้างทั้งสองไฟล์ต้องมีโค้ดนี้: 

```js
module.exports = function (app, myDataBase) {

}
```

ตอนนี้ ที่ด้านบนสุดของไฟล์ `server.js` ให้ทำการ require ไฟล์ใหม่ทั้งสองไฟล์ที่เราสร้างไปแบบนี้ `const routes = require('./routes.js');` 
และหลังจากที่สร้างการเชื่อมต่อกับฐานข้อมูลได้สำเร็จ ให้ประกาศใช้ไฟล์ใหม่ที่เรานำเข้ามาแบบนี้ `routes(app, myDataBase)`

สุดท้าย ให้ย้าย route ทั้งหมดในไฟล์ `server.js` ไปไว้ในไฟล์ใหม่ แล้วลบโค้ดเก่าออกจาก `server.js` ให้ย้ายฟังก์ชัน `ensureAuthenticated` ไปด้วย เพราะว่าฟังก์ชันนี้ถูกสร้างมาเพื่อใช้ทำการ route โดยเฉพาะ  
ตอนนี้ คุณจะต้องเพิ่ม dependency ที่ใช้อย่างถูกต้อง เช่น `const passport = require('passport');` ที่ด้านบนสุด เหนือบรรทัด export ในไฟล์ `route.js` ของคุณ

ให้เพิ่ม dependency ในไฟล์ไปจนครบ และเมื่อทำเสร็จ ไฟล์ `server.js` ของคุณจะต้องไม่มีการประกาศ route เหลืออยู่แล้ว (**ยกเว้น route ในบล็อก catch**)!

ตอนนี้ให้ทำเหมือนกับด้านบนในไฟล์ `auth.js` โดยในไฟล์นี้จะเก็บโค้ดที่เกี่ยวข้องกับการ authentication ทั้งหมด เช่น serialization และการตั้งค่า local strategy แล้วลบโค้ดนี้ออกจากไฟล์ `server.js` ด้วย อย่าลืมเพิ่ม dependencies และเรียกใช้ `auth(app, myDataBase)` ที่เดียวกับ `routes(app, myDataBase)`

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92)

# --hints--

ต้องมีการใช้ module

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
        'You should have required your new files'
      );
      assert.match(
        data,
        /client\s*\.db[^]*routes/gi,
        'Your new modules should be called after your connection to the database'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
