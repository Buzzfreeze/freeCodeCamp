---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

กลยุทธ์คือวิธีการตรวจสอบผู้ใช้งาน ผู้เรียนสามารถใช้กลยุทธ์ในการอนุญาตให้ผู้ใช้ตรวจสอบสิทธิ์ตามข้อมูลที่บันทึกไว้ในเครื่อง (หากผู้เรียนให้คน register ก่อน) หรือจากผู้ให้บริการต่างๆ เช่น Google หรือ GitHub สำหรับ project นี้ เราจะกำหนด local strategy หากต้องการดูรายการกลยุทธ์นับร้อย ไปที่เว็บไซต์ของ Passport [here](http://passportjs.org/)

เพิ่ม `passport-local@~1.0.0` เป็น dependency และเพิ่มไปยังเซิร์ฟเวอร์ดังนี้: `const LocalStrategy = require('passport-local');`

ตอนนี้ จะต้องบอก passport ให้ **ใช้** LocalStrategy ที่สร้างอินสแตนซ์ด้วยการตั้งค่าบางอย่างที่กำหนดไว้ ตรวจสอบให้แน่ใจว่าสิ่งนี้ (ทุกอย่างตั้งแต่จุดนี้เป็นต้นไป) ถูกห่อหุ้ม ( encapsulated) ในการเชื่อมต่อฐานข้อมูล ต้องอาศัยการเชื่อมต่อนี้! 

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

การกำหนดกระบวนการที่จะใช้ เมื่อเราพยายามรับรองความถูกต้องของใครบางคน ขั้นแรก ให้พยายามค้นหาผู้ใช้ในฐานข้อมูลของเรา โดยป้อนชื่อผู้ใช้ จากนั้นจะตรวจสอบรหัสผ่านที่ตรงกัน  ถ้าไม่มีข้อผิดพลาดปรากฏขึ้นที่เราตรวจสอบ เช่น รหัสผ่านที่ไม่ถูกต้อง อ็อบเจ็กต์ของ `user` จะถูกส่งคืนและจะตรวจสอบความถูกต้อง

กลยุทธ์จำนวนมากถูกตั้งค่าโดยใช้การตั้งค่าที่แตกต่างกัน แต่โดยทั่วไปแล้ว การตั้งค่าตาม README ใน repo ของกลยุทธ์นั้นจะง่าย ตัวอย่างที่ดี คือกลยุทธ์ GitHub ที่เราไม่ต้องกังวลเกี่ยวกับชื่อผู้ใช้หรือรหัสผ่าน เนื่องจากผู้ใช้จะถูกส่งไปยังหน้าตรวจสอบสิทธิ์ของ GitHub เพื่อตรวจสอบสิทธิ์ ตราบใดที่พวกเขาลงชื่อเข้าใช้และตกลง GitHub จะส่งคืนโปรไฟล์ให้เราใช้

ในขั้นตอนต่อไป เราจะตั้งค่าวิธีการเรียกใช้กลยุทธ์การตรวจสอบสิทธิ์จริงเพื่อตรวจสอบผู้ใช้ตามข้อมูลในแบบฟอร์ม!

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [ที่นี่](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b) 

# --hints--

Passport-local ควรเป็น dependency

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

Passport-local ควรต้องมีและตั้งค่าอย่างถูกต้อง 

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
