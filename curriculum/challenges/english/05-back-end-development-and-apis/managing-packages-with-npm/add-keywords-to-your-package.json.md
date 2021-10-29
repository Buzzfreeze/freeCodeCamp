---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

`keywords` คือที่ที่คุณสามารถอธิบายโปรเจคของคุณได้ โดยใช้คีย์เวิร์ดที่เกี่ยวข้อง นี่คือตัวอย่างการใช้ :

```json
"keywords": [ "descriptive", "related", "words" ],
```

คุณจะเห็นว่า โครงสร้างคำสั่งนี้เป็นอาร์เรย์ที่ใช้เครื่องหมาย  (") รอบสตริง

# --instructions--

กรุณาเพิ่มอาร์เรย์ในสตริงให้เหมาะสมลงใน `keywords` ของไฟล์ package.json ในโปรเจคของคุณ

หนึ่งในคีย์เวิร์ดที่ควรมี คือ "freecodecamp"

# --hints--

package.json ควรที่จะมีคีย์ "keywords" ที่ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.keywords, '"keywords" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"keywords" field should be an Array

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.isArray(packJson.keywords, '"keywords" is not an array');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"keywords" should include "freecodecamp"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.include(
        packJson.keywords,
        'freecodecamp',
        '"keywords" does not include "freecodecamp"'
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
