---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

คราวนี้ จะตั้งค่า *Passport* เพื่อให้เราสามารถเริ่มอนุญาตให้ผู้ใช้ลงทะเบียนหรือเข้าสู่ระบบบัญชีได้! นอกจาก Passport แล้ว เราจะใช้ Express-session เพื่อจัดการเซสชัน การใช้มิดเดิลแวร์นี้จะบันทึก ID เซสชันเป็น cookie ในไคลเอนต์ และทำให้เราสามารถเข้าถึงข้อมูลเซสชันโดยใช้ ID นั้นบนเซิร์ฟเวอร์ วิธีนี้ช่วยให้ข้อมูลบัญชีส่วนบุคคลไม่อยู่ใน cookie ที่ลูกค้าใช้เพื่อยืนยันกับเซิร์ฟเวอร์ของเรา ข้อมูลเหล่านั้นได้รับการตรวจสอบสิทธิ์แล้ว และเพียงเก็บ *key* เพื่อเข้าถึงข้อมูลที่จัดเก็บไว้ในเซิร์ฟเวอร์

ในการตั้งค่า Passport สำหรับใช้ใน project จะต้องเพิ่มเป็น dependency ก่อนใน package.json ของคุณ `passport@~0.4.1`

นอกจากนี้ เพิ่ม Express-session เป็นการขึ้นต่อกันตอนนี้ด้วย Express-session มีฟีเจอร์ขั้นสูงมากมายที่สามารถใช้ได้ แต่สำหรับตอนนี้ เราจะใช้แค่พื้นฐานเท่านั้น! `express-session@~1.17.1`

คุณจะต้องตั้งค่าเซสชันทันทีและเริ่มต้น Passport อย่าลืมสร้างตัวแปร 'session' และ 'passport' เพื่อให้ต้องใช้ 'express-session' และ 'passport' ตามลำดับ

ในการตั้งค่าแอปด่วนเพื่อใช้เซสชัน เราจะกำหนดตัวเลือกพื้นฐานเพียงไม่กี่ตัว อย่าลืมเพิ่ม 'SESSION_SECRET' ลงในไฟล์ .env และกำหนดค่าแบบสุ่ม ใช้สำหรับคำนวณแฮชที่ใช้ในการเข้ารหัส cookie!

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

As well you can go ahead and tell your express app to **use** 'passport.initialize()' and 'passport.session()'. (For example, `app.use(passport.initialize());`)
เรายังสามารถบอก express app ว่า **use** 'passport.initialize()' และ 'passport.session()' (ตัวอย่างเช่น `app.use(passport.initialize());`)

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c).

# --hints--

Passport และ Express-session ควรเป็น dependency

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport',
        'Your project should list "passport" as a dependency'
      );
      assert.property(
        packJson.dependencies,
        'express-session',
        'Your project should list "express-session" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

จำเป็นต้องมี dependency อย่างถูกต้อง 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Express app ควรใช้ dependency ใหม่

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ควรตั้งค่าความลับของเซสชันและเซสชันอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret:( |)process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
