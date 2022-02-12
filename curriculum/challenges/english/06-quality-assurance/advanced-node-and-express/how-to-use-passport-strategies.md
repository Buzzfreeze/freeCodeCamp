---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--


จริงๆแล้วในไฟล์ `index.pug` ที่ให้มา จะมี login form อยู่ 
ที่ถูกซ่อนไว้เพราะว่าเรามี inline JavaScript `if showLogin` อยู่ และ form นี้ก็อยู่ภายใต้เงื่อนไขนี้ 
ซึ่งเราไม่เคยกำหนดตัวแปร `showLogin` กัน ดังนั้นหน้าเว็บเลยไม่แสดงโค้ดที่เป็น form ตัวนี้ 

วิธีการทำให้ form แสดงออกมาได้คือเราต้องทำให้ `res.render` ของหน้านั้นรับ object ใหม่ ซึ่งมีค่าตามนี้ `showLogin: true` 
เมื่อเราตั้งค่าแล้ว พอรีเฟรชหน้า คุณจะก็เห็น login form แล้ว!  
form นี้ถูกตั้งค่าให้ส่ง **POST** request ไปยัง `/login` เราจึงต้องรับ POST request ที่ endpoint นี้และทำการ authenticate ผู้ใช้

ในแบบทดสอบนี้ คุณต้องเพิ่ม route `/login` ที่รับ POST request 
ในการ authenticate คุณต้องเพิ่ม middleware ก่อนที่จะส่ง response กลับไป 
วิธีทำก็ง่ายๆ แค่เพิ่ม argument middleware ไปหน้า `function(req,res)` เท่านั้นเอง
โดย middleware ที่เราจะใช้คือ `passport.authenticate('local')`

`passport.authenticate` รับตัวเลือกเป็น argument ได้ด้วย เช่น: `{ failureRedirect: '/' }` ซึ่งมีประโยชน์อย่างมาก ดังนั้นอย่าลืมเพิ่มเข้าไปด้วย 

การ response หลังจากใช้ middleware (ซึ่งจะถูกเรียกก็ต่อเมื่อ middleware ทำการ authenticate ผ่าน) ต้องทำการ redirect ผู้ใช้ไปที่ `/profile` และ route นั้นต้องแสดงหน้า `profile.pug`

ถ้าการ authenticate สำเร็จ user object จะถูกเก็บไว้ใน `req.user`

ถ้าเขียนโค้ดตามด้านบนครบแล้ว เมื่อป้อนชื่อผู้ใช้และรหัสผ่านในแบบฟอร์ม คุณจะถูก redirect ไปยังหน้าแรก `/` และคอนโซลของเซิร์ฟเวอร์ของคุณจะแสดงข้อความ  `'User {USERNAME} attempted to log in.'` เพราะว่าเราจะเข้าสู่ระบบโดยที่ยังไม่ลงทะเบียนไม่ได้

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9)

# --hints--

ต้องดำเนินการทุกขั้นตอนอย่างถูกต้องใน server.js

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

การส่ง POST request ไปยัง /login ต้องทำการ redirect ไปยัง /

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
