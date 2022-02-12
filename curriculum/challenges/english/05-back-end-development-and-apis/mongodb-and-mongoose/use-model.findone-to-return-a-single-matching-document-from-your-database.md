---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` จะทำงานเหมือน `Model.find()` แต่จะคืนค่าเป็น document แค่ตัวเดียว (ไม่ใช่อาร์เรย์) ถึงแม้ว่าจะเจอข้อมูลหลายตัวที่ตรงกับเงื่อนไขก็ตาม
วิธีนี้จะมีประโยชน์มากถ้าคุณใช้เพื่อหาข้อมูลโดยใช้ property ที่คุณตั้งค่าไว้เป็น unique (ไม่มีค่าซ้ำ)

# --instructions--

ให้แก้ไขฟังก์ชั่น `findOneByFood` เพื่อดึงข้อมูลคนที่ใน property `favoriteFoods` มีค่าของ argument `food` 
โดยใช้ `Model.findOne() -> Person`

# --hints--

ต้องค้นหาข้อมูลได้สำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-by-food', {
    name: 'Gary',
    age: 46,
    favoriteFoods: ['chicken salad']
  }).then(
    (data) => {
      assert.equal(data.name, 'Gary', 'item.name is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['chicken salad'],
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
