---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

ผู้เรียนอาจสังเกตเห็นว่า จนถึงตอนนี้ได้เพิ่มจำนวนผู้ใช้เท่านั้น การจัดการกับการยกเลิกการเชื่อมต่อของผู้ใช้นั้น ง่ายพอๆ กับการจัดการการเชื่อมต่อเริ่มต้น ยกเว้นว่าต้อง listen มันในแต่ละ socket แทนที่จะฟังบนเซิร์ฟเวอร์ทั้งหมด

ในการดำเนินการนี้ ให้เพิ่ม Listener อื่นใน Listener `'connect' ที่มีอยู่ซึ่งฟัง `'disconnect'' บน  socket โดยไม่มีข้อมูลที่ส่งผ่าน คุณสามารถทดสอบฟังก์ชันนี้ได้โดยการบันทึกว่าผู้ใช้ยกเลิกการเชื่อมต่อกับ console

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

เพื่อให้แน่ใจว่าลูกค้ามีจำนวนผู้ใช้ปัจจุบันที่อัปเดตอย่างต่อเนื่อง คุณควรลดจำนวนผู้ใช้ปัจจุบันลง 1 เมื่อเกิดการยกเลิกการเชื่อมต่อ จากนั้นจึงปล่อยเหตุการณ์  'user count'  ด้วยจำนวนที่อัปเดต!

**หมายเหตุ:** เช่นเดียวกับ `'disconnect'` เหตุการณ์อื่นๆ ทั้งหมดที่ socket สามารถปล่อยไปยังเซิร์ฟเวอร์ ควรได้รับการจัดการภายใน Listener การเชื่อมต่อที่เรากำหนด 'socket' 

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้  [here](https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa).

# --hints--

เซิร์ฟเวอร์ควรจัดการกับเหตุการณ์ที่ยกเลิกการเชื่อมต่อจาก socket

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(data, /socket.on.*('|")disconnect('|")/gi, '');
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
