---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

เวลาที่เก็บค่าของ document ลงฐานข้อมูล MongoDB จะเพิ่มฟิลด์ `_id` ให้โดยอัตโนมัติ ซึ่ง `_id` นี้จะเก็บค่าที่เป็น alphanumeric (ตัวเลขและตัวอักษรผสมกัน)  
การค้นหาด้วยฟิลด์ `_id` เป็นสิ่งที่ในโปรแกรมทั่วๆไปจะทำบ่อยมาก ดังนั้น Mongoose จึงได้สร้าง method สำหรับการค้นหาแบบนี้ให้โดยเฉพาะเลย

# --instructions--

ให้แก้ไขฟังก์ชัน `findPersonById` เพื่อดึงข้อมูลของคนที่มี `_id` ตรงกับ argument `personId` โดยการใช้ `Model.findById() -> Person`

# --hints--

ต้องดึงข้อมูลของคนที่มี id ตรงกับที่ระบุได้

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
