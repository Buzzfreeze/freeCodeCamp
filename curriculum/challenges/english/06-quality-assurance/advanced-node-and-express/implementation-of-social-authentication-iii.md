---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

ส่วนสุดท้ายของกลยุทธ์คือการจัดการโปรไฟล์ที่ส่งคืนจาก GitHub เราจำเป็นต้องโหลดออบเจ็กต์ฐานข้อมูลของผู้ใช้ หากมี หรือสร้างออบเจ็กต์หากไม่มี และเติมฟิลด์จากโปรไฟล์ จากนั้นส่งคืนอ็อบเจ็กต์ของผู้ใช้ GitHub ให้ *id* ที่ไม่ซ้ำกันแก่เราในแต่ละโปรไฟล์ ซึ่งเราสามารถใช้ในการค้นหาเพื่อจัดลำดับผู้ใช้ด้วย (ใช้งานแล้ว) ด้านล่างนี้คือตัวอย่างการใช้งานที่สามารถใช้ได้ใน project ของผู้เรียน โดยจะอยู่ภายในฟังก์ชันที่เป็นอาร์กิวเมนต์ที่สองสำหรับกลยุทธ์ใหม่ ด้านล่างที่ `console.log(profile);` ในปัจจุบันคือ:

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```



`findOneAndUpdate` ช่วยให้คุณค้นหา object และอัปเดต object ได้ หากไม่มี object อยู่ จะถูกแทรกและทำให้ใช้งานได้กับฟังก์ชัน callback ในตัวอย่างนี้ เราตั้งค่า "last_login" เสมอ เพิ่ม "login_count" โดย "1" และเติมเฉพาะฟิลด์ส่วนใหญ่เมื่อมีการแทรก object ใหม่ (ผู้ใช้ใหม่) สังเกตการใช้ค่าเริ่มต้น บางครั้งโปรไฟล์ที่ส่งคืนจะไม่มีการกรอกข้อมูลทั้งหมดหรือผู้ใช้จะเก็บไว้เป็นส่วนตัว ในกรณีนี้ คุณจัดการเพื่อป้องกัน error

ผู้เรียนควรจะสามารถลงชื่อเข้าใช้แอปได้แล้ว ลองเลย!

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/183e968f0e01d81dde015d45ba9d2745).

# --hints--

GitHub strategy setup ควรเสร็จสมบูรณ์

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /GitHubStrategy[^]*myDataBase/gi,
        'Strategy should use now use the database to search for the user'
      );
      assert.match(
        data,
        /GitHubStrategy[^]*return cb/gi,
        'Strategy should return the callback function "cb"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
