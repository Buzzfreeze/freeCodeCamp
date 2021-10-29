---
id: 587d7fb6367417b2b2512c07
title: Create a Model
challengeType: 2
forumTopicId: 301535
dashedName: create-a-model
---

# --description--

**C**RUD พาร์ท 1 - การสร้าง (CREATE) 


ก่อนอื่นเราจะต้องมี Schema ในแต่ละ Schema จะเชื่อมกับคอลเล็กชัน MongoDB โดยกำหนดรูปร่างของเอกสารภายในคอลเล็กชันนั้น 
Schema เป็นส่วนสำคัญสำหรับโมเดล โดย Schema สามารถซ้อนทับกันเพื่อสร้างแบบจำลองที่ซับซ้อนได้ และในกรณีที่ เราจะสร้างสิ่งต่าง ๆ แบบเรียบง่าย โมเดลนี้ช่วยให้คุณสร้างออบเจ็กต์ที่เรียกว่าเอกสารได้ทันที


Replit เป็นเซิร์ฟเวอร์จริง และในเซิร์ฟเวอร์จริงจะมีการเชื่อมกันของฐานข้อมูลในฟังก์ชันตัวจัดการ ฟังก์ชันเหล่านี้จะดำเนินการเมื่อมีเหตุการณ์บางอย่างเกิดขึ้น (เช่น มีคนเข้าถึงจุดปลายบน API ของคุณ) เราจะปฏิบัติตามแนวทางเดียวกันในแบบฝึกหัดเหล่านี้ ฟังก์ชัน `done()` เป็นการเรียกกลับที่บอกเราว่าเราสามารถดำเนินการได้หลังจากเสร็จสิ้นการดำเนินการแบบอะซิงโครนัส เช่น การแทรก การค้นหา การอัปเดต หรือการลบ มันเป็นไปตามแบบแผนของ Node และควรเรียกว่า `done(null, data)` เมื่อสำเร็จ หรือ `done(err)` เมื่อมีข้อผิดพลาด

คำเตือน - เมื่อมีการเชื่อมต่อระยะไกล อาจจะเกิดข้อผิดพลาดขึ้น!

```js
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```

# --instructions--

สร้าง schema ที่เรียกว่า `personSchema` โดยมีต้นแบบดังนี้ :

```markup
- Person Prototype -
--------------------
name : string [required]
age :  number
favoriteFoods : array of strings (*)
```

ใช้ schema พื้นฐานของ Mongoose ถ้าคุณต้องการที่จะเพิ่มฟิลด์อื่นๆได้ หรือจะใช้ตัวตรวจสอบความถูกต้องอย่างง่าย เช่น จำเป็นหรือไม่,ลักษณะเฉพาะ และตั้งค่าเริ่มต้น สามารถดูใน [Mongoose docs](http://mongoosejs.com/docs/guide.html).

ตอนนี้ เรามาสร้างโมเดลที่เรียกว่า  `Person` จาก `personSchema` กัน

# --hints--

สร้างตัวอย่างจาก mongoose schema ควรที่จะสำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/mongoose-model', {
    name: 'Mike',
    age: 28,
    favoriteFoods: ['pizza', 'cheese']
  }).then(
    (data) => {
      assert.equal(data.name, 'Mike', '"model.name" is not what expected');
      assert.equal(data.age, '28', '"model.age" is not what expected');
      assert.isArray(
        data.favoriteFoods,
        '"model.favoriteFoods" is not an Array'
      );
      assert.include(
        data.favoriteFoods,
        'pizza',
        '"model.favoriteFoods" does not include the expected items'
      );
      assert.include(
        data.favoriteFoods,
        'cheese',
        '"model.favoriteFoods" does not include the expected items'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
