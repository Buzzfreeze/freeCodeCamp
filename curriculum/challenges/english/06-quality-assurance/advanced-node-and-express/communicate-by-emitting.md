---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--


<dfn>Emit</dfn> เป็นวิธีการสื่อสารทั่วไปที่จะใช้ เมื่อส่งสัญญาณบางอย่างจากเซิร์ฟเวอร์ไปที่ 'io' จะส่งชื่อและข้อมูลของเหตุการณ์ไปยัง socket ที่เชื่อมต่อทั้งหมด ตัวอย่างที่ดี คือการปล่อยจำนวนผู้ใช้ที่เชื่อมต่อในปัจจุบันทุกครั้งที่ผู้ใช้ใหม่เชื่อมต่อ!

เริ่มต้นด้วยการเพิ่มตัวแปรเพื่อติดตามผู้ใช้ ก่อนที่จะรับฟังการเชื่อมต่อจากที่ใด 

```js
let currentUsers = 0;
```

ตอนนี้ เมื่อมีคนเชื่อมต่อ ควรเพิ่มจำนวนก่อนที่จะปล่อยการนับ ดังนั้น จะต้องเพิ่มตัวเพิ่มภายในตัว connection listener

```js
++currentUsers;
```

สุดท้าย หลังจากเพิ่มจำนวนแล้ว ควรปล่อยเหตุการณ์ (ยังอยู่ในตัว connection listener) เหตุการณ์ควรตั้งชื่อว่า 'user count' และข้อมูลควรเป็น `currentUsers` เท่านั้น 

```js
io.emit('user count', currentUsers);
```

ตอนนี้สามารถใช้วิธีให้ลูกค้าของคุณฟังเหตุการณ์นี้ได้! คล้ายกับการรับฟังการเชื่อมต่อบนเซิร์ฟเวอร์ คุณจะใช้คีย์เวิร์ด `on`

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

ตอนนี้ ลองโหลดแอปของคุณ ตรวจสอบสิทธิ์ แล้วคุณจะเห็นใน console ไคลเอ็นต์ '1' แสดงถึงจำนวนผู้ใช้ปัจจุบัน! ลองโหลดไคลเอ็นต์เพิ่มและรับรองความถูกต้องเพื่อดูจำนวนที่เพิ่มขึ้น

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/28ef7f1078f56eb48c7b1aeea35ba1f5)

# --hints--

currentUsers ควรถูกระบุ.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /currentUsers/gi,
        'You should have variable currentUsers defined'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

เซิร์ฟเวอร์ควรปล่อยจำนวนผู้ใช้ปัจจุบันในการเชื่อมต่อใหม่แต่ละครั้ง 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user count('|").*currentUsers/gi,
        'You should emit "user count" with data currentUsers'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ลูกค้าของคุณควรรับฟังเหตุการณ์ 'user count' 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user count('|")/gi,
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
