---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--


แบบทดสอบนี้จะใช้ไฟล์ `chat.pug` 
ดังนั้น ในไฟล์ `routes.js` เพิ่ม route แบบ GET โดยชี้ไปที่ `/chat` ซึ่งใช้ `ensureAuthenticated` และแสดงผลหน้า `chat.pug` และให้ส่ง `{ user: req.user }` เป็น argument ใน response มาด้วย 
ต่อมา ให้แก้ route `/auth/github/callback` ที่มีอยู่ เพื่อตั้งค่าให้ `req.session.user_id = req.user.id` และ redirect ไปที่ `/chat`

เพิ่ม `socket.io@~2.3.0` เป็น dependency และให้ทำการ require และสร้าง instance ของ `socket.io` ในเซิร์ฟเวอร์โดยใช้ `http` (built-in มาใน Nodejs แล้ว):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

เมื่อติดตั้งเซิร์ฟเวอร์ *http* บนแอป *express* แล้ว คุณต้องเปลี่ยนให้แอปไป listen จาก *http* แทน โดยการเปลี่ยน `app.listen` เป็น `http.listen`

อย่างแรกที่ต้องจัดการคือการรับการเชื่อมต่อใหม่จาก client 
ซึ่งเราจะใช้คีย์เวิร์ด <dfn>on</dfn> เพื่อ listen event 
`on` จะรับ argument 2 ตัวคือ ชื่อของ event ที่เป็น string และฟังก์ชันที่ใช้ส่งข้อมูล  
ในกรณีของตัวรับการเชื่อมต่อ เราใช้ *socket* เป็น argument ที่สอง 
โดย socket แต่ละตัวจะเป็นเหมือน client หนึ่งเครื่องที่เชื่อมต่ออยู่

ในการรอการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ ให้เขียนโค้ดข้างล่างนี้ในไฟล์ `server.js`:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

ตอนนี้เพื่อให้ client เชื่อมต่อได้ เพียงแค่ใส่โค้ดด้านล่างนี้ใน `client.js` ซึ่งโหลดโดยเพจหลังจากที่ได้ตรวจสอบสิทธิ์แล้ว:

```js
/*global io*/
let socket = io();
```

comment ด้านบนเป็นการป้องกันการ error เพราะว่าเราไม่ได้กำหนด 'io' ในไฟล์ 
เราได้เพิ่ม CDN ที่เชื่อถือได้ของ Socket.IO library ไว้ในหน้า chat.pug แล้ว

ตอนนี้ให้ลองเปิดแอป และ authenticate แล้วให้ดูใน console ของเซิร์ฟเวอร์ คุณจะเห็นคำว่า 'A user has connected'!

**หมายเหตุ:**`io()` ใช้งานได้เฉพาะเมื่อเชื่อมต่อกับ socket ที่โฮสต์บน url/เซิร์ฟเวอร์เดียวกัน ในเชื่อมต่อกับ socket ที่โฮสต์ไว้ที่อื่น คุณจะต้องใช้ `io.connect('URL');`

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1)

# --hints--

ต้องใช้ dependency `socket.io`

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

ต้อง require `http` และสร้าง instance ชื่อ `http`

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

ต้อง require `socket.io` และสร้าง instance ชื่อ `io`

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

Socket.IO ต้องรอรับการเชื่อมต่ออยู่

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

client ของคุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

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
