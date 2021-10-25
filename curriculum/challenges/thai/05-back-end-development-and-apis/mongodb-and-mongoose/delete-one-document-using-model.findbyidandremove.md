---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` และ `findOneAndRemove` เหมือนกับวิธีการอัพเดทครั้งก่อน พวกนี้ทำหน้าที่ส่งเอกสารที่ถูกนำออกไปยังฐานข้อมูล bd 
โดยปกติ แล้วจะใช้อาร์กิวเมนต์ของฟังก์ชัน `personId` เป็นคีย์ค้นหา

# --instructions--

แก้ไขฟังก์ชัน `removeById` เพื่อที่จะลบผู้ใช้ 1 คนออกจาก `_id` คุณควรที่จะใช้วิธีใดวิธีหนึ่งจาก 2 อันนี้ `findByIdAndRemove()` หรือ `findOneAndRemove()`

# --hints--

สามารถลบไอเทมทีละ 1 ชิ้นได้สำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/remove-one-person', {
    name: 'Jason Bourne',
    age: 36,
    favoriteFoods: ['apples']
  }).then(
    (data) => {
      assert.equal(data.name, 'Jason Bourne', 'item.name is not what expected');
      assert.equal(data.age, 36, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['apples'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0);
      assert.equal(data.count, 0, 'the db items count is not what expected');
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
