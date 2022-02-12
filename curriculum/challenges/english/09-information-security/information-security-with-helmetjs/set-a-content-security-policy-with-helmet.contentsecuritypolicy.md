---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

แบบทดสอบนี้จะพูดถึงการป้องกันแบบใหม่ ที่จะลดความเสี่ยงและผลกระทบจากการโจมตี ในเบราว์เซอร์สมัยใหม่ได้อย่างมาก  
การตั้งค่านโยบายการรักษาความปลอดภัยของเนื้อหา (Content Security Policy) คุณสามารถป้องกันการ inject ข้อมูลเข้ามาในหน้าเว็บของคุณได้ วิธีนี้จะปกป้องแอปของคุณจากช่องโหว่ XSS, frame ฯลฯ  
CSP จะทำงานโดยกำหนดที่มาของข้อมูลที่เชื่อถือได้ โดยจะกำหนดได้กับทรัพยากรทุกประเภทที่หน้าเว็บอาจต้องการ (scripts, stylesheets, fonts, frames, media ฯลฯ) 
โดยจะมีคำสั่งให้ใช้หลายคำสั่ง เพื่อให้เจ้าของเว็บไซต์ควบคุมได้อย่างละเอียด 
ดูรายละเอียดเพิ่มเติมที่ HTML 5 Rocks, KeyCDN  
*หมายเหตุ* CSP จะไม่ทำงานในเบราว์เซอร์รุ่นเก่า

ซึ่งโดย default แล้ว คำสั่งต่างๆ จะเป็นไปอย่างกว้างๆ 
ดังนั้นการตั้งค่าคำสั่ง defaultSrc เป็น fallback จึงเป็นสิ่งสำคัญ 
Helmet รองรับทั้งการใช้ชื่อ defaultSrc และ default-src 
โดย fallback นี้จะใช้ได้กับส่วนที่เราไม่ได้กำหนดค่าให้

# --instructions--

ในแบบฝึกหัดนี้ ให้ใช้ `helmet.contentSecurityPolicy()` และส่ง object `directives` เข้าไป  
ใน object ที่ส่งเข้าไปให้ตั้งค่า property `defaultSrc` เป็น `["'self'"]` (ที่มาของข้อมูลต้องเก็บในรูป array) ซึ่งจะทำให้ ค่า default ของแหล่งข้อมูลเป็นเฉพาะเว็บของคุณเอง  
นอกจากนี้ ให้ตั้งค่าคำสั่ง `scriptSrc` เพื่อให้อนุญาตให้ดาวน์โหลดสคริปต์จากเว็บไซต์ของคุณ (`'self'`) และจากโดเมน `'trusted-cdn.com'` เท่านั้น

คำแนะนำ: ในคีย์เวิร์ด `'self'` นั้นตัว single quote (`''`) ก็เป็นส่วนหนึ่งของคีย์เวิร์ด ดังนั้นจึงต้องครอบด้วย double quote (`""`) อีกชั้น เพื่อให้ใช้งานได้ 

# --hints--

ต้องใช้ middleware `helmet.contentSecurityPolicy()` อย่างถูกต้อง

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

การตั้งค่า CSP ยังไม่ถูกต้อง defaultSrc ต้องเป็น ["'self'"] และ scriptSrc ต้องเป็น ["'self'", 'trusted-cdn.com']

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
