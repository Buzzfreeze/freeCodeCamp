---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

คุณได้ลองจัดการ dependencies ของโปรเจ็คโดยใช้ dependencies ในไฟล์ package.json ไปบ้างแล้ว และคุณดึงแพ็คเกจภายนอกเข้ามา โดยการเพิ่มลงไปในไฟล์ package.json และบอก npm ว่าคุณต้องการเวอร์ชันไหน โดยใช้ตัวหนอน (`~`) หรือเครื่องหมายคาเร็ต (`^`)

แล้วถ้าคุณไม่ต้องการแพ็คเกจภายนอกล่ะ? ทำยังไงดี?  
คุณอาจพอเดาได้แล้ว ที่คุฯต้องทำก็แค่เพียงลบ key-value pair ของแพ็คเกจนั้นออกจาก dependencies ของคุณ แค่นี้เอง


# --instructions--

ให้ลบแพ็คเกจ Moment ออกจาก dependencies ของคุณ

**Note:** ให้ตรวจสอบเครื่องหมายคอมม่าที่มีอยู่หลังจากลบออกด้วย

# --hints--

ใน "dependencies" ต้องไม่มี "moment" แล้ว

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        'moment',
        '"dependencies" still includes "moment"'
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
