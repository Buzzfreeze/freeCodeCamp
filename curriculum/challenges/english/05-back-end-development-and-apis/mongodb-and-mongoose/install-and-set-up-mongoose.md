---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

การทำงานกับโจทย์ท้าทายเหล่านี้ คุณต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งต่อไปนี้:

- เลียนแบบเว็บไซต์ [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-mongomongoose/) ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
- ใช้เว็บไซต์ [Replit starter project ของพวกเรา](https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose) ในการทำโปรเจคให้เสร็จสมบูรณ์
- ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` 

ในโจทย์นี้ คุณควรมี่จะตั้งค่าให้ MongoDB Atlas เป็นฐานข้อมูลและนำเข้าแพ็คเกจที่จำเป็นเพื่อการเชื่อมต่อ

ตาม <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' rel='noopener noreferrer' target='_blank'>this tutorial</a> เพื่อตั้งค่าฐานข้อมูลบน MongoDB Atlas.

# --instructions--

เพิ่ม `mongodb@~3.6.0` และ `mongoose@~5.4.0` ลงบนโปรเจค `package.json` หลังจากนั้น ต้องการ mongoose เป็น`mongoose` ใน `myApp.js` เพื่อสร้างไฟล์ `.env` และเพิ่มตัวแปร `MONGO_URI` ลงไป โดยค่าควรเป็น URI ฐานข้อมูลบน MongoDB Atlas ของคุณ อย่าลืมล้อมรอบ URI ด้วยเครื่องหมายคำพูด(') หรือ (") และจำไว้ว่าคุณไม่สามารถใช้ช่องว่างรอบ `=` ในตัวแปรสภาพแวดล้อมได้ ตัวอย่างเช่น `MONGO_URI='VALUE'` เมื่อคุณทำเสร็จแล้ว ให้เชื่อมต่อกับฐานข้อมูลโดยใช้ซินแทคต่อไปนี้:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

"mongodb" dependency ควรอยู่ใน package.json

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

"mongoose" dependency ควรอยู่ใน package.json

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

"mongoose" ควรเชื่อมต่อกับฐานข้อมูล

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
