---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

ตอนนี้เราสามารถตรวจสอบสิทธิ์ผู้ใช้ที่เข้าถึง  `/profile` แล้ว เราจึงสามารถใช้ข้อมูลที่มีอยู่ใน `req.user' บนหน้าเว็บของเราได้!

ส่งผ่านวัตถุที่มีคุณสมบัติ `username`  และค่าของ `req.user.username` เป็นอาร์กิวเมนต์ที่สองสำหรับวิธีการ render ของมุมมองโปรไฟล์ จากนั้นไปที่มุมมอง "profile.pug" และเพิ่มบรรทัดต่อไปนี้ใต้องค์ประกอบ "h1" ที่มีอยู่ และที่ระดับการเยื้องเดียวกัน:

```pug
h2.center#welcome Welcome, #{username}!
```

สิ่งนี้จะสร้าง element  "h2" ที่มี class "center" และ id  '`welcome`' ที่มีข้อความ'`Welcome,`' ตามด้วยชื่อผู้ใช้

นอกจากนี้ ใน "profile.pug" ให้เพิ่มลิงก์ที่อ้างอิงถึงเส้นทาง`/logout` ซึ่งจะโฮสต์ยกเลิกการตรวจสอบสิทธิ์ผู้ใช้

```pug
a(href='/logout') Logout
```

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a).

# --hints--

คุณควรเพิ่มตัวแปรการแสดงผล Pug  /profile อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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
