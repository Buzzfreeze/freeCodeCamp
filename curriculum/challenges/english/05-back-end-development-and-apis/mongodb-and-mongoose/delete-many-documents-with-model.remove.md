---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` จะใช้เพื่อลบข้อมูลทั้งหมดที่ตรงกับเงื่อนไขที่เราระบุเข้าไป

# --instructions--

ให้แก้ไขฟังก์ชัน `removeManyPeople` เพื่อลบข้อมูลของคนทุกคนที่มีชื่อในตัวแปร `nameToRemove` โดยการใช้ `Model.remove()`  
โดยให้ส่งตัวแปรนี้ไปใน key `name` ของ document query และอย่าลืม callback function ด้วย

**Note:** `Model.remove()` จะไม่ส่งคืนค่า document ที่ถูกลบ แต่จะเป็น JSON object ที่เก็บค่าของผลลัพธ์จากการดำเนินการ และจำนวนข้อมูลที่ถูกลบแทน  
อย่าลืมส่ง object นี้มาใน callback `done()` ด้วย เพราะว่าเราต้องใช้ข้อมูลนี้เพื่อดูว่าคุณเขียนโค้ดได้ถูกหรือไม่

# --hints--

ต้องลบข้อมูลหลายๆข้อมูลในรอบเดียวได้

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/remove-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Mary', age: 16, favoriteFoods: ['lollipop'] },
      { name: 'Mary', age: 21, favoriteFoods: ['steak'] }
    ])
  }).then(
    (data) => {
      assert.isTrue(!!data.ok, 'The mongo stats are not what expected');
      assert.equal(
        data.n,
        2,
        'The number of items affected is not what expected'
      );
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
