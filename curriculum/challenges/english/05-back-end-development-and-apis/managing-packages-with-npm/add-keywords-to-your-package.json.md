---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

`keywords` คือ8nอฟิลด์ที่ใช้บอกว่าโปรเจคของคุณเกี่ยวกับอะไร เช่น:

```json
"keywords": [ "descriptive", "related", "words" ],
```

คุณจะเห็นว่าโครงสร้างคำสั่งนี้เป็นอาร์เรย์ของสตริง

# --instructions--

กรุณาเพิ่มอาร์เรย์ของสตริงใน `keywords` ของไฟล์ package.json ในโปรเจคของคุณ

หนึ่งในคีย์เวิร์ดที่ควรมี คือ "careervio"

# --hints--

package.json ต้องมีคีย์ "keywords" ที่ถูกต้อง

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

ค่าของฟิลด์ "keywords" ต้องเป็นอาร์เรย์

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

ใน "keywords" ต้องมีคำว่า "careervio"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.include(
        packJson.keywords,
        'careervio',
        '"keywords" does not include "careervio"'
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
