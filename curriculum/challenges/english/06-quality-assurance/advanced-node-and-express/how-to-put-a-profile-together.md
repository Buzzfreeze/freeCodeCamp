---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

ตอนนี้เราสามารถตรวจสอบสิทธิ์ผู้ใช้ที่เข้าถึง  `/profile` ได้แล้ว เราจึงสามารถใช้ข้อมูลที่มีอยู่ใน `req.user` บนหน้าเว็บของเราได้

ให้ส่ง object ที่มี property `username` ซึ่งดึงค่ามาจาก `req.user.username` เป็น argument ที่สองของ method render ของหน้า `/profile` 
จากนั้นให้ไปที่ไฟล์ `profile.pug` และเขียนโค้ดด้านล่างนี้ ใต้ element `h1` ที่มีอยู่ ที่การย่อหน้าระดับเดียวกัน:

```pug
h2.center#welcome Welcome, #{username}!
```

โค้ดด้านบนจะสร้าง element `h2` ที่มี class เป็น '`center`' และ id เป็น '`welcome`' ซึ่งมีข้อความข้างในเป็น '`Welcome,`' ตามด้วยชื่อผู้ใช้

นอกจากนี้ ในไฟล์ `profile.pug` ให้เพิ่มลิงก์ไปยัง `/logout` ซึ่งจะเป็นลิงก์ที่ใช้ unauthenticate ผู้ใช้

```pug
a(href='/logout') Logout
```

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a)

# --hints--

ต้องเพิ่มตัวแปรการแสดงผล Pug ไปในหน้า /profile อย่างถูกต้อง

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
