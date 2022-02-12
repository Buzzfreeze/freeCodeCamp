---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

เราได้รู้วิธีที่จะให้แพคเกจอัปเดทให้เป็น PATCH ล่าสุดโดยใช้ `~` ไปแล้ว
คราวนี้มาดูเครื่องหมาย `^` ที่จะทำให้ npm อัปเดทเวอร์ชันที่เป็น MINOR ได้กัน

เวอร์ชั่นล่าสุดของ moment จะเป็น "~2.10.2" ถ้าคุณใช้เครื่องหมาย `^` นำหน้าแพคเกจแล้ว npm จะอนุญาตให้คุณอัพเดตไปเป็นเวอร์ชั่น 2.x.x ได้

```json
"package": "^1.3.8"
```

ตัวอย่างด้านบนจะทำให้แพคเกจอัปเดทไปเป็นเวอร์ชันล่าสุด ในขอบเขตของ 1.x.x ได้

# --instructions--

ใช้เครื่องหมาย `^` นำหน้าเวอร์ชันของ moment ใน dependencies ของคุณ เพื่อให้ npm อัปเดทแพคเกจเป็นเวอร์ชัน MINOR ตัวล่าสุด

**Note:** คุณไม่ควรเปลี่ยนหมายเลขเวอร์ชันด้วยตนเอง

# --hints--

ใน "dependencies" ต้องมี "moment"

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

"moment" ต้องมีเวอร์ชันเป็น "^2.x.x"

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
