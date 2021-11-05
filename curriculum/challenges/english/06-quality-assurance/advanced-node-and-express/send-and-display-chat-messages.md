---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

ถึงเวลาที่คุณเริ่มอนุญาตให้ลูกค้าส่งข้อความแชทไปยังเซิร์ฟเวอร์เพื่อส่งไปยังไคลเอนต์ทั้งหมด! ในไฟล์ "client.js" ควรเห็นว่ามีบล๊อคของการจัดการ code อยู่แล้วเมื่อส่งแบบฟอร์มข้อความ

```js
$('form').submit(function() {
  /*logic*/
});
```

ภายใน code ส่งแบบฟอร์ม ควรปล่อยเหตุการณ์หลังจากที่กำหนด "messageToSend" แต่ก่อนที่จะล้างกล่องข้อความ "#m" เหตุการณ์ควรมีชื่อว่า  `'chat message'` และข้อมูลควรเป็น `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

ตอนนี้บนเซิร์ฟเวอร์ ควรฟัง socketสำหรับเหตุการณ์ `'chat message'` โดยใช้ข้อมูลชื่อว่า`message` เมื่อได้รับกิจกรรมแล้ว ควรปล่อยเหตุการณ์ `'chat message'`'ไปยัง socket ทั้งหมด 'io.emit' โดยที่ข้อมูลเป็นวัตถุที่มี `name` และ `message`

ใน `client.js` คุณควรฟังเหตุการณ์ `'chat message'` และเมื่อได้รับ ให้เพิ่มรายการต่อท้าย `#messages` ด้วยชื่อ colon และข้อความ!

ณ จุดนี้ แชทควรจะทำงานได้อย่างสมบูรณ์และส่งข้อความไปยังไคลเอนต์ทั้งหมด!

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016)

# --hints--

เซิร์ฟเวอร์ควรฟัง `'chat message'` แล้วจึงปล่อยออกมาอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ลูกค้าควรจัดการและแสดงข้อมูลใหม่จากเหตุการณ์ `'chat message'` อย่างเหมาะสม

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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
