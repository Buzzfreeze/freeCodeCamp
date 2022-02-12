---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--


<dfn>Emit</dfn> เป็นวิธีการสื่อสารที่จะได้ใช้บ่อยที่สุด 
เมื่อคุณ emit (ส่งสัญญาณ) ข้อมูลจากเซิร์ฟเวอร์ไปที่ 'io' จะเป็นการส่งชื่อของ event และข้อมูลของ event นั้นไปยัง socket ที่เชื่อมต่ออยู่ทั้งหมด 
ตัวอย่างหนึ่งในการใช้ฟังก์ชันนี้คือ การส่งค่าจำนวนคนที่อยู่ในระบบทั้งหมด ไปให้ผู้ใช้ทุกคนที่เชื่อมต่ออยู่

เริ่มต้นด้วยการเพิ่มตัวแปรเพื่อนับจำนวนผู้ใช้ ก่อนบรรทัดที่เราจะทำการ listen 

```js
let currentUsers = 0;
```

ตอนนี้ เมื่อมีคนเชื่อมต่อ ค่าของ `currentUsers` ต้องเพิ่มขึ้น 
คุณจึงต้องเพิ่มค่านี้ใน connection listener

```js
++currentUsers;
```

สุดท้าย หลังจากเพิ่มค่าแล้ว คุณต้อง emit ค่านี้ออกไป (ยังอยู่ในตัว connection listener) โดยตั้งชื่อ event ว่า 'user count' และข้อมูลที่ emit ออกไปคือ `currentUsers` 

```js
io.emit('user count', currentUsers);
```

คราวนี้ในฝั่ง client ก็จะรอรับ event นี้ได้แล้ว 
วิธีการใช้ก็จะคล้ายๆกับบนเซิร์ฟเวอร์ โดยการใช้คีย์เวิร์ด `on`

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

คราวนี้ ลองเปิดแอปของคุณ และ authenticate แล้วใน console ของ client คุณจะเห็น '1' ซึ่งแสดงจำนวนคนที่อยู่ในระบบ! 
ลองเปิด client เพิ่มแล้ว authenticate เพื่อดูจำนวนที่เพิ่มขึ้น

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/28ef7f1078f56eb48c7b1aeea35ba1f5)

# --hints--

ต้องประกาศ currentUsers

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

เซิร์ฟเวอร์ต้อง emit จำนวนผู้ใช้ปัจจุบัน เมื่อมีการเชื่อมต่อใหม่ทุกครั้ง 

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

ที่ client ต้องรอรับ event 'user count' 

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
