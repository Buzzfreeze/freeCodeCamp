---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

หนึ่งในเหตุผลที่สำคัญที่สุดในการใช้ package manager คือ การจัดการกับ dependency  โดยปกติจะต้องตรวจสอบให้แน่ใจว่าคุณได้รับ dependencies ทั้งหมดทุกครั้งที่คุณตั้งค่าโปรเจคบนคอมพิวเตอร์เครื่องใหม่ แต่ว่า npm ที่ติดตั้งบนเครื่องของคุณจะทำทุกอย่างให้คุณโดยอัตโนมัติแทน แล้ว npm จะรู้ได้อย่างไรว่าโปรเจคเราต้องการอะไร?  เราจะไปดูกันในส่วน `dependencies` ของไฟล์ package.json ของคุณ

ในส่วนนี้ แพ็คเกจของโปรเจคคุณจะถูกจัดเก็บโดยใช้รูปแบบต่อไปนี้:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

กรุณาเพิ่มเวอร์ชั่น "2.14.0" ลงใน "moment" เพื่อที่ส่ง `dependencies` ไปที่ไฟล์ package.json

**Note:** 
Moment เป็นไลบรารี่ที่มีประโยชน์สำหรับการทำงานที่ต้องใช้เวลาและวันที่
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

"moment" ควรจะเป็นเวอร์ชั่น "2.14.0"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^[\^\~]?2\.14\.0/,
        'Wrong version of "moment" installed. It should be 2.14.0'
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
