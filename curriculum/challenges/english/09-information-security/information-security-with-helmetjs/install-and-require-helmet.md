---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

ในการทำงานในแบบทดสอบนี้จะทำให้คุณเขียนโค้ด ที่มี method ต่างๆ ด้านล่างนี้: 

- Clone [Github repo นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)  แล้วนำมาใช้กับแบบทดสอบนี้บนเครื่องของคุณเอง
- ให้ใช้ [โปรเจค  Replit starter ของเรา](https://replit.com/github/freeCodeCamp/boilerplate-infosec) กับแบบทดสอบนี้
- ใช้ตัวสร้างเว็บไซต์ที่คุณต้องการในการทำโปรเจคนี้ อย่าลืมรวมไฟล์ทั้งหมดจาด Github repo ของเราลงไปด้วย

เมื่อทำโปรเจคนี้เสร็จแล้ว ให้อัปโหลดงานเดโมที่ใช้งานได้ไปบนโฮสต์ที่ไหนก็ได้ที่เป็น public หลังจากนั้นส่ง URL นั้นมาในช่อง `Solution Link`

Helmet จะช่วยให้ Express app ของคุณปลอดภัยมากขึ้นโดยการตั้งค่า HTTP headers ต่างๆ

# --instructions--

โค้ดทั้งหมดของคุณสำหรับบทเรียนเหล่านี้จะอยู่ในไฟล์ `myApp.js` ระหว่างบรรทัดของโค้ดที่เราเริ่มต้นให้คุณ อย่าเปลี่ยนหรือลบรหัสที่เราได้เริ่มไว้ให้คุณก่อนแล้ว

ติดตั้ง Helmet เวอร์ชัน `3.21.3` จากนั้นจึง require มัน คุณสามารถติดตั้งเวอร์ชันที่ต้องการของแพ็คเกจด้วย `npm install --save-exact package@version` หรือโดยการเพิ่มลงใน `package.json` โดยตรง

Install Helmet version `3.21.3`, then require it. You can install a specific version of a package with `npm install --save-exact package@version`, or by adding it to your `package.json` directly.

# --hints--

`helmet` เวอร์ชัน `3.21.3` ควรอยู่ใน `package.json`

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
