---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

ปกติแล้วในห้องแชททั่วๆไป จะแจ้งเตือนเมื่อมีผู้ใช้เชื่อมต่อหรือยกเลิกการเชื่อมต่อ แล้วก็จะแสดงจำนวนผู้ใช้งานที่เชื่อมต่อทั้งหมดด้วย  
ตอนนี้คุณมี event connect และ disconnect แล้ว คุณจะต้องแก้ไข event สองตัวนี้เพื่อให้ใช้ฟีเจอร์ใหม่นี้ได้  
วิธีดีที่สุด คือการส่งข้อมูล 3 ส่วนไปพร้อมกับ event:  

- ชื่อของผู้ใช้ที่เชื่อมต่อ/ยกเลิกการเชื่อมต่อ
- จำนวนผู้ใช้ปัจจุบัน 
- และค่าที่แสดงว่าผู้ใช้ทำการการเชื่อมต่อหรือยกเลิกการเชื่อมต่อ

เปลี่ยนชื่อของ event เป็น `'user'` และส่ง object ที่มีฟิลด์เป็น 'name',  'currentUsers' และ 'connected' (ให้เป็น `true` ถ้าผู้ใช้ทำการเชื่อมต่อ หรือ `false` ถ้าผู้ใช้ทำการยกเลิกการเชื่อมต่อ)  
อย่าลืมเปลี่ยนทั้ง event 'connect' และ 'disconnet' และให้ฟิลด์ 'connected' เป็น `false` ใน event 'disconnet' และเป็น `true` ใน event 'connet' ที่ emit ออกมา 

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

ตอนนี้ใน client ก็จะมีข้อมูลเพียงพอที่จะแสดงจำนวนผู้ใช้ปัจจุบัน และประกาศเมื่อผู้ใช้ทำการเชื่อมต่อ หรือยกเลิกการเชื่อมต่อแล้ว  
เราจะจัดการ event ในฝั่ง client โดยการ listen event ชื่อ `'user'` จากนั้นอัปเดตจำนวนผู้ใช้ปัจจุบันโดยใช้ jQuery เพื่อเปลี่ยนข้อความของ `#num-users` เป็น `'{NUMBER} users online'` และ append `<li>` ไปใน `ul` ที่มี id เป็น `message` โดยใช้ข้อความว่า `'{NAME} has {joined/left} the chat.'`

เราจะเอาเงื่อนไขด้านบนมาเขียนโค้ดได้แบบนี้: 

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286)

# --hints--

ในการ emit ของ event `'user'` ต้องส่งค่าออกมาเป็น object ที่มี property name, currentUsers และ connected

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis,
        'You should have an event emitted named user sending name, currentUsers, and connected'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

client ต้องจัดการและแสดงข้อมูลใหม่ที่ได้จาก event `'user'` ตามเงื่อนไข

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*num-users/gi,
        'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
      );
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*messages.*li/gi,
        'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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
