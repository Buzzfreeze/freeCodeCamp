---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

คราวนี้ถ้าเป็น Mongoose รุ่นใหม่ๆ คุณจะอัปเดท document ได้ง่ายขึ้นมาก 
แต่ฟีเจอร์บางตัว (เช่น hook pre/post หรือการ validate ข้อมูล) อาจทำงานไม่ตรงกับที่เราคิดถ้าใช้วิธีใหม่นี้  
ในหลายๆกรณีเราจึงยังต้องใช้การอัปเดทแบบเดิมอยู่  

เรามาเรียน method ใหม่กันก่อนซักหนึ่งตัวละกัน 
เราจะใช้ method `findByIdAndUpdate()` เพื่อค้นหา และอัปเดทข้อมูลตาม id

# --instructions--

ให้แก้ไขฟังก์ชัน `findAndUpdate` เพื่อหาคนที่มี `Name` ตรงกับ `personName` เเละอัปเดทอายุ (`age`) เป็น `20`

**Note:** ต้องคืนค่าเป็น document ที่อัปเดทแล้วออกมา ในการให้คืนค่าแบบนี้ คุณจะต้องส่ง `{ new: true }` เข้าไปเป็น argument ตัวที่ 3 ในการเรียกใช้ `findOneAndUpdate()`  
ถ้าเราไม่ระบุ method นี้จะคืนค่าเป็น object ก่อนการแก้ไข

# --hints--

การใช้ findOneAndUpdate ต้องทำงานได้สำเร็จและถูกต้อง

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
