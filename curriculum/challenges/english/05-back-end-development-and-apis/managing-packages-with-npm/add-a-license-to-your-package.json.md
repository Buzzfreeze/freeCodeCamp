---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

`license` เป็นฟิลด์ที่ใช้บอกผู้ใช้ว่า เขาจะมีสิทธิ์ในระดับไหนในการใช้งานโปรเจคของคุณ

license ที่โปรเจคโอเพ่นซอร์ส่วนใหญ่ใช้คือ MIT และ BSD 
โดยเราจะระบุ license หรือไม่ก็ได้ และในประเทศส่วนใหญ่ ก็จะให้สิทธิ์ในการเป็นเจ้าของแก้ผู้สร้างโค้ดอยู่แล้ว
แต่ทางที่ดีคุณควรที่จะระบุอย่างชัดเจนให้ผู้ใช้ทราบว่า สามารถทำอะไรได้หรือไม่สามารถทำอะไรได้ 

ลองดูตัวอย่างของการใช้ license:

```json
"license": "MIT",
```

# --instructions--

ให้ระบุ `license` ในไฟล์ package.json ในโปรเจคคุณ โดยเลือกประเภทที่คุณเห็นว่าเหมาะสมได้เลย

# --hints--

ต้องระบุคีย์ "license" ใน package.json ให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
