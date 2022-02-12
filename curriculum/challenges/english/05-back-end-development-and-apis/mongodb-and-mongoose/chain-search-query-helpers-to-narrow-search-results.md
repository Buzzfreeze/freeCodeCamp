---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

query จะไม่ทำงาน ถ้าหากไม่ส่ง callback function เป็น argument ไปยัง `Model.find()` (หรือ method ที่ใช้ค้นหาตัวอื่น)  
คุณเก็บ query ไว้ในตัวแปรเพื่อเอามาใช้ซ้ำได้ด้วย  
การเก็บ query ไว้ในตัวแปรแบบนี้จะทำให้คุณเชื่อมการ query เข้าด้วยกันโดยใช้ chaining syntax ได้  
การค้นหาข้อมูลจะเริ่มขึ้นจริงๆเมื่อคุณใช้ method `.exec()` กับ query ที่คุณเก็บไว้ และจำเป็นต้องส่ง callback function เข้าไปใน method นี้เสมอ  
Mongoose มี method ที่ช่วยในการ query (query helper) หลายตัว ในแบบทดสอบนี้เราจะให้คุณใช้ตัวที่เป็นที่นิยมมากที่สุด

# --instructions--

ให้แก้ไขฟังก์ชัน `queryChain` เพื่อหาคนที่ชอบกินอาหารที่มีชื่อตรงกับค่าของ parameter `foodToSearch`  
ให้ทำการค้นหาตามเงื่อนไขนี้

1. เรียงผลลัพธ์ตาม `name` 
2. ดึงข้อมูลมาแค่สองข้อมูล 
3. ซ่อนอายุ (`age`) ของข้อมูล 

ให้ใช้ `.find()`, `.sort()`, `.limit()`, `.select()`, `.exec()` 
และส่ง callback `done(err, data)` ไปใน `exec()`

# --hints--

ต้องใช้การ chain เพื่อให้ค้นหาข้อมูลได้ถูกต้อง

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/query-tools',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Pablo', age: 26, favoriteFoods: ['burrito', 'hot-dog'] },
      { name: 'Bob', age: 23, favoriteFoods: ['pizza', 'nachos'] },
      { name: 'Ashley', age: 32, favoriteFoods: ['steak', 'burrito'] },
      { name: 'Mario', age: 51, favoriteFoods: ['burrito', 'prosciutto'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data.length,
        2,
        'the data array length is not what expected'
      );
      assert.notProperty(
        data[0],
        'age',
        'The returned first item has too many properties'
      );
      assert.equal(
        data[0].name,
        'Ashley',
        'The returned first item name is not what expected'
      );
      assert.notProperty(
        data[1],
        'age',
        'The returned second item has too many properties'
      );
      assert.equal(
        data[1].name,
        'Mario',
        'The returned second item name is not what expected'
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
