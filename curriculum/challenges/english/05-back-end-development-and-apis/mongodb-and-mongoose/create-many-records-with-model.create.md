---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2
forumTopicId: 301537
dashedName: create-many-records-with-model-create
---

# --description--

บางครั้งคุณจำเป็นจะต้องสร้างโมเดลของคุณหลายๆ instance 
เช่น เวลาที่คุณเพิ่งสร้างฐานข้อมูล และจะเก็บข้อมูลเริ่มต้นลงไปในฐานข้อมูลนั้น  
คุณสามารถทำได้โดยการใช้ `Model.create()` โดยฟังก์ชันนี้จะรับค่าเป็น array ของ object เช่น `[{name: 'John', ...}, {...}, ...]` เป็น argument แรก และเก็บค่าทั้งหมดลงฐานข้อมูล

# --instructions--

ให้แก้ฟังก์ชัน `createManyPeople` เพื่อเก็บข้อมูลหลายๆตัวลงในฐานข้อมูล โดยใช้ `Model.create()` และใช้ argument เป็น `arrayOfPeople`

**Note:** คุณสามารถใช้โมเดลที่คุณสร้างจาก instance ของแบบฝึกหัดที่แล้วซ้ำได้

# --hints--

ต้องเก็บข้อมูลหลายๆตัวลงฐานข้อมูลได้สำเร็จ

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
