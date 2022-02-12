---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

คุณสามารถส่ง response กลับไปเป็นไฟล์ได้โดยการใช้ method `res.sendFile(path)` 
โดยจะใส้ไว้ใน handler ของ `app.get('/', ...)` ได้ 
method นี้จะตั้งค่า header ตามความเหมาะสมเพื่อบอกให้เบราว์เซอร์ของคุณ จัดการไฟล์ที่คุณส่งไปตามประเภทไฟล์ จากนั้นค่อยทำการอ่านและส่งไฟล์ 
วิธีนี้จะต้องใช้ตำแหน่งของไฟล์แบบ absolute path เราจึงแนะนำให้คุณใช้ตัวแปร global ของ Node ชื่อ  `__dirname` เพื่อหาที่อยู่ของไฟล์ตามตัวอย่างนี้:

```js
absolutePath = __dirname + relativePath/file.ext
```

# --instructions--

ให้ส่งไฟล์ที่อยู่ที่ `/views/index.html` เป็น response ของ path `/` 
ถ้าแอปของคุณใช้งานได้ คุณจะเห็นว่ามี HTML header กับ form อยู่ (เราจะใช้ form ตัวนี้ในภายหลัง) และตอนนี้เราจะยังไม่เห็น stylesheet ทำงาน

**Note:** ในการทำแบบทดสอบข้อนี้คุณจะแก้ไขโค้ดจากแบบทดสอบก่อนหน้า หรือจะเขียนใหม่ก็ได้ แต่ถ้าคุณเขียนใหม่ คุณต้องรู้ไว้ว่า Express จะ route URL จากบนลงล่าง แปลว่าคุณต้องเขียน `app.get('/')` ตัวใหม่ไว้เหนือตัวเก่า ไม่อย่างนั้นเซอร์ฟเวอร์ของคุณก็ยังจะมี response เป็น 'Hello Express' อยู่เหมือนเดิม

# --hints--

แอปของคุณต้องส่งไฟล์ views/index.html ออกมา

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
