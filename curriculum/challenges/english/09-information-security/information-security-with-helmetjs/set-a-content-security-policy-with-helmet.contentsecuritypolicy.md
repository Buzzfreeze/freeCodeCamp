---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/).

แบบทดสอบนี้เน้นย้ำถึงการป้องกันใหม่ที่มีแนวโน้มว่าจะลดความเสี่ยงและผลกระทบของการโจมตีหลายประเภทในเบราว์เซอร์สมัยใหม่ได้อย่างมาก ด้วยการตั้งค่าและกำหนดค่านโยบายการรักษาความปลอดภัยของเนื้อหา (Content Security Policy) คุณสามารถป้องกันการแทรกข้อมูลใดๆ ที่ไม่ได้ตั้งใจลงในเว็บเพจของคุณได้ วิธีนี้จะปกป้องแอปของคุณจากช่องโหว่ XSS การติดตามที่ไม่ต้องการ เฟรมที่เป็นอันตราย และอื่นๆ อีกมากมาย CSP ทำงานโดยกำหนดรายการที่อนุญาตของแหล่งเนื้อหาที่เชื่อถือได้ คุณสามารถกำหนดค่าเหล่านี้สำหรับทรัพยากรแต่ละประเภทที่หน้าเว็บอาจต้องการ (scripts, stylesheets, fonts, frames, media และอื่นๆ...) มันมีคำสั่งให้ใช้หลายคำสั่ง ดังนั้นเจ้าของเว็บไซต์จึงสามารถควบคุมได้อย่างละเอียด ดู HTML 5 Rocks, KeyCDN สำหรับรายละเอียดเพิ่มเติม หมายเหตุ CSP ไม่รองรับเบราว์เซอร์รุ่นเก่า

โดยตามค่าเริ่มต้น คำสั่งต่างๆ จะเป็นไปอยางกว้างๆ ดังนั้นการตั้งค่าคำสั่ง defaultSrc เป็นทางเลือกสำรองจึงเป็นสิ่งสำคัญ Helmet รองรับทั้งรูปแบบการตั้งชื่อ defaultSrc และ default-src ทางเลือกนี้ใช้กับคำสั่งที่ไม่ระบุส่วนใหญ่

# --instructions--

ในแบบฝึกหัดนี้ ใช้ `helmet.contentSecurityPolicy()` ให้กำหนดค่ามันโดยเพิ่ม `directives` object ใน ovject นั้นตั้งค่า `defaultSrc` เป็น `["'self'"]` (รายชื่อแหล่งที่มาที่อนุญาตต้องอยู่ใน array) เพื่อให้เชื่อถือเฉพาะที่อยู่เว็บไซต์ของคุณโดยค่าเริ่มต้น นอกจากนี้ ให้ตั้งค่าคำสั่ง `scriptSrc` เพื่อให้คุณอนุญาตให้ดาวน์โหลดสคริปต์จากเว็บไซต์ของคุณเท่านั้น (`'self'`) และจากโดเมน `'trusted-cdn.com'`

คำแนะนำ: ในคีย์เวิร์ด `'self'` เครื่องหมายคำพูดเดี่ยวเป็นส่วนหนึ่งของคีย์เวิร์ด ดังนั้นจึงต้องปิดเครื่องหมายคำพูดคู่จึงจะใช้งานได้

# --hints--

helmet.contentSecurityPolicy() ควรถูกติดตั้งอย่างถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

การตั้งค่า csp ของคุณนั้นยังไม่ถูกต้อง defaultSrc ควรต้องเป็น ["'self'"] และ scriptSrc ควรเป็น ["'self'", 'trusted-cdn.com']

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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
