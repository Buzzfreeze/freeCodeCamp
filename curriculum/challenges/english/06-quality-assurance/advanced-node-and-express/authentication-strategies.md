---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

strategy คือวิธีในการ authenticate ผู้ใช้ 
คุณจะใช้ strategy ในการ authenticate ผู้ใช้ตามข้อมูลที่บันทึกไว้ในเครื่องของเขาได้ (ถ้าผู้ใช้ทำการสมัครสมาชิกแล้วนะ) หรือจะ authenticate ผู้ใช้จากผู้ให้บริการต่างๆก็ได้ เช่น Google หรือ GitHub  

ใน project นี้ เราจะใช้ local strategy (ข้อมูลที่บันทึกไว้ในเครื่อง) โดย Passport จะรองรับ strategy เป็นร้อยๆแบบ ถ้าอยากดูรูปแบบอื่นให้ลองอ่าน [ที่นี่](http://passportjs.org/)

เพิ่ม `passport-local@~1.0.0` เป็น dependency และเพิ่มโค้ดนี้ไปในเซิร์ฟเวอร์: `const LocalStrategy = require('passport-local');`

คราวนี้เราจะต้องใช้ `passport.use(LocalStrategy)` ตามกาารกำหนดค่าของเรา 
และตั้งแต่นี้เป็นต้นไปโค้ดที่เราเขียนจะต้องถูกครอบอยู่ใน `myDB` (การเชื่อมต่อกับฐานข้อมูลที่เราเขียนในแบบทดสอบที่แล้ว) ทั้งหมด เพราะว่าเราจะต้องใช้งานฐานข้อมูลในการดำเนินการ

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

กระบวนการนี้คือกระบวนการที่เราจะใช้ authenticate ผู้ใช้โดยใช้ข้อมูลที่บันทึกอยู่ในเครื่องของเขา  
ขั้นแรก ให้พยายามค้นหาผู้ใช้ในฐานข้อมูลของเรา โดยป้อนชื่อผู้ใช้ จากนั้นจะตรวจสอบรหัสผ่านที่ตรงกัน และสุดท้ายถ้าไม่มีข้อผิดพลาดเกิดขึ้น (เช่น รหัสผ่านที่ถูกต้อง) ฟังก์ชันจะคืนค่า `user` object ออกมาและการ authenticate ผู้ใช้จะสมบูรณ์

แต่ละ strategy ก็จะใช้การตั้งค่าที่แตกต่างกัน แต่โดยทั่วไปแล้ว การตั้งค่าตาม README ใน repository ของกลยุทธ์นั้นจะง่าย 
เช่น strategy ของ GitHub ที่เราไม่ต้องกังวลเรื่องชื่อผู้ใช้หรือรหัสผ่าน เนื่องจากผู้ใช้จะถูกส่งไปยังหน้าตรวจสอบสิทธิ์ของ GitHub เพื่อ authenticate ถ้าผู้ใช้ทำการลงชื่อเข้าใช้และกดตกลง GitHub ก็จะส่งโปรไฟล์ของผู้ใช้คนนั้นมาให้เรา

ในขั้นตอนต่อไป เราจะตั้งค่าวิธีการเรียกใช้ strategy เพื่อ authenticate ผู้ใช้ตามข้อมูลใน form

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b)

# --hints--

ต้องมี Passport-local เป็น dependency

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้องทำการ `require()` Passport-local และต้องตั้งค่าอย่างถูกต้อง 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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
