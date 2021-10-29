---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

ในส่วน 2 บรรทักแรกของไฟล์ `myApp.js` คุณจะเห็นว่าการสร้างออบเจ็กต์แอป Express นั้นง่ายมาก อ็อบเจ็กต์นร้มีหลายวิธีในการสร้าง ซึ่งคุณจะได้เรียนรู้การสร้างพวกนี้ในโจทย์ท้าทายเหล่านี้ วิธีพื้นฐานหนึ่งที่นิยมกัน คือ `app.listen(port)` มันจะบอกให้เซิร์ฟเวอร์ของคุณฟังคำสั่งบนพอร์ต ทำให้มันอยู่ในสถานะการทำงาน สำหรับการทดสอบตรรกะ เราต้องการให้แอปทำงานในพื้นหลังที่พวกเราเพิ่มลงไปในไฟล์ของคุณ ซึ่งก็คือ `server.js`

มาเริ่มทำงานบนสตริงตัวแรกกัน! ในกรณี Express เส้นทางนี้จะใช้โครงสร้างแบบ `app.METHOD(PATH, HANDLER)` ซึ่ง METHOD ในโครงสร้าง หมายถึงวิธีของ http ในโลเวอร์เคส, PATH คือ เส้นทางที่สัมพันธ์กันในเซอร์เวอร์ (มันอาจจะเป็นสตริงหรือนิพจน์ทั่วไปก็ได้), HANDLER คือฟังก์ขันที่เรียก express เมื่อเส้นทางจับคู่กัน ซึ่งฟอร์มที่ใช้ใน HANDLER คือ `function(req, res) {...}` โดยที่ req คืออ็อบเจ็กต์คำขอ ส่วน res หมายถึง อ็อบเจ็กต์ตอบสนอง ยกตัวอย่างเช่น :

```js
function(req, res) {
  res.send('Response String');
}
```

จะทำงานบนสตริง Response String

# --instructions--

การใช้วิธี `app.get()` นั้นจะทำงานบนสตริง "Hello Express" เพื่อที่คำขอ GET ตรงกับ `/` ของเส้นทางรูท อย่าลืมตรวจสอบให้แน่ใจด้วย ว่าโค้ดของคุณทำงานบนล็อค(Logs)จากนั้นดูผลลัพธ์ของการแสดงตัวอย่างในกรณีที่คุณใช้ Replit ด้วย

**Note:** โค้ดทั้งหมดในบทเรียนควรที่จะเพิ่มโค้ดอีกสัก 2-3 บรรทัด เพื่อให้พวกเราเริ่มต้นไปพร้อมกับคุณ

# --hints--

แอพของคุณควรที่จะทำงานบนสตริง "Hello Express"

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
