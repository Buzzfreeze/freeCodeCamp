---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

ในตอนนี้เรายัง เราไม่มี user object จริงๆ เพราะเรายังไม่ได้ตั้งค่าฐานข้อมูล 

คุณจะตั้งค่าฐานข้อมูลได้หลายวิธี แต่ใน project นี้ เราจะเชื่อมต่อกับฐานข้อมูลหนึ่งครั้งเมื่อเซิร์ฟเวอร์เริ่มทำงาน และทำการเชื่อมต่อแบบถาวรไปจนกว่าจะปิดเซิร์ฟเวอร์  
ให้เก็บ connection string ของฐานข้อมูลของคุณ (เช่น: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) ใน environmental variable ชื่อ `MONGO_URI` ซึ่งจะเอาไปใช้ในไฟล์ `connection.js`

*คุณสามารถสร้างฐานข้อมูลฟรีได้บน [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)*

คราวนี้ ถึงเวลาเชื่อมต่อกับฐานข้อมูลแล้วเริ่มรอ request ได้เลย
จุดประสงค์ของการดำเนินการนี้ เราจะไม่ยอมรับ request ก่อนที่จะเชื่อมต่อฐานข้อมูลได้สำเร็จ หรือถ้ามีข้อผิดพลาดของฐานข้อมูล 

ในการทำแบบนี้ เราต้องครอบการ serialization และการประกาศ route แบบในตัวอย่างนี้:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // อย่าลืมเปลี่ยน title
  app.route('/').get((req, res) => {
    //เปลี่ยน response เพื่อให้ใช้ Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // ใช้การ Serialization และ deserialization ที่นี่...

  // อย่าลืมการ catch ด้วย...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// เรียกใช้ app.listen ที่นี่...
```

อย่าลืมเอา comment ของ `myDataBase` ใน `deserializeUser` ออก และเปลี่ยนการเรียกใช้ `done(null, null)` ให้ส่ง `doc` เข้าไปใน callback function ด้วย (เป็น argument ที่สองนะ)

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7)

# --hints--

ต้องมีการเชื่อมต่อกับฐานข้อมูล

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

`deserializeUser` ต้องใช้ฐานข้อมูล และเปลี่ยนการเรียกใช้ `done(null, null)` ให้ส่ง `doc` เข้าไปใน callback function ด้วย

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
