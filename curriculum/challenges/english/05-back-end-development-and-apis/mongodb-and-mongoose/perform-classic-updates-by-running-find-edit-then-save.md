---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
challengeType: 2
forumTopicId: 301541
dashedName: perform-classic-updates-by-running-find-edit-then-save
---

# --description--

แบบทดสอบนี้จะเป็นการสอนการอัปเดทข้อมูลแบบเก่า (ซึ่งปัจจุบันนี้ก็ยังใช้ได้อยู่) ซึ่งจะเป็นการอัปเดทข้อมูล และนำข้อมูลที่อัปเดทแล้วมาใช้ (เช่น เอาข้อมูลที่อักเดทแล้วส่งไปกับ API response) 
Mongoose จะใช้ method `Model.update()` เพื่ออัปเดทข้อมูล วิธีนี้จะใช้ไดรเวอร์ low-level Mongo  
การใช้ method นี้จะทำให้อัปเดทข้อมูลหลายๆตัวพร้อมกันได้ แต่จะไม่ส่ง document ที่อัปเดตกลับคืนมา สิ่งที่ได้กลับมาจะเป็นแค่ 'status' เท่านั้น 
และการใช้วิธีนี้ทำให้การตรวจสอบโมเดลทำได้ยาก เพราะเป็นการเรียกใช้ไดร์เวอร์ mongo โดยตรง

# --instructions--

ให้แก้ไขฟังก์ชัน `findEditThenSave` เพื่อหาคนที่มี `_id` ตรงกับ `personId` 
และให้เพิ่ม `"hamburger"` ลงใน array `favoriteFoods` ของคนๆนั้น (ใช้ `Array.push()` ก็ได้)  
จากนั้นใน callback function ของ `find()` ให้ทำการ `save()` เพื่ออัพเดต `Person`

**Note:** ถ้าใน schema คุณประกาศ `favoriteFoods` ไว้เป็น array โดยไม่ระบุประเภท (เช่น `[String]`) คุณอาจจะต้องเขียนโค้ดเพิ่มนิดนึง
ถ้าเป็นกรณีนี้ ประเภทของข้อมูลใน `favoriteFoods` จะถูกกำหนดเป็น Mixed ทำให้คุณจะต้องเขียนโค้ดเพื่อระบุว่าฟิลด์นี้ถูกแก้ไขไปแล้ว โดยใช้ `document.markModified('edited-field')` 

ลองดูตัวอย่างจาก [Mongoose documentation](https://mongoosejs.com/docs/schematypes.html#Mixed)

# --hints--

ต้อง ค้นหา-แก้ไข-อัปเดตข้อมูลได้สำเร็จ

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
