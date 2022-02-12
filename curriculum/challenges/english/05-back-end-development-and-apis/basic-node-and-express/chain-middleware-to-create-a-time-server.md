---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

ถ้ายังจำได้ เราจะใช้ middleware กับ route ที่เรากำหนดได้โดยการใช้ method `app.METHOD(path, MiddlewareFunction)` และเรายังใช้ middleware ในการประกาศ route ได้โดยใช้การเชื่อม middleware

ลองดูตัวอย่าง :

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // สมมติว่าเป็นการดำเนินการแบบ synchronous
  next();
}, function(req, res) {
  res.send(req.user);
});
```

การทำงานแบบนี้จะช่วยให้เราแบ่งการทำงานของเซิร์ฟเวอร์ออกเป็นส่วนๆ ซึ่งจะทำให้โครงสร้างแอปของเราดีขึ้น และอาจทำให้เราใช้โค้ดซ้ำได้ด้วย 
การใช้ middleware นี้รูปแบบนี้จะทำให้เราตรวจอบข้อมูลที่เข้ามาในแอปได้
และในการที่ข้อมูลวิ่งผ่าน middleware stack นี้ คุณจะทำให้ข้อมูลที่เข้ามาหยุดที่ส่วนไหนของ middleware ก็ได้ ก่อนที่จะส่งข้อมูลนั้นไปให้โค้ดส่วนที่ใช้จัดการข้อผิดพลาดต่อไป
หรือคุณจะส่ง request นี้ให้ไปทำงานยัง route ที่เข้าเงื่อนไขตัวต่อไปได้  
เดี๋ยวเราจะเรียนเรื่องนี้กันทีหลังในบทเรียนเรื่อง Express ขั้นสูง

# --instructions--

ให้สร้าง middleware chain ที่ route นี้ `app.get('/now', ...)` และเขียน handler function ด้วย
ใน middleware คุณต้องเพิ่มเวลาปัจจุบันลงใน `req.time` โดยการใช้ `new Date().toString()` 
ในส่วนของ handler ให้ส่งค่ากลับมาเป็น JSON object ที่มีโครงสร้างตามนี้ `{time: req.time}`

**Note:** เราจะไม่ให้คุณผ่านแบบทดสอบนี้ ถ้าคุณไม่ใช้การ chain middleware 
และถ้าคุณประกาศ middleware ไว้ที่อื่นแต่ไม่ได้ใช้การ chain เราก็จะไม่ให้คุณผ่านแบบทดสอบนี้เหมือนกัน ถึงแม่ว่าผลลัพธ์จะถูกต้องก็ตาม

# --hints--

ให้ทำการ chain middleware ที่ endpoint /now

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

เวลาที่ส่งออกมาจาก /now ต้องมีเวลาต่างจากปัจจุบันไม่เกิน +- 20 วินาที

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
