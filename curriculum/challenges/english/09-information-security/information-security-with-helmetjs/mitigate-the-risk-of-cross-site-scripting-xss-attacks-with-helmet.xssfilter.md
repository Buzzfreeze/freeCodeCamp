---
id: 587d8247367417b2b2512c39
title: >-
  Mitigate the Risk of Cross Site Scripting (XSS) Attacks with
  helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

Cross-site scripting (XSS) เป็นการโจมตีประเภทหนึ่งซึ่งมีการแทรกสคริปต์ที่เป็นอันตรายลงในหน้าเว็บที่มีช่องโหว่ โดยมีวัตถุประสงค์เพื่อขโมยข้อมูลที่ละเอียดอ่อน เช่น session cookies หรือรหัสผ่าน

กฎพื้นฐานในการลดความเสี่ยงของการโจมตี XSS นั้นง่ายมาก คือ “อย่าเชื่อถือข้อมูลที่ผู้ใช้ input เข้ามา” ในฐานะนักพัฒนาคุณควรตรวจสอบ input ทั้งหมดที่มาจากภายนอก ซึ่งรวมถึงข้อมูลที่มาจากฟอร์ม, query url ของ GET, หรือแม้แต่ body ของ POST ก็ตาม 
การ Sanitizing แปลว่าการค้นหาและเข้ารหัสตัวอักษรที่อาจเป็นอันตรายเช่น &lt; หรือ >

เบราว์เซอร์สมัยใหม่จะมีคุณสมบัติที่ช่วยลดความเสี่ยงได้ด้วย ซึ่งส่วนใหญ่จะกำหนดค่าได้โดยใช้ http header

HTTP header X-XSS-Protection เป็นการป้องกันขั้นพื้นฐาน 
เบราว์เซอร์จะตรวจสอบสคริปต์ที่ถูก inject เข้ามาโดยใช้ heuristic filter 
หากเปิดใช้งาน header เบราว์เซอร์จะทำการซ่อนโค้ดส่วนที่เป็นอันตราย แต่ก็ยังจะมีข้อจำกัดในการใช้งาน header นี้อยู่

# --instructions--

ให้ใช้ `helmet.xssFilter()` ในการ sanitize input ต่างๆ ที่ถูกส่งมายังเซิร์ฟเวอร์ของคุณ

# --hints--

ต้องใช้ middleware `helmet.xssFilter()` อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
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
