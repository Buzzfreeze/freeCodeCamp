---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

คล้ายกับที่เครื่องหมานตัวหนอนที่เราได้เรียนรู้ในโจทย์ท้าทายล่าสุด ทำให้ npm ติดตั้ง PATCH ล่าสุดสำหรับ dependency ส่วนเครื่องหมายคาเร็ต (`^`) จะเป็นตัวอนุญาตให้ npm ที่ติดตั้งอัปเดตในอนาคตได้เช่นกัน ซึ่งข้อแตกต่างคือคาเร็ตจะอนุญาตทั้งการอัปเดต MINOR และ PATCH

เวอร์ชั่นล่าสุดของ moment ควรจะเป็น "~2.10.2" ซึ่งเป็นไปตาม npm ที่ติดตั้งในเวอร์ชั่นล่าสุด 2.10.x ถ้าหากคุณใช้เครื่องหมาย (^) เป็นตัวนำหน้า npmจะอนุญาตให้คุณอัพเดตไปเป็นเวอร์ชั่น 2.x.x อื่นๆได้

```json
"package": "^1.3.8"
```

This would allow updates to any 1.x.x version of the package.

# --instructions--

ใช้เครื่องหมายคาเร็ต (`^`) เพื่อนำหน้าเวอร์ชันของ moment ใน dependencies ของคุณและอนุญาตให้ npm อัปเดตเป็น MINOR รุ่นใหม่ล่าสุด

**Note:** คุณไม่ควรเปลี่ยนหมายเลขเวอร์ชันด้วยตนเอง!

# --hints--

"dependencies" ควรรวมอยู่ใน "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"moment" ควรที่จะแมทช์กับเวอร์ชั่น "^2.x.x"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\^2\./,
        'Wrong version of "moment". It should be ^2.10.2'
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
