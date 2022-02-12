---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

กลับไปที่ส่วนความปลอดภัยของข้อมูล คุณอาจจำได้ว่าการจัดเก็บรหัสผ่านเป็น plain text *ไม่ปลอดภัยอย่างรุนแรง* 
คราวนี้เราจะมาใช้ BCrypt เพื่อแก้ปัญหานี้

ให้เพิ่ม `bcrypt@~5.0.0` เป็น dependency และทำการ `requre("bcrypt")` 
คุณจะต้องทำการ hash ส่วนสำคัญสองส่วนคือ: ตอนทำการลงทะเบียน/เก็บข้อมูลบัญชีใหม่ และตอนตรวจสอบรหัสผ่านเมื่อเข้าสู่ระบบ

ตอนนี้ใน route `/register` ของเรา เราเก็บรหัสผ่านของผู้ใช้ลงในฐานข้อมูลแบบนี้: `password: req.body.password` ซึ่งเราสามารถเปลี่ยนไปใช้ hash แทนได้ง่ายๆ โดยการประกาศ `const hash = bcrypt.hashSync(req.body.password, 12);` และเปลี่ยน `req.body.password` ในขั้นตอนการเก็บข้อมูล เป็น `password: hash` แทน

สุดท้าย authentication strategy ของเรา เรามีโค้ดเดิมที่ใช้ตรวจสอบรหัสผ่านอยู่แบบนี้ `if (password !== user.password) { return done(null, false); }`
แต่ตอนนี้เราได้ทำการเปลี่ยนค่าของ `user.password` เป็น hash แล้ว 

ก่อนที่เราจะแก้โค้ด ให้ลองดูว่าเราทำการตรวจสอบว่ารหัสผ่าน **ไม่** เท่ากัน จากนั้นค่อยคืนค่ามาว่า authenticate ไม่ผ่าน 
คราวนี้ พอเราใช้การตรวจสอบรหัสผ่านที่ hash มาแล้ว โค้ดของเราก็จะออกมาหน้าตาประมาณนี้:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

และนี่ก็คือวิธีการใช้ฟีเจอร์ด้านความปลอดภัยที่สำคัญที่สุด เมื่อคุณต้องเก็บรหัสผ่าน

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564)

# --hints--

ต้องใช้ BCrypt เป็น dependency.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้องทำการ `require("bcrypt")` และนำไปใช้ด้วย

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')bcrypt\1/gi,
        'You should have required bcrypt'
      );
      assert.match(
        data,
        /bcrypt.hashSync/gi,
        'You should use hash the password in the registration'
      );
      assert.match(
        data,
        /bcrypt.compareSync/gi,
        'You should compare the password to the hash in your strategy'
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
