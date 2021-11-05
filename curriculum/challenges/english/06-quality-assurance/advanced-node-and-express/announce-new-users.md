---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

ห้องสนทนาจำนวนมากสามารถประกาศเมื่อผู้ใช้เชื่อมต่อหรือยกเลิกการเชื่อมต่อ แล้วแสดงต่อผู้ใช้งานที่เชื่อมต่อทั้งหมดในการสนทนา ขณะผู้เรียนกำลังมีเหตุการณ์ในการเชื่อมต่อและยกเลิกการเชื่อมต่อ ผู้เรียนจะต้องแก้ไขเหตุการณ์นี้เพื่อรองรับ feature ดังกล่าว วิธีดีที่สุด คือ การส่งข้อมูล 3 ส่วนพร้อมกับเหตุการณ์: ชื่อของผู้ใช้ที่เชื่อมต่อ/ตัดการเชื่อมต่อ, จำนวนผู้ใช้ปัจจุบัน และหากชื่อนั้นเชื่อมต่อหรือถูกตัดการเชื่อมต่อ

เปลี่ยนชื่อเหตุการณ์เป็น `'user'` และส่งผ่านวัตถุพร้อมกับฟิลด์  'name',  'currentUsers' และ 'connected' (ให้เป็น `true` ในกรณีเชื่อมต่อ หรือ `false` สำหรับไม่มีตัดการเชื่อมต่อของผู้ใช้งาน) อย่าลืมเปลี่ยนทั้งเหตุการณ์ 'user count' และตั้งค่าการยกเลิกการเชื่อมต่อเพื่อส่ง `false`สำหรับฟิลด์'connected' แทนที่จะเป็น `true` เช่นเดียวกับเหตุการณ์ที่ปล่อยออกมาเมื่อมีการเชื่อมต่อ 

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

ตอนนี้ลูกค้าของคุณจะมีข้อมูลที่จำเป็นทั้งหมด เพื่อแสดงจำนวนผู้ใช้ปัจจุบัน และประกาศเมื่อผู้ใช้เชื่อมต่อ หรือยกเลิกการเชื่อมต่อ! ในการจัดการเหตุการณ์นี้ในฝั่ง client  เราควรฟัง `'user'' จากนั้นอัปเดตจำนวนผู้ใช้ปัจจุบันโดยใช้ jQuery เพื่อเปลี่ยนข้อความของ `#num-users' เป็น `'{NUMBER} users online'` รวมทั้งผนวก `<li>` ต่อท้ายรายการที่ไม่เรียงลำดับด้วย id `ข้อความ' ที่มี `'{NAME} has {joined/left} the chat.'`

การดำเนินการ มีลักษณะดังนี้: 

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

ส่ง page ของผู้เรียน เมื่อผู้เรียนคิดว่าทำถูกต้องแล้ว หากผู้เรียนพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสมบูรณ์ได้ [here](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286).

# --hints--

Event `'user'` should be emitted with name, currentUsers, and connected.
เหตุการณ์ `'user'` ควรมี name, currentUsers และ  connected.

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

ลูกค้าควรจัดการและแสดงข้อมูลใหม่จากเหตุการณ์ `'user'` อย่างเหมาะสม

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
