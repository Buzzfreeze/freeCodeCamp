---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

ในโจทย์ท้าทายล่าสุด คุณให้ npm รวมเวอร์ชันเฉพาะของแพ็คเกจเท่านั้น ซึ่งนั่นเป็นวิธีที่มีดีในการหยุด dependencies สำหรับการที่คุณต้องการให้ส่วนต่างๆ ของโปรเจคของคุณยังคงทำงานร่วมกันได้ แต่ส่วนใหญ่ที่ใช้กัน ไม่อยากแก้ไขข้อบกพร่องกัน เนื่องจากมักจะมีแพตช์ความปลอดภัยที่สำคัญ และ (หวังว่า) จะไม่ทำลายสิ่งต่างๆ ในการทำแบบนั้น

หากต้องการให้ npm dependency อัปเดตเป็น PATCH เวอร์ชันล่าสุด คุณควรใช้เครื่องหมายตัวหนอน (`~`) เป็นตัวนำหน้าเวอร์ชัน dependency ตัวอย่างวิธีการอัปเดตเวอร์ชัน 1.3.x ใดๆ

```json
"package": "~1.3.8"
```

# --instructions--

ในไฟล์ package.json บังคับให้ใช้วิธีที่ npm อัปเกรด moment เฉพาะเวอร์ชั่นเท่านั้น คือการใช้เวอร์ชันเฉพาะ (2.10.2) แต่ตอนนี้ คุณแค่ต้องการอัพเดตให้เป็นเวอร์ชัน 2.10.x ล่าสุด

ใช้เครื่องหมายตัวหนอน (`~`) เพื่อนำหน้าเวอร์ชันของ moment ใน dependencies ของคุณและอนุญาตให้ npm อัปเดตเป็น PATCH รุ่นใหม่ล่าสุด

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

"moment" ควรที่จะแมชท์กับเวอร์ชั่น "~2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\~2\.10\.2/,
        'Wrong version of "moment". It should be ~2.10.2'
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
