---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

ได้เวลาทำให้ผู้ใช้ลงทะเบียนหรือเข้าสู่ระบบบัญชีได้แล้ว โดยเราจะใช้ *Passport* กัน

นอกจาก Passport แล้ว เราจะใช้ Express-session เพื่อจัดการเซสชันด้วย
การใช้มิดเดิลแวร์นี้จะเก็บ session id เป็น cookie ในฝั่ง client และทำให้เราสามารถเข้าถึงข้อมูลเซสชันโดยใช้ id บนเซิร์ฟเวอร์ได้ 
วิธีนี้ช่วยให้ข้อมูลบัญชีส่วนบุคคลที่ใช้เพื่อยืนยันการเข้าสู่ระบบ ไม่ถูกเก็บใน cookie แต่ cookie จะเก็บแค่ *key* เพื่อเข้าถึงข้อมูลที่จัดเก็บไว้ในเซิร์ฟเวอร์แทน

ในการตั้งค่า Passport สำหรับใช้ใน project จะต้องเพิ่มเป็น dependency `passport@~0.4.1` ก่อนใน package.json ของคุณ 

และให้เพิ่ม Express-session เป็น dependency โดยใช้ `express-session@~1.17.1`
โดย Express-session มีฟีเจอร์ขั้นสูงอีกหลายตัว แต่ตอนนี้เราจะใช้แค่ตัวพื้นฐานกันก่อน 

ตอนนี้คุณจะต้องตั้งค่าเซสชัน และใช้ Passport ให้สร้างตัวแปร 'session' และ 'passport' โดยใช้การ `require()` 'express-session' และ 'passport' ตามลำดับ

ในการตั้งค่า Express เพื่อใช้เซสชัน เราจะตั้งค่าข้อมูลแค่ไม่กี่ตัว 
อย่าลืมเพิ่ม 'SESSION_SECRET' ลงในไฟล์ .env และกำหนดค่าให้ตัวแปรนี้แบบสุ่มด้วย เราจะใช้ตัวแปรนี้คำนวณ hash ที่ใช้ในการเข้ารหัส cookie

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

และให้ทำการเรียกใช้ `app.use(passport.initialize())` และ `app.use(passport.session())`

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c)

# --hints--

ต้องกำหนด Passport และ Express-session เป็น dependency

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

ต้องทำการ `require()` dependency อย่างถูกต้อง 

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

ต้องทำการเรียกใช้ `app.use()` passport ตามเงื่อนไขที่กำหนด

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

ต้องตั้งค่า session secret กับตัวแปร SESSION_SECRET ให้ถูกต้อง

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
