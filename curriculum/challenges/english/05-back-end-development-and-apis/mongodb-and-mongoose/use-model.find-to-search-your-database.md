---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

ฟังก์ชัน `Model.find()` จะรับ query document (JSON object) เป็น argument แรกและ callback function เป็น argument ที่สอง 
โดยฟังก์ชันนี้จะคืนค่าเป็น array ของ object ที่มีข้อมูลตรงกับเงื่อนไขที่เราระบุไปใน query document 
โดย query document จะรองรับเงื่อนไขหลายรูปแบบมากๆ ให้ลองอ่าน [docs](http://mongoosejs.com/docs/guide.html) ดู เพื่อทำความเข้าใจเพิ่มเติม

# --instructions--

ให้แก้ไขฟังก์ชัน `findPeopleByName` เพื่อดึงข้อมูลของคนที่มีชื่อตรงกับ `personName` ที่ฟังก์ชันรับเข้ามา โดยใช้ <code>Model.find() -\> [Person]</code>

# --hints--

ต้องหาคนที่มีชื่อตรงกับเงื่อนไขเจอ

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
