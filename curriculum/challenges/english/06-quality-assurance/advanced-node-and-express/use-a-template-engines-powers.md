---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

หนึ่งในฟีเจอร์ที่ที่ดีที่สุดของในการใช้ template engine คือ สามารถส่งตัวแปรจากเซิร์ฟเวอร์ไปยังไฟล์เทมเพลตก่อนที่จะแสดงผลเป็น HTML ได้

ในไฟล์ Pug ของคุณ คุณสามารถใช้ตัวแปรโดยการใช้ `#{ชื่อตัวแปร}` โดยแทรกไปกับข้อความอื่นใน element ได้เลย หรือโดยการใช้เครื่องหมายเท่ากับใน element โดยไม่มีเว้นวรรค เช่น `p=ชื่อตัวแปร` ซึ่งจะกำหนดให้ข้อความของ element p เป็นค่าของตัวแปร

เราขอแนะนำให้ศึกษา syntax และโครงสร้างของ Pug ในส่วน README ของ GitHub [ที่นี่](https://github.com/pugjs/pug) ก่อน  
Pug จะเป็นการใช้เว้นวรรคและแท็บเพื่อแสดง element ที่ซ้อนกัน และลดจำนวน code ที่จำเป็นเพื่อสร้างเว็บไซต์ที่สวยงาม

ลองดูที่ไฟล์ pug ชื่อ 'index.pug' ในโปรเจ็กต์ของคุณ คุณจะเห็นว่าเราใช้ตัวแปร *title* และ *message*

ในการส่งตัวแปรพวกนี้จากเซิร์ฟเวอร์ เราจะต้องเพิ่ม object เป็น argument ที่สองใน *res.render* โดยระบุชื่อของตัวแปร และค่าของตัวแปรนั้น 
เช่น การส่ง object นี้จะเป็นการตั้งค่าของตัวแปร *title* และ *message* ในหน้า index: `{title: 'Hello', message: 'Please login'}`

โดย syntax เต็มๆจะเป็นรูปแบบนี้: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` ให้ลองรีเฟรชหน้า และคุณจะเห็น ค่าพวกนี้ แสดงในในหน้าเว็บตามตำแหน่งของตัวแปรในไฟล์ index.pug

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871)

# --hints--

Pug ต้องแสดงผลตัวแปรอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
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
