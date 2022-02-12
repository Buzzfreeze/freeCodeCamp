---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

ส่วนสุดท้ายของ strategy คือการจัดการโปรไฟล์ที่ได้มาจาก GitHub 
เราจำเป็นต้องดึง user object จากฐานข้อมูลถ้ามีข้อมูลอยู่ หรือไม่ก็ต้องเก็บข้อมูลผู้ใช้จากโปรไฟล์ลงในฐานข้อมูล ถ้ายังไม่มีข้อมูล 
จากนั้นก็ให้ส่ง user object กลับออกไป 
GitHub จะส่ง *unique id* ของผู้ใช้มาในโปรไฟล์ให้ด้วย ซึ่งเราจะเอาไม่ใช้ในการค้นหาผู้ใช่ในฐานข้อมูล หรือ serialize ได้เลย 
ด้านล่างนี้เป็นโค้ดที่เอาไปใช้ใน project ของคุณได้เลย 
โดยจะอยู่ภายในฟังก์ชันที่เป็น argument ที่สองของ steategy ใหม่ 
โดยอยู่ใต้บรรทัดของ `console.log(profile);`:

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



`findOneAndUpdate` จะใช้เพื่อหาและอัปเดต object ได้ 
ถ้าไม่เจอ object ก็จะเก็บ object นั้นลงในฐานข้อมูลให้เลย   
ในตัวอย่างนี้ เราเก็บค่า `last_login`, เพิ่ม `login_count` อีก `1` และจะเก็บค่าลงในฟิลด์หลายๆตัวเมื่อเพิ่ม object ใหม่ (ผู้ใช้ใหม่) เท่านั้น

ให้ลองดูในโค้ด จะเห็นว่าเรามีการเก็บค่าเป็น default value แทน ถ้าค่านั้นไม่ถูกส่งมาให้ด้วย เพราะว่าบางครั้ง โปรไฟล์ที่เราได้มาอาจจะไม่ได้มีค่าครบทุกฟิลด์ หรือผู้ใช้ไม่อยากเปิดเผยค่านั้นๆ 
ซึ่งคุณจะต้องใช้ default value เพื่อป้องกัน error

ตอนนี้คุณจะลงชื่อเข้าใช้แอปได้แล้ว ลองเล่นดูเลย!

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/183e968f0e01d81dde015d45ba9d2745)

# --hints--

ต้องตั้งค่า GitHub strategy ให้เสร็จ

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
