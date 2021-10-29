---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

เมื่อต้องการบันทึกเอกสาร MongoDB จะเพิ่มฟิลด์ `_id` โดยอัตโนมัติ และตั้งค่าให้เป็นคีย์ตัวเลขหรือตัวอักษรที่มีลักษณะไม่ซ้ำกัน ซึ่งสามารถค้นหาได้ด้วย `_id` และยังเป็นการดำเนินการที่ใช้บ่อยมาก ดังนั้น Mongoose จึงมีวิธีเฉพาะสำหรับการค้นหานี้

# --instructions--

แก้ไขฟังก์ชัน `findPersonById` เพื่อที่จะค้นหาบุคคลๆหนึ่งจาก  `_id` โดยการใช้  `Model.findById() -> Person` และใช้ฟังก์ชั่นอาร์กิวเมนจ์ `personId` เป็นคีย์ในการสืบค้น

# --hints--

สามารถค้นหาไอเทมโดยการใช้ ID ได้สำเร็จ

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/find-by-id').then(
    (data) => {
      assert.equal(data.name, 'test', 'item.name is not what expected');
      assert.equal(data.age, 0, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['none'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0, 'The item should be not previously edited');
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
