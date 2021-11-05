---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--


challenge ต่อไปนี้จะใช้ประโยชน์จากไฟล์ "chat.pug" ดังนั้น ในไฟล์ `routes.js`ให้เพิ่มเส้นทาง GET ที่ชี้ไปที่ `/chat` ซึ่งใช้ `ensureAuthenticated` และแสดงผล `chat.pug` โดยที่ `{ user: req.user }` ส่งผ่านเป็น อาร์กิวเมนต์ในการตอบกลับ เปลี่ยนเส้นทาง `/auth/github/callback' ที่มีอยู่ของคุณเพื่อตั้งค่า `req.session.user_id = req.user.id` และเปลี่ยนเส้นทางไปที่ `/chat`

เพิ่ม `socket.io@~2.3.0` เป็น dependency และต้องการ/อินสแตนซ์ในเซิร์ฟเวอร์ของคุณที่กำหนดไว้ดังนี้ ด้วย `http' (มาพร้อม built-in กับ Nodejs ในตัว):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

เมื่อติดตั้งเซิร์ฟเวอร์ *http* บนแอป *express* แล้ว คุณต้องฟังจากเซิร์ฟเวอร์ *http* เปลี่ยนบรรทัดด้วย "app.listen" เป็น "http.listen"

สิ่งแรกที่ต้องจัดการคือการฟังการเชื่อมต่อใหม่จากลูกค้า คีย์เวิร์ด <dfn>on</dfn> ทำอย่างนั้น- ฟังเหตุการณ์เฉพาะ ต้องมี 2 อาร์กิวเมนต์: สตริงที่มีชื่อเรื่องของเหตุการณ์ที่ปล่อยออกมา และฟังก์ชันที่ใช้ส่งข้อมูล ในกรณีของตัวรับการเชื่อมต่อ เราใช้ *socket* เพื่อกำหนดข้อมูลในอาร์กิวเมนต์ที่สอง socket คือไคลเอนต์แต่ละรายที่เชื่อมต่ออยู่

ในการรับฟังการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ ให้เพิ่มสิ่งต่อไปนี้ภายในการเชื่อมต่อฐานข้อมูลของคุณ:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

ตอนนี้เพื่อให้ไคลเอนต์เชื่อมต่อได้ เพียงแค่ code ต่อไปนี้ใน `client.js` ซึ่งโหลดโดยเพจหลังจากที่ได้ตรวจสอบสิทธิ์แล้ว:

```js
/*global io*/
let socket = io();
```

ความคิดเห็นระงับข้อผิดพลาดที่ ปกติคุณจะเห็นเนื่องจากไม่ได้กำหนด 'io' ในไฟล์ เราได้เพิ่ม CDN ที่เชื่อถือได้ไปยังไลบรารี Socket.IO บนหน้าใน chat.pug แล้ว

ตอนนี้ให้ลองโหลดแอพ และรับรองความถูกต้อง แล้วจะเห็นใน server console มี 'A user has connected'!

**หมายเหตุ:**`io()` ใช้งานได้เฉพาะเมื่อเชื่อมต่อกับ socket ที่โฮสต์บน url/เซิร์ฟเวอร์เดียวกัน สำหรับการเชื่อมต่อกับ socket ภายนอกที่โฮสต์ไว้ที่อื่น คุณจะต้องใช้ `io.connect('URL');`

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1).

# --hints--

`socket.io` ควรเป็น dependency.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ควรกำหนดและยกตัวอย่าง `http` เป็น `http`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ควรกำหนดและยกตัวอย่าง `socket.io` เป็น `io` อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO ควรรับการเชื่อมต่อ

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ลูกค้าของคุณควรเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
        'Your client should be connection to server with the connection defined as socket'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
