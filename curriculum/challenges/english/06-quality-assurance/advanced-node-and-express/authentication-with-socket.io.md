---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

ตอนนี้คุณจะยังไม่รู้ว่าใครเชื่อมต่อกับ web socket 
ถึงแม้ว่า `req.user` จะมี user object แต่ในการใช้ web socket คุณจะไม่มี `req` (request) ดังนั้นคุณจึงไม่มีข้อมูลผู้ใช้  
วิธีหนึ่งในการแก้ปัญหาเพื่อหาว่าใครเชื่อมต่อกับ web socket คืออ่านค่าและถอดรหัส cookie ที่มีเซสชันของ passport อยู่ 
จากนั้นทำการ deserialize เพื่อดึงค่า user object  
เราโชคดีที่มีแพ็คเกจ NPM ที่ช่วยทำให้เรื่องนี้ง่ายขึ้น!

เพิ่ม `passport.socketio@~3.7.0`, `connect-mongo@~3.2.0` และ `cookie-parser@~1.4.5` เป็น dependency และให้ require และเก็บลงตัวแปร `passportSocketIo`, `MongoStore` และ ` cookieParser` ตามลำดับ 
นอกจากนี้ เราจำเป็นต้องประกาศใช้ store ตัวใหม่โดยใช้ `express-session` ที่เรา require มา  

โค้ดจะหน้าตาประมาณนี้: 

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

ตอนนี้เราแค่ต้องบอก Socket.IO ให้ใช้ข้อมูลนี้ และตั้งค่า Socket.IO 
ให้เพิ่มโค้ดข้างบนไว้เหนือโค้ดของ socket ที่เราเขียนไว้ก่อนหน้านี้ โดยโค้ดนี้ต้องไม่อยู่ใน listener ที่มีอยู่  
ในเซิร์ฟเวอร์ต้องมีโค้ดประมาณนี้:

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

จะเห็นว่าการใช้ Passport authentication กับ Socket.IO จะคล้ายๆกับการที่เราใช้ `session` middleware ของ API 
นี่เป็นเพราะว่าสองตัวนี้จะต้องใช้การ authentication แบบเดียวกัน คือการรับ session id จากคุกกี้ และตรวจสอบความถูกต้อง

ก่อนหน้านี้ เมื่อเรากำหนดค่า `session` midleware เราไม่ต้องตั้งชื่อคุกกี้ของเซสชัน (`key`)
เพราะว่าแพ็กเกจ `session` ใช้ค่าเริ่มต้นถ้าเราไม่ได้ระบุ 
ตอนนี้พอเราได้เพิ่มแพ็คเกจอื่นที่ต้องการเข้าถึงค่าเดียวกันจากคุกกี้แล้ว เราจำเป็นต้องตั้งค่า `key` ใน object ที่ใช้กำหนดค่าทั้งสองตัว

อย่าลืมเพิ่ม `key` ที่เป็นค่าของชื่อคุกกี้ใน `session` middleware โดยต้องตรงกับ `key` ที่ใช้ใน Socket.IO  
นอกจากนี้ ให้เพิ่มการอ้างอิง `store` ให้กับตัวเลือก ใกล้กับตำแหน่งที่เราตั้งค่า `saveUninitialized: true` เพื่อบอก Socket.IO ว่าเซสชันไหนที่เกี่ยวข้อง 

<hr>

ตอนนี้ ให้เขียน callback function ในกรณี `success` และ `fail` : 

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

ตอนนี้คุณจะเข้าถึง user object ใน socket ได้แล้ว โดยใช้ `socket.request.user`  
คราวนี้คุณจะใช้โค้ดนี้ได้แล้ว:

```js
console.log('user ' + socket.request.user.name + ' connected');
```

ถ้าดูใน console เราจะเห็นแล้วว่าใครเป็นคนที่เชื่อมต่อเข้ามา! 

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254)

# --hints--

ต้องใช้ dependency `passport.socketio`

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

ต้องใช้ dependency `cookie-parser`

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

ต้องทำการ require PassportSocketIo 

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

ต้องตั้งค่า PassportSocketIo ให้ถูกต้อง 

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
