---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

ในการใช้งานที่ง่ายที่สุด, `Model.find()` ยอมรับ query (อ็อบเจ็กต์ JSON) เป็นอาร์กิวเมนต์แรก จากนั้นจึงเรียกกลับ และส่งคืนอาร์เรย์ที่แมทช์กัน นอกจากนี้ยังรองรับตัวเลือกการค้นหาที่หลากหลาย ซึ่งคุณสามารถอ่านเพิ่มเติมในเอกสาร

# --instructions--

แก้ไขฟังก์ชัน `findPeopleByName` เพื่อค้นหาชื่อของบุคคลทุกคน โดยใช้โค้ด <code>Model.find() -\> [Person]</code>

สามารถใช้ฟังก์ชันอาร์กิวเมนต์ `personName` เป็นคีย์ในการค้นหา

# --hints--

สามารถค้นหารายการทั้งหมดที่สอดคล้องกับเกณฑ์ได้สำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-all-by-name', {
    name: 'r@nd0mN4m3',
    age: 24,
    favoriteFoods: ['pizza']
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data[0].name,
        'r@nd0mN4m3',
        'item.name is not what expected'
      );
      assert.equal(data[0].__v, 0, 'The item should be not previously edited');
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
