---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

ในแบบทดสอบหลังจากนนี้ คุณจะต้องใช้ project อีกตัวหนึ่ง 
ดู project ที่จะใช้ได้ที่ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt) หรือ clone จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/)

การ hash ของ Bcrypt มีความปลอดภัยมาก โดยพื้นฐานแล้ว hash คือตัวแทนของข้อมูลดั้งเดิม ซึ่ง hash ของข้อมูลแต่ละตัวจะไม่ซ้ำกันเลย
การ hash จะทำได้โดยการใส่ข้อมูลต้นฉบับไปในอัลกอริทึม และส่งคืนค่าเป็นข้อมูลที่มีความยาวที่ระบุในอัลกอริทึมนั้น 
คุณสามารถใช้ *salt* ในการ hash เพื่อทำให้ข้อมูลซับซ้อนมากขึ้น ซึ่งจะทำให้ปลอดภัยยิ่งขึ้นด้วย 
การ salt คือการเพิ่มข้อมูลไปในข้อมูลเดิมก่อนทำการ hash ซึ่งทำให้การถอดรหัส hash ยากขึ้นอีก

hash ของ BCrypt จะมีหน้าตาประมาณ `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` ถึงจะดูมั่วๆ แต่ก็จะมีโครงสร้างอยู่ 
โดย `$2a` เป็นตัวกำหนดว่ามีการใช้อัลกอริธึม hash ประเภทใด ส่วนถัดไป `$13` กำหนด *cost* ซึ่ง cost จะเกี่ยวกับพลังงานที่ใช้ในการคำนวณ hash ซึ่งค่าจะเป็น log scale 2^cost และกำหนดจำนวนครั้งที่ข้อมูลจะถูก hash  
เช่น ถ้า cost เป็น 10 คุณจะ hash รหัสผ่านได้ 10 รหัสต่อวินาทีบนคอมพิวเตอร์ทั่วๆไป แต่พอ cost เป็น 15 จะใช้เวลา 3 วินาทีต่อ hash และถ้า cost เป็น 31 อาจจะใช้เวลาหลายวันกว่าจะ hash สำเร็จ  
ในตอนนี้ cost ที่เป็น 12 ถือว่าปลอดภัยมากแล้ว 
ในส่วนสุดท้ายของ hash ของคุณคือ `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` ซึ่งอาจจะดูเหมือนชุดตัวเลข เครื่องหมายจุด และตัวอักษรจำนวนมาก แต่จริงๆ แล้วเป็นข้อมูลสองส่วนแยกกัน อักขระ 22 ตัวแรกเป็น salt แบบ plain text และส่วนที่เหลือเป็นรหัสผ่านที่แฮชได้

# --instructions--

ให้เริ่มต้นโดยการเพิ่ม BCrypt เป็น dependency ในโปรเจคของคุณ และ require เป็น 'bcrypt' ในเซิร์ฟเวอร์ของคุณ

เพิ่มโค้ดของคุณของบทเรียนนี้ในไฟล์ `server.js` ระหว่างบรรทัดของโค้ดที่เราได้เริ่มเขียนไว้ให้คุณแล้ว อย่าเปลี่ยนหรือลบโค้ดที่เราเขียนไว้ให้

ส่งเว็บเพจของคุณมา เมื่อคุณคิดว่าทำสำเร็จแล้ว

# --hints--

ต้องมี BCrypt เป็น dependency

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

ต้อง require BCrypt อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
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
