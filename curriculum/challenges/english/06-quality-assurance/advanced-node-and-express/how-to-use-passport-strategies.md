---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--


ในไฟล์ `index.pug' ที่ให้มา มีแบบฟอร์มการเข้าสู่ระบบอยู่จริง ก่อนหน้านี้มันถูกซ่อนไว้เนื่องจาก inline  JavaScript `ถ้า showLogin' โดยมีรูปแบบเยื้องหลังจากนั้น ก่อน `showLogin' เป็นตัวแปรไม่เคยถูกกำหนด ดังนั้นจึงไม่เคยแสดงบล็อกโค้ดที่มีแบบฟอร์ม ไปข้างหน้าและใน `res.render' สำหรับหน้านั้นให้เพิ่มตัวแปรใหม่ให้กับวัตถุ `showLogin: true` เมื่อรีเฟรชหน้า ควรเห็นแบบฟอร์ม! แบบฟอร์มนี้ตั้งค่าเป็น **POST** บน `/login' ดังนั้นนี่คือที่ที่เราควรตั้งค่าให้ยอมรับ POST และรับรองความถูกต้องของผู้ใช้

สำหรับ challenge นี้ ควรเพิ่มเส้นทาง `/เข้าสู่ระบบ' เพื่อยอมรับคำขอ POST ในการตรวจสอบสิทธิ์บนเส้นทางนี้ คุณต้องเพิ่มมิดเดิลแวร์ก่อนที่จะส่งการตอบกลับ สิ่งนี้ทำได้โดยเพียงแค่ส่งอาร์กิวเมนต์อื่นกับมิดเดิลแวร์ก่อน `function(req,res)` พร้อมคำตอบของคุณ! มิดเดิลแวร์ที่ใช้คือ `passport.authenticate('local')`

`passport.authenticate` ยังสามารถใช้ตัวเลือกบางอย่างเป็นอาร์กิวเมนต์เช่น: `{ failureRedirect: '/' }` ซึ่งมีประโยชน์อย่างมาก ดังนั้นอย่าลืมเพิ่มเข้าไปด้วย การ response หลังจากใช้มิดเดิลแวร์ (ซึ่งจะถูกเรียกก็ต่อเมื่อมิดเดิลแวร์ตรวจสอบสิทธิ์ผ่าน) ควรเปลี่ยนเส้นทางผู้ใช้ไปที่ `/profile` และเส้นทางนั้นควรแสดงมุมมอง `profile.pug'

หากการรับรองความถูกต้องสำเร็จ ออบเจ็กต์ผู้ใช้จะถูกบันทึกไว้ใน `req.user'

ณ จุดนี้ หากป้อนชื่อผู้ใช้และรหัสผ่านในแบบฟอร์ม ควรจะเปลี่ยนเส้นทางไปยังหน้าแรก `/` และคอนโซลของเซิร์ฟเวอร์ของคุณควรแสดง  `'User {USERNAME} attempted to log in.'` เนื่องจากเรา ขณะนี้ไม่สามารถเข้าสู่ระบบผู้ใช้ที่ไม่ได้ลงทะเบียน

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9).

# --hints--

ควรดำเนินการทุกขั้นตอนอย่างถูกต้องใน server.js

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

คำขอ POST ไปยัง /login ควรเปลี่ยนเส้นทางไปยัง /

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
