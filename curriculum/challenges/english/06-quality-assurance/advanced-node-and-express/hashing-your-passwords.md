---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

กลับไปที่ส่วนความปลอดภัยของข้อมูล อาจจำได้ว่าการจัดเก็บรหัสผ่านแบบข้อความธรรมดานั้น *ไม่* โอเค ตอนนี้ถึงเวลาที่จะใช้ BCrypt เพื่อแก้ปัญหานี้

เพิ่ม `bcrypt@~5.0.0` เป็นการขึ้นต่อกัน และต้องใช้ในเซิร์ฟเวอร์ของคุณ จะต้องจัดการกับการแฮชใน 2 ส่วนสำคัญ: ที่ที่จัดการการลงทะเบียน/บันทึกบัญชีใหม่ และเมื่อตรวจสอบเพื่อดูว่ารหัสผ่านถูกต้องเมื่อเข้าสู่ระบบ

ขณะนี้อยู่ในเส้นทางการลงทะเบียนของเรา ใส่รหัสผ่านของผู้ใช้ลงในฐานข้อมูลดังนี้: `รหัสผ่าน: req.body.password' วิธีง่ายๆ ในการใช้การบันทึกแฮชแทนคือการเพิ่มสิ่งต่อไปนี้ก่อนตรรกะฐานข้อมูลของคุณ `const hash = bcrypt.hashSync(req.body.password, 12);` และแทนที่ `req.body.password' ในฐานข้อมูล บันทึกด้วยเพียง `รหัสผ่าน: แฮช'

สุดท้าย ในกลยุทธ์การตรวจสอบสิทธิ์ของเรา เราจะตรวจสอบสิ่งต่อไปนี้ในโค้ดของเราก่อนที่จะดำเนินการให้เสร็จสิ้น: `if (password !== user.password) { return done(null, false); }`. หลังจากทำการเปลี่ยนแปลงก่อนหน้านี้ ตอนนี้ `user.password` เป็นแฮช ก่อนทำการเปลี่ยนแปลงรหัสที่มีอยู่ ให้สังเกตว่าคำสั่งตรวจสอบอย่างไรว่ารหัสผ่าน **ไม่** เท่ากัน จากนั้นส่งคืนแบบไม่ตรวจสอบสิทธิ์ ด้วยเหตุนี้ รหัสจึงอาจมีลักษณะดังนี้ เพื่อตรวจสอบรหัสผ่านที่ป้อนกับแฮชอย่างถูกต้อง:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

นี้คือทั้งหมดที่ใช้ในการติดตั้งหนึ่งในคุณสมบัติ security ที่สำคัญที่สุดเมื่อต้องเก็บรหัสผ่าน! 

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564).

# --hints--

BCrypt ควรเป็น dependency.

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

BCrypt ควรมีความจำเป็นและนำไปใช้อย่างถูกต้อง 

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
