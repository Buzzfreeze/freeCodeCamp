---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

query จะไม่ทำงาน ถ้าหากไม่ส่งการเรียกกลับเป็นอาร์กิวเมนต์ไปยัง `Model.find()` (หรือวิธีการค้นหาอื่นๆ) ซึ่งคุณสามารถจัดเก็บ query ในตัวแปรเพื่อใช้งานในภายหลังได้ ออบเจ็คประเภทนี้ช่วยให้คุณสร้าง query โดยใช้ซินแท็คการโยง(chaining syntax) 
ในการค้นหา db จะดำเนินการเมื่อคุณเชื่อมโยงกับวิธี `.exec()` คุณต้องส่งการส่งกลับของคุณไปยังวิธีสุดท้ายนี้เสมอ เนื่องจากมีตัวช่วย query จำนวนมาก และยังใช้งานกันมากที่สุดอีกด้วย

# --instructions--

แก้ไขฟังก์ชัน `queryChain` เพื่อค้นหาผู้คนที่ชื่นชอบอาหารเป็นอย่างๆ โดยตัวแปรชื่อ `foodToSearch` จัดเรียงตาม `name` และจำกัดผลลัพธ์ไว้ที่เอกสารสองฉบับและซ่อนอายุ เช่น `.find()`, `.sort()`, `.limit()`, `.select()`, `.exec()` ส่งการเรียกกลับด้วย `done(err, data)` ไปที่ `exec()`

# --hints--

ตัวช่วย query แบบผูกมัด (chaining) จะช่วยให้สำเร็จมากขึ้น

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
