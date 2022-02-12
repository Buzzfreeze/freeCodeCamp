---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

ให้เลือกวิธีทำแบบฝึกหัดในบทเรียนนี้ จากวิธีด้านล่างนี้:

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mongomongoose/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ`

ในแบบทดสอบนี้ คุณต้องตั้งค่าให้ MongoDB Atlas เป็นฐานข้อมูล และนำเข้าแพ็คเกจที่จำเป็นสำหรับการเชื่อมต่อกับฐานข้อมูล

ให้ทำตาม <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' rel='noopener noreferrer' target='_blank'>ตัวอย่างนี้</a> สร้างฐานข้อมูลบน MongoDB Atlas

# --instructions--

ให้เพิ่ม `mongodb@~3.6.0` และ `mongoose@~5.4.0` ลงใน `package.json` และให้เขียน `const mongoose = require("mongoose")` ใน `myApp.js` 
จากนั้นให้สร้างไฟล์ `.env` และเพิ่มตัวแปร `MONGO_URI` ลงไป โดยค่าของตัวแปรนี้จะต้องเป็น URI ของฐานข้อมูล MongoDB Atlas ของคุณ  
อย่าลืมครอบ URI ด้วยเครื่องหมายคำพูด (`''` หรือ `""`) และอย่าลืมว่าจะใช้วงเล็บหน้าหรือหลังเครื่องหมาย `=` ในการประกาศ environmental variable ไม่ได้ เช่น `MONGO_URI='VALUE'` 
เมื่อคุณทำเสร็จแล้ว ให้เชื่อมต่อกับฐานข้อมูลโดยใช้ syntax นี้:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

ใน package.json ต้องมี dependency ของ "mongodb" 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ใน package.json ต้องมี dependency ของ "mongoose" 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องใช้ "mongoose" เชื่อมต่อกับฐานข้อมูล

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
