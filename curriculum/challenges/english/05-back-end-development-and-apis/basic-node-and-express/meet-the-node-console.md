---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

การทำงานบนโจทย์ที่ท้าทายเหล่านี้ คุณจะต้องเขียนโค้ดภาษาใด ภาษาหนึ่ง ตามวิธีต่อไปนี้:


- Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-express/)  ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
- ใช้เว็บไซต์ [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-express) ในการทำโปรเจคให้เสร็จสมบูรณ์
- ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link`

ระหว่างขั้นตอนการพัฒนานั้น มันเป็นสิ่งที่สำคัญมากที่จะสามารถตรวจสอบได้ว่าเกิดอะไรขึ้นบนโค้ดของคุณเอง


Node คล้ายๆกับ JavaScript environment เช่นเดียวกับ JavaScript ของฝั่งลูกค้า ที่คุณสามารถใช้คอนโซลเพื่อแสดงข้อมูลการดีบักแล้วนำมาใช้ประโยชน์ได้ และบนเครื่องโลคอลแมชชีน(local machine)ของคุณ คุณจะเห็นเอาต์พุตคอนโซลในเทอร์มินัลได้ ส่วนบน Replit เทอร์มินัลจะเปิดแสดงหน้าต่างด้านขวา โดยเป็นค่าเริ่มต้น

พวกเราขอแนะนำว่าควรให้เทอร์มินัลเปิดอยู่ตลอดเวลา ขณะที่กำลังทำโจทย์ Challenges เหล่านี้ สำหรับในการอ่านเอ้าพุตในเทอร์มินัล คุณสามารถดูข้อผิดพลาดที่อาจเกิดขึ้นได้

# --instructions--

แก้ไขไฟล์ `myApp.js` เพื่อบันทึก "Hello World" ลงในคอนโซล

# --hints--

`"Hello World"` ควรอยู่ในคอนโซล

```js

(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
