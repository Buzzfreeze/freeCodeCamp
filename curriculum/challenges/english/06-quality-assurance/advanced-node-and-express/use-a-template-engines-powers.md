---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

หนึ่งใน feaature ที่ยอดเยี่ยมที่สุดของการใช้ template engine คือสามารถส่งตัวแปรจากเซิร์ฟเวอร์ไปยังไฟล์เทมเพลตก่อนที่จะแสดงผลเป็น HTML

ในไฟล์ Pug ของคุณ คุณสามารถใช้ตัวแปรโดยอ้างอิงชื่อตัวแปรว่า `#{variable_name}` แบบอินไลน์กับข้อความอื่นบน element หนึ่งๆ หรือโดยการใช้เครื่องหมายเท่ากับบน element โดยไม่มีการเว้นวรรค เช่น `p=variable_name ` ซึ่งกำหนดค่าของตัวแปรให้กับข้อความของ element p

เราขอแนะนำอย่างยิ่งให้ดูที่ syntax และโครงสร้างของ Pug [here](https://github.com/pugjs/pug) บน README ของ GitHub Pug เป็นข้อมูลเกี่ยวกับการใช้ช่องว่างและแท็บเพื่อแสดง element ที่ซ้อนกัน และลดจำนวน code ที่จำเป็นในการสร้างเว็บไซต์ที่สวยงาม

เมื่อดูที่ไฟล์ pug 'index.pug' ที่รวมอยู่ในโปรเจ็กต์ของคุณ เราใช้ตัวแปร *title* และ *message*

ในการส่งต่อสิ่งเหล่านี้จากเซิร์ฟเวอร์ของเรา จะต้องเพิ่ม object เป็นอาร์กิวเมนต์ที่สองใน *res.render* ด้วยตัวแปรและค่า ตัวอย่างเช่น ส่งผ่าน object นี้พร้อมการตั้งค่าตัวแปรสำหรับ index view: `{title: 'Hello', message: 'Please login'}`

ควรมีลักษณะดังนี้: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` รีเฟรชหน้าของคุณและคุณจะเห็น ค่าเหล่านั้นแสดงในมุมมองในจุดที่ถูกต้องตามที่วางไว้ในไฟล์ index.pug !

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871).

# --hints--

Pug ควรแสดงผลตัวแปรอย่างถูกต้อง

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
