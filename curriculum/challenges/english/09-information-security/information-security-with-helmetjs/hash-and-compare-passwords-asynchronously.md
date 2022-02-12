---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-bcrypt/)

เนื่องจากการ hash ถูกออกแบบให้ใช้พลังการประมวลผลอย่างหนัก ขอแนะนำให้ทำแบบ asynchronous บนเซิร์ฟเวอร์ของคุณ เพื่อหลีกเลี่ยงการบล็อกการเชื่อมต่อในขณะที่ทำการ hash อยู่ 
วิธีการ hash รหัสผ่านแบบ asynchronous คือการเรียกฟังก์ชันนี้:

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*เก็บ hash ลงใน db*/
});
```

# --instructions--

ให้เพิ่มฟังก์ชันการแฮชนี้ในเซิร์ฟเวอร์ของคุณ (เราได้กำหนดตัวแปรที่ใช้ในฟังก์ชันให้แล้ว) และ log ลงในคอนโซล 
ซึ่งปกติแล้วจุดนี้จะเป็นจุดที่คุณเก็บ hash ลงฐานข้อมูล

เมื่อคุณต้องการหาว่าค่าที่รับเข้ามาเป็นตัวเดียวกับ hash หรือไม่ คุณก็แค่ใช้ฟังก์ชัน compare:

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

ให้เพิ่มโค้ดด้านบนไว้ในฟังก์ชัน hash ของคุณ (เพราะคุณต้องรอให้ hash เสร็จ ก่อนที่จะเรียกใช้ฟังก์ชัน compare) หลังจากที่ log hash และ `res` ลงในคอนโซลในฟังก์ชัน compare แล้ว คราวนี้ในคอนโซลต้องแสดงข้อความ 'true' 
ถ้าคุณเปลี่ยน 'myPlaintextPassword' ในฟังก์ชัน compare เป็น 'someOtherPlaintextPassword' ในคอนโซลต้องแสดงข้อความ 'false' แทน

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

ส่งเว็บเพจของคุณมา เมื่อคุณคิดว่าทำสำเร็จแล้ว

# --hints--

ควรสร้าง async hash และ ใช้ compare ได้อย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi,
        'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'
      );
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi,
        'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'
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
