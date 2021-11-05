---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

ขณะนี้ ผู้เรียนไม่สามารถระบุได้ว่าใครเชื่อมต่อกับweb socket แม้ว่า `req.user` จะมีอ็อบเจ็กต์ผู้ใช้ แต่นั่นก็ต่อเมื่อผู้ใช้ของคุณโต้ตอบกับเว็บเซิร์ฟเวอร์ และ web socket ไม่มี `req' (request) ดังนั้นจึงไม่มีข้อมูลผู้ใช้ วิธีหนึ่งในการแก้ปัญหารู้ว่าใครเชื่อมต่อกับ web socket คือการแยกวิเคราะห์และถอดรหัส cookie ที่มีเซสชันพาสปอร์ต จากนั้นทำการดีซีเรียลเพื่อขอรับ object ผู้ใช้ โชคดีที่มีแพ็คเกจ NPM ที่เปลี่ยนงานที่ซับซ้อนให้กลายเป็นเรื่องง่าย!

เพิ่ม `passport.socketio@~3.7.0`, `connect-mongo@~3.2.0` และ `cookie-parser@~1.4.5` เป็นการอ้างอิงและกำหนดให้เป็น `passportSocketIo`, `MongoStore` และ ` cookieParser` ตามลำดับ นอกจากนี้ เราจำเป็นต้องเริ่มต้นที่เก็บหน่วยความจำใหม่ จาก `express-session' ที่เราต้องการก่อนหน้านี้ ควรมีลักษณะดังนี้: 

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

ตอนนี้เราแค่ต้องบอก Socket.IO ให้ใช้และตั้งค่าตัวเลือก ตรวจสอบให้แน่ใจว่าได้เพิ่มสิ่งนี้ก่อน code socket ที่มีอยู่ และไม่ใช่ใน Listener การเชื่อมต่อที่มีอยู่ สำหรับเซิร์ฟเวอร์ ควรมีลักษณะดังนี้:
เราต้องบอก  Socket.IO และ

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

การกำหนดค่าการตรวจสอบสิทธิ์ Passport สำหรับ Socket.IO นั้นคล้ายกับวิธีที่เรากำหนดค่ามิดเดิลแวร์ `session` สำหรับ API นั่นเป็นเพราะความตั้งใจที่จะใช้วิธีการตรวจสอบสิทธิ์แบบเดียวกัน — รับรหัสเซสชันจากคุกกี้และตรวจสอบความถูกต้อง

ก่อนหน้านี้ เมื่อเรากำหนดค่ามิดเดิลแวร์ `session` เราไม่ได้ตั้งชื่อคุกกี้สำหรับเซสชัน (`key`) อย่างชัดเจน เนื่องจากแพ็กเกจ `session`  ใช้ค่าเริ่มต้น ตอนนี้เราได้เพิ่มแพ็คเกจอื่นที่ต้องการเข้าถึงค่าเดียวกันจากคุกกี้แล้ว เราจำเป็นต้องตั้งค่า `key` ในออบเจ็กต์การกำหนดค่าทั้งสองอย่างชัดเจน

อย่าลืมเพิ่ม`key` ด้วยชื่อคุกกี้ในมิดเดิลแวร์ `session`  ที่ตรงกับคีย์ Socket.IO นอกจากนี้ ให้เพิ่มการอ้างอิง `store` ให้กับตัวเลือก ใกล้กับตำแหน่งที่เราตั้งค่า `saveUninitialized: true` เพื่อบอก Socket.IO ว่าเซสชันใดที่เกี่ยวข้อง 

<hr>

ตอนนี้ กำหนดฟังก์ชัน `success` และ `fail` callback functions: 

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

ขณะนี้ object ผู้ใช้สามารถเข้าถึงได้บน socket เป็น `socket.request.user' ตัวอย่างเช่น สามารถเพิ่มสิ่งต่อไปนี้ได้:

```js
console.log('user ' + socket.request.user.name + ' connected');
```

ทำการ log ใน console เซิร์ฟเวอร์ที่เชื่อมต่อ! 

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ได้ [here](https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254) 

# --hints--

`passport.socketio` should be a dependency.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport.socketio',
        'Your project should list "passport.socketio" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

`cookie-parser` ควรเป็น dependency.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'cookie-parser',
        'Your project should list "cookie-parser" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

PassportSocketIo ควรจะถูกต้อง 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\((['"])passport\.socketio\1\)/gi,
        'You should correctly require and instantiate "passport.socketio"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

PassportSocketIo ควรตั้งค่าอย่างถูกต้อง 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io\.use\(\s*\w+\.authorize\(/,
        'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
