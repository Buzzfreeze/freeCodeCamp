---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

`version` เป็นฟิลด์ที่จำเป็นต้องระบุในไฟล์ package.json เพราะว่าเป็นตัวที่จะใช้ระบุเวอร์ชันปัจจุบันของโปรเจคของคุณ

```json
"version": "1.2.0",
```

# --instructions--

ให้ระบุ `version` ในไฟล์ package.json ในโปรเจคคุณ 

# --hints--

ต้องระบุคีย์ "version" ใน package.json ให้ถูกต้อง

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
