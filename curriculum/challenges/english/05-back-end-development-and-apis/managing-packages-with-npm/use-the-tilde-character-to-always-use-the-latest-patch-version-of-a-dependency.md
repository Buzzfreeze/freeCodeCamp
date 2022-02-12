---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

ในแบบทดสอบที่แล้วคุณได้ใช้ npm เพื่อเลือกแพคเกจตามเวอร์ชันที่ระบุ   
วิธีนั้นเป็นวิธีที่ดีเพราะจะทำให้ dependencies ไม่เปลี่ยนแปลงไป และส่วนต่างๆของโปรเจคจะยังทำงานได้ตามปกติ 

แต่ส่วนใหญ่เราก็คงจะอยากให้ dependency ของเราอัพเดทเพื่อแก้ไขข้อบกพร่องต่างๆ ได้อยู่บ้าง โดยที่ไม่ทำให้โปรแกรมของเราพัง

ถ้าต้องการให้ npm อัพเดท dependency แค่ PATCH เวอร์ชันล่าสุด คุณควรใช้เครื่องหมายตัวหนอน (`~`) หน้าเวอร์ชัน dependency 

ลองดูตัวอย่างการอักเดทเวอร์ชัน 1.3.x:

```json
"package": "~1.3.8"
```

# --instructions--

ในไฟล์ package.json ให้เปลี่ยนให้ npm อัพเดท moment เป็นเวอร์ชัน 2.10.x ล่าสุด

ให้ใช้เครื่องหมายตัวหนอน (`~`) นำหน้าเวอร์ชันของ moment ใน dependencies ของคุณ และซึ่งจะทำให้ npm อัปเดตเป็น PATCH เวอร์ชันล่าสุด

**Note:** คุณต้องไม่เปลี่ยนหมายเลขเวอร์ชัน

# --hints--

ใน "dependencies" ต้องมี "moment"

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

"moment" ต้องมีเวอร์ชันเป็น "~2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\~2\.10\.2/,
        'Wrong version of "moment". It should be ~2.10.2'
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
