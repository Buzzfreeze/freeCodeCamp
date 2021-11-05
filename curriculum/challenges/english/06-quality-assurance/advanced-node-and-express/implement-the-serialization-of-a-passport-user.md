---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

ขณะนี้ เราไม่ได้โหลด object ผู้ใช้จริงเนื่องจากเรายังไม่ได้ตั้งค่าฐานข้อมูลของเรา ซึ่งสามารถทำได้หลายวิธี แต่สำหรับโครงการของเรา เราจะเชื่อมต่อกับฐานข้อมูลหนึ่งครั้งเมื่อเราเริ่มเซิร์ฟเวอร์และคงการเชื่อมต่อแบบถาวรตลอดวงจรชีวิตทั้งหมดของแอป ในการดำเนินการนี้ ให้เพิ่ม string การเชื่อมต่อของฐานข้อมูลของคุณ (เช่น: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) ให้กับตัวแปรสภาพแวดล้อม `MONGO_URI` ใช้ในไฟล์ `connection.js`

*คุณสามารถตั้งค่าฐานข้อมูลฟรีบน [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)*

ตอนนี้เราต้องการเชื่อมต่อกับฐานข้อมูลของเราแล้วเริ่มฟังคำขอ จุดประสงค์ของการดำเนินการนี้คือไม่อนุญาตให้มีการร้องขอก่อนที่จะเชื่อมต่อฐานข้อมูลของเราหรือหากมีข้อผิดพลาดของฐานข้อมูล ในการทำให้สำเร็จ จะต้องรวมการซีเรียลไลซ์เซชั่นและเส้นทางของแอพด้วย code ต่อไปนี้:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

ตรวจสอบให้แน่ใจว่าได้ยกเลิกการใส่เครื่องหมายรหัส `myDataBase` ใน `deserializeUser` และแก้ไข `done(null, null)` ของคุณเพื่อรวม `doc`

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7).

# --hints--

ควรมีการเชื่อมต่อฐานข้อมูล

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ตอนนี้การดีซีเรียลไลซ์เซชั่นควรจะถูกต้อง โดยใช้ฐานข้อมูล และ `done(null, null)` ควรถูกเรียกด้วย `doc`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
