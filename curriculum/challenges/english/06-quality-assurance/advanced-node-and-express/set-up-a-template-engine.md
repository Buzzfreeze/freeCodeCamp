---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

ในการทำแบบทดสอบนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-advancednode/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-advancednode)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ`

template engine ทำให้ใช้ไฟล์ที่เป็น static template (เช่น ไฟล์ที่เขียนด้วย *Pug*) ในแอปของคุณได้  
ตอน runtime ตัว template engine จะแทนที่ตัวแปรในไฟล์เทมเพลต ด้วยค่าจริงที่เซิร์ฟเวอร์ของคุณส่งมา จากนั้นจะแปลงเทมเพลตเป็นไฟล์ static HTML ส่งไปยัง client  
วิธีนี้ทำให้การออกแบบหน้า HTML ง่ายขึ้น และช่วยให้สามารถแสดงตัวแปรบนหน้าได้โดยไม่ต้องทำการเรียก API จาก client

ให้เพิ่ม dependency ของ `pug@~3.0.0` ในไฟล์ `package.json` ของคุณ

Express ต้องรู้ว่า template engine ตัวไหนอยู่ เราจะใช้ method `set` เพื่อกำหนดค่าของ property `view engine` เป็น `pug`: `app.set('view engine', 'pug')`

หน้าเว็บจะไม่โหลดจนกว่าไฟล์ index ใน directory `views/pug` จะถูกต้อง

เปลี่ยน argument ของการประกาศ `res.render()` ของ route `/` ให้เป็น route ของ directory `views/pug` แทน
โดยจะใช้ relative path หรือ absolute path ก็ได้ และไม่ต้องระบุนามสกุลไฟล์

ถ้าทำตามเงื่อนไขแล้ว หน้าแรกของแอปจะเปลี่ยนจากข้อความ "`Pug template is not defined.`" เป็น `Looks like this page is being rendered from Pug into HTML!` แทน

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791)

# --hints--

ต้องกำหนด Pug เป็น dependency

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

View engine ต้องเป็น Pug

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

ต้องใช้ method ของ ExpressJS เพื่อแสดง index page ได้

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

Pug ต้องใช้งานได้

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
