---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/)

เนื่องจากการแฮชได้รับการออกแบบให้มีการประมวลผลแบบเข้มข้น ขอแนะนำให้ทำแบบ asynchronous บนเซิร์ฟเวอร์ของคุณเพื่อหลีกเลี่ยงการบล็อกการเชื่อมต่อขาเข้าในขณะที่คุณแฮช สิ่งที่คุณต้องทำเพื่อแฮชรหัสผ่านแบบ asynchronous คือการเรียกฟังก์ชันนี้

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

เพิ่มฟังก์ชันการแฮชนี้ในเซิร์ฟเวอร์ของคุณ (เราได้กำหนดตัวแปรที่ใช้ในฟังก์ชันให้คุณใช้แล้ว) และบันทึกลงในคอนโซลเพื่อให้คุณดู! ณ จุดนี้ คุณจะบันทึกแฮชไปยังฐานข้อมูลของคุณตามปกติ

เมื่อคุณต้องการหาว่าอินพุตใหม่เป็นข้อมูลเดียวกับแฮชหรือไม่ คุณก็แค่ใช้ฟังก์ชันเปรียบเทียบ

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

เพิ่มสิ่งนี้ลงในฟังก์ชันแฮชที่มีอยู่ของคุณ (เนื่องจากคุณต้องรอให้แฮชเสร็จสิ้นก่อนที่จะเรียกใช้ฟังก์ชันเปรียบเทียบ) หลังจากที่คุณบันทึกแฮชที่เสร็จสิ้นแล้วและบันทึก 'res' ไปยังคอนโซลภายในการเปรียบเทียบ คุณควรเห็นแฮชในคอนโซลจากนั้นพิมพ์ 'จริง'! หากคุณเปลี่ยน 'myPlaintextPassword' ในฟังก์ชันการเปรียบเทียบเป็น 'someOtherPlaintextPassword' ก็ควรเป็นเท็จ

เพิ่มสิ่งนี้ลงในฟังก์ชันแฮชที่มีอยู่ของคุณ (เนื่องจากคุณต้องรอให้แฮชเสร็จสิ้นก่อนที่จะเรียกใช้ฟังก์ชันเปรียบเทียบ) หลังจากที่คุณบันทึกแฮชที่เสร็จสิ้นแล้วและบันทึก 'res' ไปยังคอนโซลภายในการเปรียบเทียบ คุณควรเห็นแฮชในคอนโซลจากนั้น 'true' จะถูกพิมพ์ออกมา! แต่หากคุณเปลี่ยน 'myPlaintextPassword' ในฟังก์ชันการเปรียบเทียบเป็น 'someOtherPlaintextPassword' ก็ควรเป็น false

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

ส่งหน้าเพจของคุณมาเมื่อคุณคิดว่าคุณได้ทำมันสำเร็จแล้ว

# --hints--

ควรสร้าง Async hash และ ได้รับการเปรียบเทียบอย่างถูกต้อง

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
