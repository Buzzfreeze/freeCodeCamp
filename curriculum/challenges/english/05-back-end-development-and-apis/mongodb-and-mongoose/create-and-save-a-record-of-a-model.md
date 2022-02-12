---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

ในแบบทดสอบนี้ คุณจะต้องสร้างและเก็บข้อมูลของโมเดลให้ได้

# --instructions--

ภายในฟังก์ชัน `createAndSavePerson` ให้สร้าง instance ของ document โดยใช้ constructor ของ `Person` ที่คุณสร้างไว้ก่อนหน้านี้ 
และให้ส่ง object ที่มีฟิลด์เป็น `name`, `age`, และ `favoriteFoods` เข้าไปใน constructor  
โดยประเภทของข้อมูลในแต่ละฟิลด์ จะต้องตรงกับประเภทของข้อมูลที่กำหนดไว้ใน `personSchema` 
จากนั้นให้เรียกใช้ `document.save()` กับ document ที่ได้จากการเรียกใช้ constructor นั้น 
และให้ส่ง callback function เข้าไปใน `.save()` โดยใช้รูปแบบมาตรฐานของ Node (ถ้าจำไม่ได้ให้ไปดูแบบทดสอบที่แล้ว)

โดยปกติแล้ว ฟังก์ชันที่ทำการดำเนินการ CRUD (Create Read Update Delete) จะรับ callback function เป็น argument ตัวสุดท้าย

```js
/* ตัวอย่าง */

// ...
person.save(function(err, data) {
  //   ...ให้โค้ดทำงานที่นี่...
});
```

# --hints--

ต้องทำการสร้างและการบันทึกใน database สำเร็จ

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
