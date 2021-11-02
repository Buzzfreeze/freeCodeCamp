---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/)

การแฮชแบบซิงโครนัสนั้นง่ายพอๆ กัน แต่อาจทำให้เกิดความล่าช้าได้หากใช้ฝั่งเซิร์ฟเวอร์ที่มีค่าใช้จ่ายสูงหรือมีการแฮชบ่อยมาก การแฮชด้วยวิธีนี้ง่ายโดยการเรียกฟังก์ชันนี้

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

เพิ่มวิธีการแฮชนี้ในโค้ดของคุณ แล้วบันทึกผลลัพธ์ลงในคอนโซล อีกครั้ง ตัวแปรที่ใช้ถูกกำหนดไว้แล้วในเซิร์ฟเวอร์ ดังนั้นคุณจึงไม่จำเป็นต้องปรับเปลี่ยนพวกมัน คุณอาจสังเกตเห็นว่าแม้ว่าคุณกำลังแฮชรหัสผ่านเดียวกันกับในฟังก์ชัน async แต่ผลลัพธ์ในคอนโซลจะแตกต่างกัน เนื่องจาก salt ถูกสร้างขึ้นแบบสุ่มในแต่ละครั้งตามที่เห็นโดยอักขระ 22 ตัวแรกในสตริงที่สามของแฮช ในตอนนี้ เพื่อเปรียบเทียบการป้อนรหัสผ่านกับแฮชการซิงค์ใหม่ คุณจะต้องใช้เมธอด CompareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

ด้วยผลลัพธ์ที่เป็น Boolean ที่เป็น true หรือ false

# --instructions--

เพิ่มฟังกันเข้าไปและบันทึกผลลัพธ์ไปที่คอนโซลเพื่อดูว่ามันทำงานหรือไม่

ส่งหน้าเพจของคุณมาเมื่อคุณคิดว่าคุณได้ทำมันสำเร็จแล้ว

# --hints--

ควรสร้าง Sync hash และ ได้รับการเปรียบเทียบอย่างถูกต้อง

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
