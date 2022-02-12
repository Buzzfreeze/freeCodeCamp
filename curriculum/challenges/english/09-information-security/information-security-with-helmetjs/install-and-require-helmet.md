---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

ในการทำแบบทดสอบนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีด้านล่างนี้ ให้เลือกวิธีที่เหมาะกับคุณที่สุด:


- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ`

Helmet จะช่วยให้ app Express ของคุณปลอดภัยมากขึ้นโดยการตั้งค่า HTTP header ต่างๆ

# --instructions--

โค้ดทั้งหมดของคุณสำหรับบทเรียนนี้จะอยู่ในไฟล์ `myApp.js` ระหว่างบรรทัดของโค้ดที่เราเขียนไว้ให้คุณ อย่าเปลี่ยนหรือลบโค้ดที่เราเขียนไว้ให้

ให้ติดตั้ง Helmet เวอร์ชัน `3.21.3` และทำการ `require(helmet)` 
ในขั้นตอนการติดตั้ง คุณจะเลือกเวอร์ชันของแพคเกจได้โดยใช้คำสั่งนี้ `npm install --save-exact package@version` หรือระบุเวอร์ชันใน `package.json` โดยตรง

# --hints--

ต้องมี `helmet` เวอร์ชัน `3.21.3` ใน `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
