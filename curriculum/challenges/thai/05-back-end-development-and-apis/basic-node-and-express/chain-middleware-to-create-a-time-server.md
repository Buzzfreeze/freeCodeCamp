---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

สามารถติดตั้งมิดเดิลแวร์ในเส้นทางที่กำหนดได้โดยการใช้ `app.METHOD(path, MiddlewareFunction)` และมิดเดิลแวร์ยังสามารถถูกเชน(chained) ในการกำหนดเส้นทางอีกด้วย

ดูตามตัวอย่างดังต่อไปนี้ :

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

วิธีนี้มีประโยชน์ในการแบ่งการทำงานของเซิร์ฟเวอร์ออกเป็นหน่วยย่อยๆ ซึ่งนำไปสู่โครงสร้างแอปที่ดีขึ้น,ยังเพิ่มความสามารถในการนำโค้ดมาใช้ซ้ำในที่ต่างๆ, วิธีนี้สามารถใช้เพื่อตรวจสอบความถูกต้องของข้อมูลได้ ในแต่ละจุดของมิดเดิลแวร์สแต็ค (middleware stack)นอกจากนี้คุณยังสามารถบล็อกการทำงานของเชนปัจจุบันและผ่านการควบคุมไปยังฟังก์ชันที่ออกแบบเพื่อจัดการกับข้อผิดพลาดโดยเฉพาะ หรือคุณสามารถส่งการควบคุมไปยังเส้นทาง(route)ที่ตรงกันในครั้งถัดไป เพื่อจัดการกับกรณีพิเศษ เราจะพาคุณมาดูกันในส่วน Express ขั้นสูงนี้

# --instructions--

`app.get('/now', ...)`สามารถโยงกับฟังก์ชันมิดเดิลแวร์และไฟนอลแฮนด์เลอร์(final handler) ได้ ในมิดเดิลแวร์ฟังก์ชัน คุณควรที่จะเพิ่มกระแสเวลา(the current time)เพื่อที่จะขออ็อบเจ็กท์ในคีย์ `req.time` และคุณสามารถใช้ `new Date().toString()` ในตัวแฮนเดอร์ เพื่อตอบสนองต่ออ็อบเจ็กท์ JSON โดยใช้โครงงาน แบบ`{time: req.time}`

**Note:** การทดสอบจะไม่ผ่าน ถ้าคุณไม่เชื่อมต่อกับมิดเดิ้ลแวร์ และถ้าคุณไม่เชื่อมต่อฟังก์ชันกับซอร์ฟแวร์ที่ไหนสักที่ การทดสอบจะล้มเหลว ถึงแม่ว่าผลลัพธ์จะถูกต้องแล้วก็ตาม

# --hints--

ณ จุดปลายทาง /now ควรที่จะเชื่อมต่อกับมิดเดิ้ลแวร์ด้วย

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      assert.equal(
        data.stackLength,
        2,
        '"/now" route has no mounted middleware'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ณ จุดปลายทาง /now ควรที่จะเผื่อเวลาในการส่งค่าคืน +- 20 วินาทีจากตอนที่ส่ง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      var now = new Date();
      assert.isAtMost(
        Math.abs(new Date(data.time) - now),
        20000,
        'the returned time is not between +- 20 secs from now'
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
