---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

เซิร์ฟเวอร์ HTML มักจะมีไดเร็กทอรีหนึ่งหรือมากกว่าหนึ่งไดเร็กทอรี เพื่อให้ผู้ใช้สามารถเข้าถึงได้ คุณสามารถวางเนื้อหาแบบสแตติกที่ต้องการไว้ที่แอปพลิเคชันของคุณได้ เช่น สไตล์ชีต, สคริปต์, รูปภาพ

ในกรณีต้องการส่งแบบเร่งด่วน คุณสามารถติดตั้งฟังก์ชันนี้ด้วยมิดเดิ้ลแวร์ `express.static(path)`  โดยที่พารามิเตอร์ `path` จะเป็นเส้นทางสัมบูรณ์ของโฟลเดอร์เนื้อหา

แต่ถ้าหากคุณไม่รู้ว่ามิดเดิ้ลแวร์คืออะไร...ไม่ต้องกังวลไป พวกเราจะสอนคุณแบบละเอียดในภายหลัง ซึ่งโดยปกติแล้ว มิดเดิ้ลแวร์คือ ฟังก์ชันที่เอาไว้สกัดกั้นตัวเส้นทางแฮดเดอร์หรือบางครั้งก็ทำหน้าที่เพิ่มข้อมูลบางอย่าง ในการติดตั้งมิดเดิ้ลแวร์ต้องใช้วิธี `app.use(path, middlewareFunction)` โดยอาร์กิวเม้นท์ แรก `path` นั้นเป็นทางเลือก ถ้าคุณรันไม่ผ่าน วิดเดิ้ลแวร์จะทำการกำจัดคำขอทั้งหมด

# --instructions--

การติดตั้งมิดเดิลแวร์ `express.static()` ไปยังเส้นทาง `/public` ด้วย  `app.use()` ในแสดงเส้นทางที่สมบูรณ์(absolute path) ไปยังโฟลเดอร์เนื้อหาคือ `__dirname + /public`

ตอนนี้แอปของคุณควรที่จะทำงานบนสไตล์ชีต CSS ได้ โปรดรู้ไว้ด้วยว่าไฟล์ `/public/style.css` นั้นจะมีการอ้างอิงใน `/views/index.html` ของต้นแบบโครงการบอยด์ลิงเพลต ซึ่งจะทำให้หน้าแรกของคุณดูดีขึ้น!

# --hints--

แอปของคุณควรที่จะทำงานบนโฟลเดอร์เนื้อหาจากไดเร็กทอรี `/public` ไปยังเส้นทาง `/public`

```js

(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
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
