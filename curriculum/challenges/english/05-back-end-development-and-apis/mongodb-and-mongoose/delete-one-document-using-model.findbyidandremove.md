---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

method `findByIdAndRemove` และ `findOneAndRemove` จะทำงานเหมือนกับ method ที่ใช้อัปเดทที่เราเพิ่งได้เรียนไป

# --instructions--

ให้แก้ไขฟังก์ชัน `removeById` เพื่อที่จะลบคน 1 คนที่มี `_id` ตรงกับ  `personId` ออกจากฐานข้อมูล  
โดยให้เลือกใช้ `findByIdAndRemove()` หรือ `findOneAndRemove()`

# --hints--

ต้องลบข้อมูลหนึ่งข้อมูลได้สำเร็จ

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
