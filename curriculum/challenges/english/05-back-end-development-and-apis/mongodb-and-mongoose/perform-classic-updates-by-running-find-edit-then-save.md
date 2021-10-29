---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
challengeType: 2
forumTopicId: 301541
dashedName: perform-classic-updates-by-running-find-edit-then-save
---

# --description--

ในสมัยก่อน นี่คือสิ่งที่คุณต้องทำหากต้องการแก้ไขเอกสารและใช้งานได้ (เช่น การส่งกลับในการตอบกลับของเซิร์ฟเวอร์) 
Mongoose มีวิธีการอัปเดตเฉพาะด้วย `Model.update()` โดยมันเชื่อมไว้กับไดรเวอร์ low-level Mongo  มันสามารถแก้ไขเอกสารจำนวนมากให้ตรงกับเกณฑ์บางอย่างทีละเป็นกลุ่มๆได้ แต่จะไม่ส่งเอกสารที่อัปเดตกลับคืนมา มีเพียงแค่ข้อความ 'สถานะ'เท่านั้น ยิ่งไปกว่านั้น วิธีนี้ทำให้การตรวจสอบโมเดลทำได้ยาก เพราะมันแค่เรียกไดรเวอร์ mongo โดยตรงเท่านั้น

# --instructions--

แก้ไขฟังก์ชัน `findEditThenSave` เพื่อหาบุคคลที่อยู่ใน `_id` (หรือจะใช้วิธีข้างบนก็ได้) ด้วยพารามิเตอร์ `personId`โดยคนจากคีย์ เพิ่ม `"hamburger"` ที่ลิสท์ของบุคคล `favoriteFoods` (หรือคุณอาจจะใช้ `Array.push()`) จากนั้นเรียกการคืนกลับภายใน และใช้ `save()` เพื่ออัพเดต `Person`

**Note:** มันอาจจะเป็นเรื่องยาก หากใน Schema ของคุณ คุณประกาศ `favoriteFoods` เป็น Array โดยไม่ระบุประเภท (เช่น `[String]`) ถ้ากรณีดังกล่าวเกิดขึ้น ค่าเริ่มต้นของ `favoriteFoods` ข้อมูลจะผสมกันไม่แยกประเภท และคุณต้องแก้ไขด้วยตัวเอง ถ้าแก้เสร็จให้ระบุว่า `document.markModified('edited-field')` สามารถดูตัวอย่างได้จาก [Mongoose documentation](https://mongoosejs.com/docs/schematypes.html#Mixed)

# --hints--

สามารถ ค้นหา-แก้ไข-อัปเดตรายการได้สำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-edit-save', {
    name: 'Poldo',
    age: 40,
    favoriteFoods: ['spaghetti']
  }).then(
    (data) => {
      assert.equal(data.name, 'Poldo', 'item.name is not what is expected');
      assert.equal(data.age, 40, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['spaghetti', 'hamburger'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 1, 'The item should be previously edited');
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
