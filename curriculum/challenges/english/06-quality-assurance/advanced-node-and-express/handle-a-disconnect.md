---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

คุณอาจเห็นว่า เราทำได้แค่เพิ่มจำนวนผู้ใช้เท่านั้น การจัดการกับการยกเลิกการเชื่อมต่อ (disconnect) ของผู้ใช้นั้น ง่ายพอๆ กับการจัดการการเชื่อมในตอนแรก 
แต่คราวนี้เราต้องรอรับ event จาก socket แต่ละตัว แทนการรอรับ event จากเซิร์ฟเวอร์

ให้เพิ่ม listener ใน listener `'connect` ที่มีอยู่ซึ่งจะรอรับ event ชื่อ `'disconnect'` บน socket โดยไม่มีข้อมูลที่ส่งเข้ามา คุณสามารถทดสอบฟังก์ชันนี้ได้โดยการ log ผู้ใช้ที่ยกเลิกการเชื่อมต่อไว้บน console

```js
socket.on('disconnect', () => {
  /*เขียนโค้ดที่จะทำงานเมื่อผู้ใช้ยกเลิกการเชื่อมต่อ*/
});
```

เพื่อให้ใน client แสดงจำนวนผู้ใช้ปัจจุบันเสมอ ต้องลด `currentUsers` ลง 1 เมื่อเกิดการยกเลิกการเชื่อมต่อ 
แล้วจึง emit event 'user count' โดยส่งจำนวนล่าสุดไป

**หมายเหตุ:** `'disconnect'` ก็จะเหมือนกับ event ตัวอื่นๆที่ socket จะ emit ไปยังเซิร์ฟเวอร์ได้ ซึ่งจะต้องถูกจัดการใน listener ที่เราประกาศ 'socket' ไว้

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa)

# --hints--

เซิร์ฟเวอร์ควรจัดการกับ event 'disconnect' จาก socket

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

client ต้องรอรับ event ชื่อ 'user count'

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
