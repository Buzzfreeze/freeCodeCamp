---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Mongoose เวอร์ชันล่าสุดมีวิธีทำให้การอัปเดตเอกสารง่ายขึ้นมาก คุณลักษณะขั้นสูงบางอย่าง (เช่น hooks pre/post การตรวจสอบความถูกต้อง) มีการทำงานแตกต่างไปจากวิธีนี้ ดังนั้นวิธีการแบบคลาสสิกจึงยังคงเป็นประโยชน์อย่างมากในหลายๆสถานการณ์  เช่น
`findByIdAndUpdate()` สามารถใช้เมื่อค้นหาด้วย id

# --instructions--

แก้ไขฟังก์ชัน `findAndUpdate` เพื่อหาบุคคลใน `Name` เเละตั้งค่าอายุของบุคคลได้ด้วย `20` ใช้พารามิเตอร์ `personName` เป็นคีย์ในการค้นหา

**Note:** คุณควรส่งคืนค่าเอกสารที่อัปเดตได้ ซึ่งในการทำเช่นนั้น คุณต้องส่งเอกสารตัวเลือก `{ new: true }` เป็นอาร์กิวเมนต์ที่ 3 ไปยัง `findOneAndUpdate()`  วิธีนี้จะคืนค่าอ็อบเจ็คที่ไม่ได้แก้ไข โดยค่าเริ่มต้น

# --hints--

ค้นหา findOneAndUpdate ได้สำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
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
