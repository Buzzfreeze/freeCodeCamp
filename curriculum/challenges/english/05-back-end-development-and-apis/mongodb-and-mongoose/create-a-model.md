---
id: 587d7fb6367417b2b2512c07
title: Create a Model
challengeType: 2
forumTopicId: 301535
dashedName: create-a-model
---

# --description--

**CRUD** ส่วนที่ 1 - การสร้าง (CREATE) 

ในขั้นแรก เราจะต้องมี Schema ก่อน 
โดย Schema แต่ละตัวจะเป็นตัวแทนของ collection ของ MongoDB และ Schema ก็จะเป็นรากฐานในการสร้างโมเดล
เราสามารถเอา Schema มาซ้อนกันก็ได้ แต่ในแบบฝึกหัดนี้ เราจะสร้างแบบง่ายๆกันก่อน  
เราจะใช้โมเดลเพื่อสร้าง instance ของ object ของคุณ ที่เราเรียกว่า document

ในเซิร์ฟเวอร์จริง (Replit ก็เป็นเซิร์ฟเวอร์จริง) นั้น การใช้ฐานข้อมูลจะเกิดขึ้นใน handler function  
โดย handler function คือฟังก์ชันที่จะทำงานเมื่อมีเหตุการณ์ (event) เกิดขึ้น (เช่น มีคนเข้าถึง API endpoint ของคุณ) 

ในแบบฝึกหัดที่เราจะให้คุณทำต่อไป เราจะให้คุณเขียนโค้ดในรูปแบบนี้  
ฟังก์ชัน `done()` เป็น callback function ที่ต้องเรียกใช้เมื่อเราดำเนินการแบบ asynchronous เสร็จแล้ว เช่น การแทรก การค้นหา การอัปเดต หรือการลบ 
โดยฟังก์ชันนี้จะต้องเรียกใช้ตามรูปแบบมาตรฐานของ Node 
คือ ถ้าดำเนินการสำเร็จ ต้องเรียกใช้ `done(null, data)` 
แต่ถ้าดำเนินการแล้วเกิดข้อผิดพลาด ให้เรียกใช้ `done(err)` 

คำเตือน - ถ้าเราเรียกใช้บริการจากภายนอก (เช่น API ตัวอื่น) จะมีโอกาศเกิดข้อผิดพลาดขึ้นได้เสมอ!

```js
/* ตัวอย่าง */

const someFunc = function(done) {
  //... ทำอะไรซักอย่าง ซึ่งเสี่ยงผิดพลาดได้ ...
  if (error) return done(error);
  done(null, result);
};
```

# --instructions--

ให้สร้าง schema ชื่อ `personSchema` ที่มี prototype ตามนี้ :

```markup
- Person Prototype -
--------------------
name : string [required]
age :  number
favoriteFoods : array of strings (*)
```

ให้ใช้ประเภทข้อมูลพื้นฐานของ schema ของ Mongoose
ถ้าอยากจะเพิ่มฟิลด์ ตั้งค่าเริ่มต้นของฟิลด์ หรือจะใช้คำสั่ง เช่น required หรือ unique ก็ทำได้ 
ให้ลองอ่าน [Mongoose docs](http://mongoosejs.com/docs/guide.html) เพื่อศึกษาวิธีใช้ Mongoose

หลังจากนั้น ให้สร้างโมเดลชื่อ `Person` โดยใช้ `personSchema`

# --hints--

ต้องสร้าง instace โดยใช้ mongoose schema ได้สำเร็จ

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/mongoose-model', {
    name: 'Mike',
    age: 28,
    favoriteFoods: ['pizza', 'cheese']
  }).then(
    (data) => {
      assert.equal(data.name, 'Mike', '"model.name" is not what expected');
      assert.equal(data.age, '28', '"model.age" is not what expected');
      assert.isArray(
        data.favoriteFoods,
        '"model.favoriteFoods" is not an Array'
      );
      assert.include(
        data.favoriteFoods,
        'pizza',
        '"model.favoriteFoods" does not include the expected items'
      );
      assert.include(
        data.favoriteFoods,
        'cheese',
        '"model.favoriteFoods" does not include the expected items'
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
