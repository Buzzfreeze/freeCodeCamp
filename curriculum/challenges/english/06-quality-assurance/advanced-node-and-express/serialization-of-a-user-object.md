---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialization และ deserialization เป็นแนวคิดที่สำคัญเกี่ยวกับการรับรองความถูกต้อง การทำให้ object เป็น Serialization หมายถึงการแปลงเนื้อหาให้เป็น *key* ขนาดเล็ก ซึ่งสามารถดีซีเรียลไลซ์ให้เป็น object ดั้งเดิมได้ ช่วยให้เราทราบว่าใครติดต่อกับเซิร์ฟเวอร์ โดยไม่ต้องส่งข้อมูลการรับรองความถูกต้อง เช่น ชื่อผู้ใช้และรหัสผ่าน ในแต่ละคำขอสำหรับหน้าใหม่

ในการตั้งค่าอย่างถูกต้อง เราจำเป็นต้องมีฟังก์ชัน Serialization และ deserialization ใน Passport เราสร้างสิ่งเหล่านี้ด้วย `passport.serializeUser( OURFUNCTION )` และ `passport.deserializeUser( OURFUNCTION )`

`serializeUser` ถูกเรียกด้วย 2 อาร์กิวเมนต์ object ผู้ใช้แบบเต็มและการเรียกกลับที่ใช้โดย passport คีย์ที่ไม่ซ้ำเพื่อระบุว่าผู้ใช้รายนั้นควรถูกส่งคืนในการเรียกกลับ คีย์ที่ง่ายที่สุดที่จะใช้เป็น `_id` ของผู้ใช้ใน object ควรไม่ซ้ำกันเนื่องจาก MongoDB สร้าง ในทำนองเดียวกัน `deserializeUser` ถูกเรียกด้วยคีย์นั้นและฟังก์ชันเรียกกลับสำหรับพาสปอร์ตด้วย แต่คราวนี้ เราต้องใช้คีย์นั้นและส่งคืนออบเจ็กต์ผู้ใช้ทั้งหมดไปยังคอลแบ็ก ในการค้นหาคำค้นหาสำหรับ Mongo `_id` คุณจะต้องสร้าง `const ObjectID = require('mongodb').ObjectID;` จากนั้นจึงจะใช้เรียก `new ObjectID(THE_ID)` อย่าลืมเพิ่ม `mongodb@~3.6.0` เป็น dependency สามารถเห็นได้ในตัวอย่างด้านล่าง:

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

หมายเหตุ: "deserializeUser" นี้จะทำให้เกิดข้อผิดพลาดจนกว่าเราจะตั้งค่า DB ในขั้นตอนถัดไป ดังนั้นสำหรับตอนนี้ให้แสดงความคิดเห็นเกี่ยวกับบล็อกทั้งหมดและเพียงแค่เรียก`done(null, null)`ในฟังก์ชัน  `deserializeUser` 

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048).

# --hints--

ผู้เรียนควรทำ serialize การทำงานของผู้ใช้ถูกต้อง

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

ผู้เรียนควรทำ deserializeฟังก์ชันของผู้ใช้อย่างถูกต้อง

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

MongoDB ควรเป็น dependency

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

จำเป็นต้องมี Mongodb อย่างถูกต้องรวมถึง ObjectId

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
