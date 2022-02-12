---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

`Versions` ของ npm package ในส่วน dependencies ในไฟล์ package.json จะใช้หลักการของ Semantic Versioning (SemVer) ซึ่งเป็นมาตรฐานในการกำหนดเวอร์ชันของซอฟท์แวร์  
โดยที่ ไลบรารี เฟรมเวิร์ค หรือเครื่องมืออื่นๆ ที่เผยแพร่บน npm ควรใช้ SemVer เพื่อให้คนที่เห็นเข้าใจถึงความเปลี่ยนแปลงของโปรเจคที่เปลี่ยนไปในแต่ละเวอร์ชัน


การรู้จัก SemVer จะมีประโยชน์อย่างมาก เมื่อคุณพัฒนาซอฟต์แวร์ที่ใช้ dependencies ของคนอื่น (ซึ่งปกติแล้วคุณก็จะต้องใช้แน่นอน)  
การเข้าใจในตัวเลขเหล่านี้จะช่วยทำให้คุณตัดสินใจในการอัพเดท dependency ที่ป้องกันคุณจากเรื่องน่าปวดหัวได้มากมาย 

นี่คือวิธีการทำงานของ Semantic Versioning ตามเว็บไซต์หลัก:

```json
"package": "MAJOR.MINOR.PATCH"
```

เวอร์ชัน MAJOR จะเพิ่มขึ้น เมื่อคุณทำการเปลี่ยนแปลง API แล้วเข้ากันไม่ได้  
ส่วนเวอร์ชัน MINOR จะเพิ่มขึ้น เมื่อคุณเพิ่มฟังก์ชันการทำงานในลักษณะที่เข้ากันได้แบบย้อนหลัง (backward compatibility) 
ส่วนเวอร์ชัน PATCH จะเพิ่มขึ้น เมื่อคุณแก้ไขจุดบกพร่องที่เข้ากันได้แบบย้อนหลัง 

ให้สรุปก็คือ PATCH เป็นการแก้ไขจุดบกพร่อง และ MINOR เป็นการเพิ่มคุณลักษณะใหม่ ๆ โดยที่คุณลักษณะเก่ายังทำงานได้เหมือนเดิม และสุดท้าย MAJOR จะเพิ่มการเปลี่ยนแปลงที่ไม่สามารถใช้ได้กับเวอร์ชันก่อนหน้า

# --instructions--

ในส่วนของ dependencies ของไฟล์ package.json ให้เปลี่ยน `version` ของ "moment" ให้มี MAJOR เป็น `2`, MINOR เป็น `10` และ PATCH เป็น `2`

# --hints--

"dependencies" ต้องมี "moment" ด้วย

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

"moment" ต้องเป็นเวอร์ชั่น "2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies.moment,
        '2.10.2',
        'Wrong version of "moment". It should be 2.10.2'
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
