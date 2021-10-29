---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

คุณได้มีการทดสอบสองสามวิธีในการจัดการ dependencies ของโปรเจ็กต์ของคุณแล้ว โดยใช้ส่วน dependencies ของ package.json และคุณยังรวมแพ็คเกจภายนอก(external packages)โดยการเพิ่มไฟล์ลงและสั่ง npm ว่าคุณต้องการเวอร์ชันประเภทใด โดยใช้อักขระพิเศษ เช่น ตัวหนอน(tilde) หรือเครื่องหมายคาเร็ต (caret)

แล้วถ้าคุณไม่ต้องการแพ็คเกจภายนอกล่ะ? ทำยังไงดี? คุณอาจพอเดาได้บ้างใช่ไหมครับ? เพียงลบคู่ คีย์-ค่า ที่เกี่ยวข้องสำหรับแพ็คเกจนั้นออกจาก dependencies ของคุณก็เสร็จแล้ว

วิธีการเดียวกันนี้สามารถใช้กับการลบฟิลด์อื่นๆ ใน package.json ของคุณได้อีกด้วย

# --instructions--

ลบแพ็คเกจ Moment ออกจาก dependencies ของคุณ

**Note:** ตรวจสอบให้แน่ใจว่าคุณมีเครื่องหมายจุลภาคหลังจากลบออก

# --hints--

"dependencies" ไม่ควรรวมอยู่ใน "moment"

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
