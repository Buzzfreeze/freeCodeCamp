---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

`Versions` ของ npm packages ที่เป็นส่วนหนึ่งของ dependencies ในไฟล์ package.json ติดตามสิ่งที่เรียกว่า Semantic Versioning (SemVer) มาตรฐานอุตสาหกรรมสำหรับการกำหนดเวอร์ชันซอฟต์แวร์โดยมีเป้าหมายเพื่อให้ง่ายต่อการจัดการการพึ่งพา ไลบรารี เฟรมเวิร์ก หรือเครื่องมืออื่นๆ ที่เผยแพร่บน npm ควรใช้ SemVer เพื่อสื่อสารอย่างชัดเจนว่าโปรเจคจะเปลี่ยนแปลงอย่างไร หากมีการเปลี่ยนแปลง 


การรู้จัก SemVer จะมีประโยชน์อย่างมาก เมื่อคุณพัฒนาซอฟต์แวร์ที่ใช้ dependencies ภายนอก (ซึ่งคุณทำเองเกือบทุกครั้ง) ถ้าเกิดอยู่มาวันหนึ่ง การเข้าใจในตัวเลขเหล่านี้จะช่วยคุณเข้าใจในการเปลี่ยนแปลงในโปรเจคของคุณว่าทำไมวันนี้รันไม่ได้ ทั้งๆที่เมื่อวานรันได้อยู่  นี่คือวิธีการทำงานของ Semantic Versioning ตามเว็บไซต์ทางการ:

```json
"package": "MAJOR.MINOR.PATCH"
```

เวอร์ชัน MAJOR ควรเพิ่ม เมื่อคุณทำการเปลี่ยนแปลง API แล้วเข้ากันไม่ได้ ส่วนเวอร์ชัน MINOR ควรเพิ่มขึ้น เมื่อคุณเพิ่มฟังก์ชันการทำงานในลักษณะที่เข้ากันได้แบบย้อนหลัง เวอร์ชัน PATCH ควรเพิ่มขึ้น เมื่อคุณแก้ไขจุดบกพร่องที่เข้ากันได้แบบย้อนหลัง ซึ่งหมายความว่า PATCH เป็นการแก้ไขจุดบกพร่อง และ MINORs เป็นการเพิ่มคุณลักษณะใหม่ ๆ แต่ไม่มีสิ่งใดที่ทำงานได้ก่อนหน้านี้ สุดท้าย MAJOR ได้เพิ่มการเปลี่ยนแปลงที่ไม่สามารถใช้ได้กับเวอร์ชันก่อนหน้า

# --instructions--

ในส่วนของ dependencies ของไฟล์ package.json ให้เปลี่ยน `version` ของช่วงเวลาที่ตรงกับ MAJOR เวอร์ชัน 2, MINOR เวอร์ชัน 10 และ PATCH เวอร์ชัน 2

# --hints--

"dependencies" ควรที่จะรวม "moment" ด้วย

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

"moment" ควรที่จะเป็นเวอร์ชั่น "2.10.2"

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
