---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--


ตอนนี้ ทุกสิ่งที่คุณมีอยู่ในไฟล์ `server.js` ซึ่งอาจนำไปสู่การจัดการ code ที่ยากซึ่งขยายได้ไม่มากนัก สร้าง 2 ไฟล์ใหม่: `routes.js` และ `auth.js`

ทั้งสองควรเริ่มต้นด้วย code ต่อไปนี้: 

```js
module.exports = function (app, myDataBase) {

}
```

ตอนนี้ ที่ด้านบนสุดของไฟล์เซิร์ฟเวอร์ของคุณ ต้องการไฟล์: `const routes = require('./routes.js');` หลังจากที่สร้างการเชื่อมต่อกับฐานข้อมูลได้สำเร็จ ให้ยกตัวอย่างเช่น: `routes(app, myDataBase)`

สุดท้าย ใช้ route ทั้งหมดในเซิร์ฟเวอร์ของผู้เรียน แล้ววางลงในไฟล์ใหม่ของผู้เรียนเอง แล้วลบออกจากไฟล์เซิร์ฟเวอร์ ใช้ฟังก์ชัน `ensureAuthenticated` ด้วย เนื่องจากถูกสร้างขึ้นสำหรับการกำหนด route โดยเฉพาะ ตอนนี้ คุณจะต้องเพิ่ม dependencies ที่ใช้อย่างถูกต้อง เช่น `const passport = require('passport');` ที่ด้านบนสุด เหนือบรรทัดการส่งออกในไฟล์ `route.js` ของคุณ

เพิ่มไปเรื่อยๆ จนกว่าจะไม่มีข้อผิดพลาด และไฟล์เซิร์ฟเวอร์ของคุณไม่มีการกำหนด route อีกต่อไป (**ยกเว้น route ในบล็อก catch**)!

ตอนนี้ทำสิ่งเดียวกันในไฟล์ auth.js กับทุกสิ่งที่เกี่ยวข้องกับการรับรองความถูกต้อง เช่น การทำให้เป็น serialization และการตั้งค่า local strategy ในเครื่อง แล้วลบออกจากไฟล์เซิร์ฟเวอร์ของคุณ อย่าลืมเพิ่ม dependencies และเรียก `auth(app, myDataBase)` ในเซิร์ฟเวอร์ในจุดเดียวกัน

ส่งเพจของคุณเมื่อคุณคิดว่าคุณทำถูกต้องแล้ว หากพบข้อผิดพลาด ดูตัวอย่างโครงการที่เสร็จสมบูรณ์ได้ [here](https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92)

# --hints--

ควรมี Module แสดงออกมา

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
