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

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/).

Cross-site scripting (XSS) เป็นการโจมตีประเภทหนึ่งซึ่งมีการแทรกสคริปต์ที่เป็นอันตรายลงในหน้าเว็บที่มีช่องโหว่ โดยมีวัตถุประสงค์เพื่อขโมยข้อมูลที่ละเอียดอ่อน เช่น session cookies หรือรหัสผ่าน

กฎพื้นฐานในการลดความเสี่ยงของการโจมตี XSS นั้นง่ายมาก คือ “อย่าเชื่อถือข้อมูลที่ผู้ใช้ input เข้ามา” ในฐานะนักพัฒนาคุณควรล้าง input ทั้งหมดที่มาจากภายนอกอยู่เสมอ ซึ่งรวมถึงข้อมูลที่มาจากฟอร์ม, GET query url, และแม้แต่จาก POST bodies ก็ตาม การฆ่าเชื้อ (Sanitizing) หมายความว่าคุณควรค้นหาและเข้ารหัสอักขระที่อาจเป็นอันตรายเช่น &lt;, >

เบราว์เซอร์สมัยใหม่สามารถช่วยลดความเสี่ยงด้วยการใช้ software strategies ที่ดีกว่า บ่อยครั้งสิ่งเหล่านี้สามารถกำหนดค่าได้ผ่าน http header

X-XSS-Protection HTTP header เป็นการป้องกันขั้นพื้นฐาน เบราว์เซอร์ตรวจพบสคริปต์ที่เป็นไปได้ที่ถูกยิงเข้ามาโดยใช้ตัวกรองการวิเคราะห์พฤติกรรม (heuristic filter) หากเปิดใช้งาน header แล้วเบราว์เซอร์จะเปลี่ยนรหัสสคริปต์ ทำให้เป็นกลาง ยังคงมีการสนับสนุนการทำงานในส่วนนี้ที่จำกัด

# --instructions--

ให้ใช้ `helmet.xssFilter()` ในการ sanitize input ต่างๆ ที่ถูกส่งมายังเซิร์ฟเวอร์ของคุณ

# --hints--

helmet.xssFilter() middleware ควรถูกติดตั้งอย่างถูกต้อง

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
