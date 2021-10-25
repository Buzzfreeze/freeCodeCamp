---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
challengeType: 2
forumTopicId: 301511
dashedName: get-data-from-post-requests
---

# --description--

เชื่อมต่อตัวจัดการโพสต์ที่เส้นทาง `/name` ซึ่งเป็นเส้นทางเดียวกับอันก่อน พวกเราเตรียมแบบฟอร์มในหน้าเพจ HTML โดยจะส่งดาต้าที่เหมือนกันจำนวน 10 ชุด (Query string) 
ถ้าหากกำหนดค่าตัวแยกวิเคราะห์เนื้อหาได้อย่างถูกต้อง คุณจะพบพารามิเตอร์ในอ็อบเจ็กต์ `req.body` คุณสามารถดูตัวอย่างจากไลบราลี่ได้ตามนี้:

<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&#x26;bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote>

ตอบสนองต่ออ็อบเจ็กท์ของ JSON ซึ่งเป็นเดียวกันกับอันก่อนด้วย `{name: 'firstname lastname'}` ในทดสอบ จุดปลายทางของคุณทำงานต้องด้วยรูปแบบ html ที่พวกเราให้ไว้ในหน้าแรกของแอปด้วย

ิทิป :  มีวิธีมากมายหลายวิธีเขียน http นอกเหนือจาก GET และ POST แต่ว่าโดยปกติจะมีส่วนที่สอดคล้องกันระหว่าง http และการดำเนินการที่คุณจะต้องดำเนินการบนเซิร์ฟเวอร์ ตามแบบปกติคือ:

POST หรือ PUT - สร้างรีซอร์ทใหม่โดยใช้ข้อมูลที่ส่งพร้อมกับคำขอ

GET - อ่านรีซอร์สที่มีอยู่ที่มีอยู่โดยห้ามแก้ไข

PUT หรือ PATCH/POST - อัปเดตรีซอร์ท โดยใช้ข้อมูลที่ส่ง

DELETE => ลบข้อมูลในรีซอร์ท.

นอกจากนี้ยังมีวิธีอื่นๆ อีกสองสามวิธีที่ใช้ในการเชื่อมต่อกับเซิร์ฟเวอร์ ยกเว้น GET ซึ่งวิธีอื่นๆ ทั้งหมดที่ระบุไว้ข้างต้นสามารถมีเพย์โหลดได้ (ยกตัวอย่างเช่น ดาต้าในรีเควสบอดี้) และมิดเดิลแวร์ส่วน body-parser ก็สามารถทำงานกับวิธีการเหล่านี้เช่นกัน

# --hints--

การทดสอบที่ 1 : จุดปลายทาง API ของคุณต้องตอบด้วยชื่อที่ถูกต้อง

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', { first: 'Mick', last: 'Jagger' }).then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "POST /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

การทดสอบรอบที่ 2 : จุดปลายทาง API ของคุณต้องตอบด้วยชื่อที่ถูกต้อง

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', {
    first: 'Keith',
    last: 'Richards'
  }).then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "POST /name" route does not behave as expected'
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
