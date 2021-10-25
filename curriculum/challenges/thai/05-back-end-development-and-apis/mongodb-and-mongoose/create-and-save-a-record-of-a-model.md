---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

ในโจทย์นี้ คุณจะต้องสร้างและบันทึกข้อมูลของโมเดลให้ได้

# --instructions--

ภายในฟังก์ชัน `createAndSavePerson` ให้สร้างตัวอย่างเอกสารโดยใช้ตัวสร้างโมเดล `Person` ที่คุณสร้างไว้ก่อนหน้านี้ ส่งผ่านอ็อบเจ็กท์ `name`, `age`, และ `favoriteFoods`  ประเภทเหล่านี้ต้องสอดคล้องกับ `personSchema` จากนั้นเรียก `document.save()` บนตัวอย่างเอกสารที่ส่งคืน โดยส่งการเรียกกลับให้ใช้ Node 
นี่เป็นรูปแบบทั่วไปของวิธี CRUD โดยต่อไปนี้ทั้งหมดจะใช้ฟังก์ชันเรียกกลับเป็นอาร์กิวเมนต์สุดท้าย

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

การสร้างและการบันทึกใน db ควรที่จะสำเร็จ

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/create-and-save-person').then(
    (data) => {
      assert.isString(data.name, '"item.name" should be a String');
      assert.isNumber(data.age, '28', '"item.age" should be a Number');
      assert.isArray(
        data.favoriteFoods,
        '"item.favoriteFoods" should be an Array'
      );
      assert.equal(data.__v, 0, 'The db item should be not previously edited');
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
