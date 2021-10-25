---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2
forumTopicId: 301537
dashedName: create-many-records-with-model-create
---

# --description--

บางครั้งคุณจำเป็นต้องสร้างตัวอย่างหลายตัวในโมเดลของคุณ เช่น เมื่อทำการ seed ฐานข้อมูลด้วยข้อมูล `Model.create()` , การรับอาร์เรย์ของอ็อบเจ็ค เช่น `[{name: 'John', ...}, {...}, ...]` เป็นอาร์กิวเมนต์แรก และบันทึกทั้งหมดไว้ใน db .

# --instructions--

แก้ไขฟังก์ชั่น  `createManyPeople` เพื่อทำให้คนใช้งานได้หลายคนโดยการใช้ `Model.create()` ด้วยอาร์กิวเมนต์ `arrayOfPeople`

**Note:** คุณสามารถใช้โมเดลที่คุณสร้างจากตัวอย่างในแบบฝึกหัดก่อนหน้าซ้ำได้

# --hints--

ควรที่จะกสร้างรายการ db หลายรายการพร้อมกันได้สำเร็จ

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/create-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'John', age: 24, favoriteFoods: ['pizza', 'salad'] },
      { name: 'Mary', age: 21, favoriteFoods: ['onions', 'chicken'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an array');
      assert.equal(
        data.length,
        2,
        'the response does not contain the expected number of items'
      );
      assert.equal(data[0].name, 'John', 'The first item is not correct');
      assert.equal(
        data[0].__v,
        0,
        'The first item should be not previously edited'
      );
      assert.equal(data[1].name, 'Mary', 'The second item is not correct');
      assert.equal(
        data[1].__v,
        0,
        'The second item should be not previously edited'
      );
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
