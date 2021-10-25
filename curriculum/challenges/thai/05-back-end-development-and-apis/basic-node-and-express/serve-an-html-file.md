---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

คุณสามารถตอบกลับคำขอด้วยไฟล์โดยการใช้วิธี `res.sendFile(path)` คุณสามารถใส่ไว้ใน `app.get('/', ...)` ของตัวจัดการเส้นทางได้ สำหรับเบื้องหลัง วิธีนี้จะตั้งค่าส่วนหัวตามความเหมาะสมเพื่อแนะนำเบราว์เซอร์ของคุณ ให้มีวิธีจัดการไฟล์ที่คุณต้องการส่งอย่างไร ตามประเภทไฟล์ จากนั้นค่อยทำการอ่านและส่งไฟล์ วิธีนี้ต้องการเส้นทางของไฟล์แบบสัมบูรณ์ ดังนั้นเราขอแนะนำให้คุณใช้ตัวแปรส่วนกลางของ Node  `__dirname` เพื่อคำนวณเส้นทางตามสมการข้างล่างนี้:

```js
absolutePath = __dirname + relativePath/file.ext
```

# --instructions--

ส่งไฟล์แบบ `/views/index.html` เพื่อเป็นการตอบสนองต่อคำขอ `/` ของเส้นทาง ถ้าแอปของคุณใช้งานได้จริง คุณจะเห็นว่ามีหัวข้อ HTML ขนาดใหญ่ปรากฎอยู่ (และแบบฟอร์มนั้น เราจะใช้ในภายหลัง…) โดยเราจะไม่ใช้สไตล์ (style)

**Note:** สำหรับการทำโจทย์ Challenge คุณสามารถแก้ไขวิธีการข้อก่อนหน้าหรือสร้างไฟล์ใหม่อีกไฟล์ก็ได้ หากคุณสร้างไฟล์ใหม่ โปรดทราบว่าการประเมินเส้นทางจะส่งจากบนลงล่างและ เรียกใช้ตัวจัดการสำหรับการจับคู่ในครั้งแรกและคุณต้องใส่ความคิดเห็นในโซลูชันก่อนหน้านี้ ไม่เช่นนั้นเซิร์ฟเวอร์จะรันด้วยสตริงต่อไปไม่หยุด

# --hints--

แอปของคุณควรให้บริการในรูปแบบไฟล์ views/index.html

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
      );
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
