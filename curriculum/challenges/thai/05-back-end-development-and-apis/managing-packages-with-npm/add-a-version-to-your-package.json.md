---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

`version` เป็นคำสั่งหนึ่งที่บังคับให้ไฟล์ package.json ของคุณใส่ลงไป เนื่องจากจะอธิบายถึงเวอร์ชันล่าสุดของโ)รเจคของคุณ นี่คือตัวอย่าง 

```json
"version": "1.2.0",
```

# --instructions--

กรุณาใส่ `version` ลงไฟล์ package.json ในโปรเจคคุณ 

# --hints--

package.json ควรที่จะมีคีย์ "version" ที่ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.version, '"version" is missing');
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
