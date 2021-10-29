---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--


ส่วนถัดไปของไฟล์ package.json คือส่วนของ `description` ที่มีคำอธิบายสั้นๆ แต่มันให้ข้อมูลเกี่ยวกับโปรเจคของคุณ
หากคุณมีแผนที่จะเผยแพร่แพ็คเกจไปสู่ npm  มันคือสตริงที่มีไอเดียของคุณเผยแพร่ให้กับเหล่าผู้ใช้ ถึงแม้ว่าพวกเขาติดตั้งแพ็คเกจนั้นหรือไม่ก็ตาม  แต่ว่านั่นไม่ใช่การใช้งานสำหรับ description เพียงอย่างเดียว แต่เป็นวิธีที่ดีในการสรุปสิ่งที่โปรเจคทำด้วย ซึ่งป็นสิ่งสำคัญในโปรเจค Node.js ที่จะช่วยให้นักพัฒนาคนอื่นๆ ผู้ดูแลในอนาคต หรือแม้แต่ตัวคุณเองในอนาคตเข้าใจโปรเจคอย่างรวดเร็ว

ไม่ว่าคุณจะวางแผนอะไรในโปรเจคของคุณ พวกเราขอแนะนำให้ใช้คำอธิบายตามที่เราให้  และนี่คือตัวอย่าง:

```json
"description": "A project that does something awesome",
```

# --instructions--

เพิ่ม `description` ที่ package.json ในไฟล์โปรเจคของคุณ

**Note:**โปรดจำไว้ว่า เครื่องหมาย (") สำหรับใส่ field-names และ (,)ใช้สำหรับการแยก field

# --hints--

package.json ควรที่จะมีคีย์ "description" ที่ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
