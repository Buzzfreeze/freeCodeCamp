---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

การทำ challenge นี้ จะทำให้ผู้เรียนต้องเขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้

- clone [repo GitHub นี้](https://github.com/freeCodeCamp/boilerplate-advancednode/) และทำ challenge นี้ในพื้นที่
- ใช้ [ project เริ่มต้น Replit ของเรา](https://replit.com/github/freeCodeCamp/boilerplate-advancednode) เพื่อทำ challenge เหล่านี้ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public  จากนั้นส่ง URL ไปที่ช่อง `Solution Link` หรือส่งลิงก์ไปยัง source code ของ project ผู้เรียน ตรง `GitHub Link`

template engine ช่วยให้ใช้ไฟล์ static template (เช่น ไฟล์ที่เขียนด้วย *Pug*) ในแอป ที่ runtime  template engine จะแทนที่ตัวแปรในไฟล์เทมเพลตด้วยค่าจริงที่เซิร์ฟเวอร์ของคุณสามารถจัดหาได้ จากนั้นจะแปลงเทมเพลตเป็นไฟล์ static HTML ส่งไปยังไคลเอ็นต์ วิธีนี้ทำให้ง่ายต่อการออกแบบหน้า HTML และช่วยให้สามารถแสดงตัวแปรบนหน้าได้โดยไม่ต้องทำการเรียก API จากลูกค้า

เพิ่ม `pug@~3.0.0` เป็นการขึ้นต่อกันในไฟล์ `package.json` ของคุณ

Express ต้องการทราบว่าเรากำลังใช้ template engine ใด เราจะใช้วิธี `set` เพื่อกำหนด `pug` เป็นค่าของคุณสมบัติ `view engine`: `app.set('view engine', 'pug')`

หน้าเว็บจะไม่โหลดจนกว่าจะแสดงผล index file อย่างถูกต้องใน directory`views/pug'

เปลี่ยนอาร์กิวเมนต์ของการประกาศ `res.render()` ในเส้นทาง `/` ให้เป็นเส้นทางของไฟล์ไปยัง directory `views/pug` path อาจเป็น relative path หรือ absolute path และไม่ต้องการนามสกุลไฟล์

หากทุกอย่างเป็นไปตามนี้ หน้าแรกของแอปจะหยุดแสดงข้อความ "`Pug template is not defined.`" และตอนนี้จะแสดงข้อความระบุว่า คุณแสดงผลเทมเพลต Pug สำเร็จแล้ว!

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791).

# --hints--

Pug ควรเป็น dependency.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

View engine ควรเป็น Pug.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ใช้เมธอด ExpressJS ที่ถูกต้องเพื่อแสดง index page จากการตอบกลับ

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Pug ควรจะทำงาน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
