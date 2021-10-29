---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

`license` คือที่ที่คุณแจ้งให้ผู้ใช้ทราบถึงสิ่งที่พวกเขาได้รับอนุญาตในการทำโปรเจคของคุณ

license ทั่วไปเหมาะสำหรับโปรเจคโอเพ่นซอร์สอย่าง MIT และ BSD 
โดยปกติแล้ว license อาจจะไม่มีความจำเป็น เนื่องจากมีกฎหมายลิขสิทธิ์ในประเทศส่วนใหญ่รองรับ
อย่างไรก็ตาม ในทางที่ดีคุณควรที่จะระบุอย่างชัดเจนให้ผู้ใช้ทราบว่า สามารถทำอะไรได้หรือไม่สามารถทำอะไรได้ นี่คือตัวอย่างของ license:

```json
"license": "MIT",
```

# --instructions--

กรุณาใส่ `license` ลงไฟล์ package.json ในโปรเจคคุณ เพื่อเพิ่มความสะดวกมากยิ่งขึ้น

# --hints--

package.json ควรที่จะมีคีย์ "license" ที่ถูกต้อง

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
