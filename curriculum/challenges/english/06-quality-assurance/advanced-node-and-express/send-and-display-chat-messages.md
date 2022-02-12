---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

ได้เวลาที่ client จะส่งข้อความไปยังเซิร์ฟเวอร์ และเซิร์ฟเวอร์จะ emit ข้อความไปยัง client ทุกคนแล้ว 
ในไฟล์ `client.js` คุณจะเห็นว่าเรามีโค้ดที่รอรับการส่ง form อยู่แล้ว

```js
$('form').submit(function() {
  /*logic*/
});
```

ในโค้ดด้านบนนี้ คุณต้อง emit event หลังจากประกาศ `messageToSend` แล้ว แต่ต้อง emit ก่อนที่จะล้างกล่องข้อความ `#m` 
ให้ตั้งชื่อ event นี้ว่า `'chat message'` และข้อมูลที่ส่งไปกับ event ต้องเป็น `messageToSend`
ลองดูตัวอย่าง:

```js
socket.emit('chat message', messageToSend);
```

ตอนนี้บนเซิร์ฟเวอร์ ให้คุณรอรับ event ชื่อ `'chat message'` ใน socket โดยข้อมูลที่ส่งมาจะชื่อว่า `message`  
เมื่อได้รับ event แล้ว คุณต้อง emit `'chat message'` ไปยัง socket ทั้งหมดโดยใช้ `io.emit` และส่งข้อมูลไปเป็น object ที่มี property `name` และ `message`

ใน `client.js` ให้คุณรอรับ event ชื่อ `'chat message'` และเมื่อได้รับค่าแล้ว ให้ append `<li>` ไปใน `#messages` โดยข้อความใน li จะต้องเป็น `name:message`

ณ จุดนี้ แชทควรจะทำงานได้อย่างสมบูรณ์ และส่งข้อความไปยัง client ทั้งหมดได้แล้ว

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016)

# --hints--

เซิร์ฟเวอร์ต้องรอรับ event `'chat message'` แล้วต้อง emit ออกมาตามเงื่อนไขที่ระบุ

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

client ต้องจัดการและแสดงข้อมูลใหม่ที่ได้จาก event `'chat message'` ตามเงื่อนไข

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
