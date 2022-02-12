---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--


ส่วนถัดไปของไฟล์ package.json คือส่วนของ `description` ที่จะใช้อธิบายข้อมูลโปรเจคของคุณแบบสั้นๆ  
ถ้าคุณมีแผนที่จะเผยแพร่แพคเกจออกสู่โลกกว้างโดยใช้ npm  description นี้คือข้อความที่คุณจะใช้บอกผู้ใช้ว่าแพคเกจของคุณใช้ทำอะไร ไม่ว่าพวกเขาจะติดตั้งแพ็คเกจหรือไม่ก็ตาม  

แต่ว่า description ก็ไม่ได้มีประโยชน์แค่นี้ แต่เป็นที่ๆดีในการสรุปสิ่งที่โปรเจคทำด้วย ซึ่งเป็นสิ่งสำคัญในโปรเจค Node.js ที่จะช่วยให้นักพัฒนาคนอื่นๆ หรือผู้ดูแลในอนาคต หรือแม้แต่ตัวคุณเองในอนาคตเข้าใจในโปรเจคอย่างรวดเร็ว

ไม่ว่าคุณจะวางแผนอะไรในโปรเจคของคุณ พวกเราขอแนะนำให้ใช้คำอธิบายตามที่เราให้  และนี่คือตัวอย่าง:

```json
"description": "A project that does something awesome",
```

# --instructions--

ให้เพิ่ม `description` ที่ package.json ในไฟล์โปรเจคของคุณ

**Note:**อย่าลืมว่า เครื่องหมาย (") สำหรับใส่ชื่อฟิลด์ และ (,) ใช้สำหรับการแยกฟิลด์

# --hints--

package.json ต้องมีคีย์ "description"

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
