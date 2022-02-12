---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-bcrypt/)

การ hash แบบ synchronous ก็ง่ายพอๆกัน แต่อาจทำแลคได้ถ้าใช้บนเซิร์ฟเวอร์โดยใช้ cost สูง หรือมีการ hash บ่อยมาก 
การ hash แบบนี้ ทำได้ง่ายๆโดยการเรียก method:

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

เพิ่ม method นี้ในโค้ดของคุณ แล้ว log ผลลัพธ์ลงในคอนโซล 
คราวนี้เราก็ได้เขียนตัวแปรที่ต้องใช้ไว้ให้แล้วเหมือนกัน  
คุณอาจสังเกตเห็นว่าแม้ว่าคุณกำลัง hash รหัสผ่านเดียวกันกับในฟังก์ชัน async แต่ผลลัพธ์ในคอนโซลจะแตกต่างกัน เนื่องจาก salt จะถูกสุ่มขึ้นมาใหม่ทุกครั้ง โดยค่าของ salt ก็คือตัวอักษร 22 ตัวแรกในสตริงชุดที่สามของ hash  
ต่อมาให้เปรียบเทียบรหัสผ่านกับ hash โดยคุณจะต้องใช้ method compareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

result จะเป็น boolean ที่มีค่าเป็น true หรือ false

# --instructions--

ให้เขียนฟังก์ชันแล้ว log result ออกมาที่คอนโซลเพื่อดูว่าทำงานได้หรือไม่

ส่งเว็บเพจของคุณมา เมื่อคุณคิดว่าทำสำเร็จแล้ว

# --hints--

ควรสร้าง sync hash และ ใช้ compare ได้อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
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
