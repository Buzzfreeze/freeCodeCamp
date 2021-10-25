---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` จะทำงานเหมือน `Model.find()` แต่จะส่งคืนเอกสารเพียงฉบับเดียว (ที่ไม่ใช่อาร์เรย์) แม้ว่าจะมีหลายรายการก็ตาม วิธีนี้มีประโยชน์อย่างยิ่ง เมื่อทำการค้นหาโดยคุณสมบัติที่คุณได้ประกาศไว้แบบไม่ซ้ำกัน

# --instructions--

แก้ไขฟังก์ชั่น `findOneByFood` เพื่อที่จะค้นหาบุคคลที่เมีอาหารบางอย่างในรายการโปรด ใช้ฟังก์ชัน `Model.findOne() -> Person` และใช้ฟังก์ชั่นอาร์กิวเมนต์ `food` เป็นคีย์ในการค้นหา

# --hints--

สามารถค้นหาไอเทมได้สำเร็จ

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
