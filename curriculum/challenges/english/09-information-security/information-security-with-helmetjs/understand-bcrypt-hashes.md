---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

Fแบบทดสอบหลังจากนนี้ คุณจะต้องทำงานกับ project starter ใหม่ที่แตกต่างจากก่อนหนานี้ ดู starter project ที่จะใช้ได้ที่ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt) หรือโคลนจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/)

Bcrypt hashes  มีความปลอดภัยมาก โดยพื้นฐานแล้วแฮชคือลายนิ้วมือของข้อมูลดั้งเดิม ซึ่งไม่ซ้ำกันเสมอ ทำได้โดยการป้อนข้อมูลต้นฉบับลงในอัลกอริทึมและส่งคืนผลลัพธ์ที่มีความยาวคงที่ เพื่อทำให้กระบวนการนี้ซับซ้อนยิ่งขึ้นและทำให้ปลอดภัยยิ่งขึ้น คุณยังสามารถ *salt*  แฮชของคุณได้อีกด้วย การ salt แฮชของคุณเกี่ยวข้องกับการเพิ่มข้อมูลแบบสุ่มไปยังข้อมูลดั้งเดิมก่อนกระบวนการแฮช ซึ่งทำให้ถอดรหัสแฮชยากขึ้นอีก

BCrypt hashes จะมีหน้าตาประมาณ `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` ซึ่งมีโครงสร้างเสมอ ข้อมูลขนาดเล็กชิ้นแรก `$2a` เป็นตัวกำหนดว่ามีการใช้อัลกอริธึมแฮชประเภทใด ส่วนถัดไป `$13` กำหนด *cost* ซึ่ง cost จะเกี่ยวกับพลังงานที่ใช้ในการคำนวณแฮช มันอยู่ในมาตราส่วนลอการิทึม 2^cost และกำหนดจำนวนครั้งที่ข้อมูลถูกใส่ผ่านอัลกอริธึมการแฮช ตัวอย่างเช่น ที่ cost 10 คุณสามารถแฮชรหัสผ่านได้ 10 รหัสต่อวินาทีบนคอมพิวเตอร์โดยเฉลี่ย อย่างไรก็ตาม ที่cost 15 จะใช้เวลา 3 วินาทีต่อแฮช... และอย่างกรณีที่มากกว่านั้น cost 31 อาจจะใช้เวลาหลายวันกว่าจะแฮชสำเร็จ cost 12 ถือว่าปลอดภัยมากในขณะนี้ ในส่วนสุดท้ายของแฮชของคุณ `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` มันอาจจะดูเหมือนชุดตัวเลข เครื่องหมายจุด และตัวอักษรจำนวนมาก แต่จริงๆ แล้วเป็นข้อมูลสองส่วนแยกกัน อักขระ 22 ตัวแรกเป็น salt ในข้อความธรรมดาและส่วนที่เหลือเป็นรหัสผ่านที่แฮช!

# --instructions--

เริ่มการใช้งาน BCrypt โดยการเพิ่มมันเป็น dependency ในโปรเจคของคุณ และ require มันเป็น 'bcrypt' ในเซิร์ฟเวอร์ของคุณ

เพิ่มโค้ดของคุณสำหรับบทเรียนนี้ในไฟล์ `server.js` ภายในโค้ดที่เราได้เริ่มไว้ให้คุณแล้ว อย่าเปลี่ยนหรือลบโค้ดที่เราได้เตรียมไว้ให้คุณ

ส่งเว็บเพจของคุณมา เมื่อคุณคิดว่าทำสำเร็จแล้ว

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

BCrypt ควรถูก require อย่างถูกต้อง

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
