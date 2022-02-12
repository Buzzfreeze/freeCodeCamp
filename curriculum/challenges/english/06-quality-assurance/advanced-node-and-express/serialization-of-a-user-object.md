---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialization และ deserialization เป็นสิ่งสำคัญที่ใช้ในการ Authenticate 

การ serialize object แปลว่าการแปลงข้อมูลให้เป็น *key* ซึ่งจะ deserialize ให้กลับเป็น object เดิมได้ 
วิธีนี้จะทำให้เรารู้ว่าใครกำลังคุยกับเซิร์ฟเวอร์อยู่ โดยไม่ต้องส่งข้อมูลที่ใช้ Authenticate (เช่น ชื่อผู้ใช้และรหัสผ่าน) ทุกครั้งที่ผู้ใช้เปลี่ยนหน้าหรือส่ง request ใหม่

ในการตั้งค่าให้ถูกต้อง เราจำเป็นต้องมีฟังก์ชัน serialization และ deserialization ใน Passport ซึ่งจะสร้างได้โดยการใช้ `passport.serializeUser( ฟังก์ชันของเรา )` และ `passport.deserializeUser( ฟังก์ชันของเรา )`

การเรียกใช้ฟังก์ชัน `serializeUser` จะต้องส่ง argument ไปสองตัว คือ user object แบบเต็ม และ callback function ที่ passport จะเรียกใช้
โดย passport จะเรียกใช้ callback function โดยส่ง unique key (ค่าที่ไม่ซ้ำกัน) ที่ใช้ระบุผู้ใช้คนนั้นกลับมา คีย์ที่ใช้ง่ายที่สุดคือ `_id` ของ user object 
ซึ่งค่านี้จะเป็น unique key เพราะเป็นค่าที่ถูกระบุโดย MongoDB  

โดย `deserializeUser` ก็จะทำงานคล้ายๆกัน โดยจะรับค่าเป็น unique key และ cakkback function ที่ passport จะเรียกใช้ แต่คราวนี้ เราต้องใช้คีย์นั้น และคืนค่าเป็น user object แบบเต็มไปยัง cakkback function 
ในการค้นหาผู้ใช้ใน Mongo โดยใช้ `_id` คุณจะต้องประกาศ `const ObjectID = require('mongodb').ObjectID;` จากนั้นจึงจะใช้เรียก `new ObjectID(THE_ID)` อย่าลืมเพิ่ม `mongodb@~3.6.0` เป็น dependency ตามตัวอย่างด้านล่าง:

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

หมายเหตุ: ตอนนี้ "deserializeUser" จะยังมี error อยู่ แต่เราจะไปแก้ error นี้ ในการตั้งค่าฐานข้อมูลในขั้นตอนถัดไป 
เพราะฉะนั้นในตอนนี้ในฟังก์ชัน  `deserializeUser` ให้ comment โค้ดทั้งหมดและเรียกใช้ `done(null, null)` ไปก่อน

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048)

# --hints--

ต้องทำการ serialize ผู้ใช้ให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.serializeUser/gi,
        'You should have created your passport.serializeUser function'
      );
      assert.match(
        data,
        /null,\s*user._id/gi,
        'There should be a callback in your serializeUser with (null, user._id)'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้องทำการ deserialize ผู้ใช้ให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.deserializeUser/gi,
        'You should have created your passport.deserializeUser function'
      );
      assert.match(
        data,
        /null,\s*null/gi,
        'There should be a callback in your deserializeUser with (null, null) for now'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้องมี MongoDB เป็น dependency

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้อง require Mongodb และ ObjectId อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')mongodb\1/gi,
        'You should have required mongodb'
      );
      assert.match(
        data,
        /new ObjectID.*id/gi,
        'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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
