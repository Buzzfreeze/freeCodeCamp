---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

หนึ่งในเหตุผลที่สำคัญที่สุดในการใช้ package manager คือ การจัดการกับ dependency  
แทนที่คุณจะต้องไล่ลง dependency แต่ละตัวทุกคร้งที่นำโปรเจคไปลงในเครื่องอื่น  
ถ้าคุณใช้ npm ตัว npm จะทำการติดตั้งทุกอย่างที่จำเป็นให้โดยอัติโนมัติ  
แล้ว npm จะรู้ได้อย่างไรว่าโปรเจคเราต้องการอะไร?  
npm จะดูจาก `dependencies` ของไฟล์ package.json ยังไงล่ะ

ในส่วนนี้ แพ็คเกจของโปรเจคคุณจะถูกจัดเก็บโดยใช้รูปแบบต่อไปนี้:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

ให้เพิ่มแพคเกจ "moment" เวอร์ชัน "2.14.0" ในส่วน `dependencies` ของไฟล์ package.json

**Note:** 
Moment เป็นไลบรารี่ที่มีประโยชน์ เมื่อคุณต้องทำงานกับข้อมูลที่เป็นเวลาและวันที่
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

"moment" ต้องเป็นเวอร์ชั่น "2.14.0"

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
