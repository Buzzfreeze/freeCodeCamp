---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

นอกจาก GET ที่เป็นโพสต์แล้ว ยังมี HTTP verb ทั่วไปอีกตัวหนึ่งเป็นโพสต์ ด้วย 
 ซึ่งโพสต์เป็นวิธีการเริ่มต้นที่มักจะใช้ในการส่งข้อมูลลูกค้าพร้อมกับแบบฟอร์ม HTML 
 ในกรณี REST convention โพสต์จะถูกใช้เพื่อส่งข้อมูลและสร้างไอเทมใหม่ในฐานข้อมูล (สำหรับผู้ใช้ใหม่ หรือบล็อกโพสต์ใหม่) ถึงแม้ว่าคุณไม่มีฐานข้อมูลในโปรเจคนี้ คุณก็จำเป็นที่จะเรียนรู้วิธีจัดการคำขอของโพสต์อยู่ดี

ในคำขอเหล่านี้ ข้อมูลจะไม่ปรากฏอยู่ใน URL แต่มันจะซ่อนอยู่ในตัวเนื้อหา ซึ่งเนื้อหาเหล่านี้เป็นส่วนหนึ่งของคำขอ HTTP หรือที่เรียกว่าเพย์โหลด แม้ว่าข้อมูลจะไม่ปรากฏอยู่ใน URL แต่ก็ไม่ได้หมายความว่าข้อมูลนั้นเป็นข้อมูลส่วนตัว หากสงสัย ให้ดูเนื้อหาของคำขอ HTTP โพสต์:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

เป็นอย่างที่คุณเห็นว่า เนื้อหาถูกเข้ารหัสจะเป็นเหมือนสตริงสืบค้น เพราะว่านี่เป็นรูปแบบเริ่มต้นที่ใช้แบบฟอร์ม HTML 
สำหรับ Ajax คุณยังสามารถใช้ JSON เพื่อจัดการข้อมูลที่มีโครงสร้างที่ซับซ้อนมากขึ้นได้ นอกจากนี้ยังมีการเข้ารหัสอีกรูปแบบหนึ่ง: multipart/form-data อันนี้ใช้สำหรับการอัพโหลดไฟล์ไบนารี 
ในแบบฝึกหัดนี้ คุณจะต้องใช้ urlencoded เพื่อวิเคราะห์ข้อมูลที่มาจากคำขอโพสต์ โดยคุณต้องติดตั้ง `body-parser` ด้วย เพราะจะช่วยให้คุณใช้ชุดมิดเดิลแวร์ถอดรหัสข้อมูลในรูปแบบต่างๆ ได้

# --instructions--

การติดตั้งโมดูล `body-parser` บน `package.json` ตั้งให้ `require` อยู่บนส่วนหัวของไฟล์ แล้วเก็บมันไว้ในตัวแปรที่ชื่อ  `bodyParser` ส่วนมิดเดิ้ลแวร์ที่จัดการกับข้อมูล urlencoded จะถูกส่งกลับด้วย `bodyParser.urlencoded({extended: false})` ส่งฟังก์ชันส่งกลับโดยการเรียกใช้วิธีก่อนหน้าที่เรียก `app.use()` โดยปกติแล้ว มิดเดิ้ลแวร์ จะต้องติดตั้งก่อนที่จะเชื่อมต่อกับเส้นทางทั้งหมด

**Note:** `extended` เป็นองค์ประกอบทางเลือกที่บอกถึง `body-parser` ใช้การแยกวิเคราะห์ประโยค(parsing) ถ้า `extended=false` ระบบจะเข้ารหัสโดยใช้ `querystring` ไลบรารี่ แต่ถ้า `extended=true`  ระบบจะใช้ `qs` ไลบรารี่ในการแยกวิเคราะห์ประโยค(parsing)

เมื่อใช้ `extended=false` ค่าที่ได้จะเป็นเพียงสตริงหรืออาร์เรย์เท่านั้น อ็อบเจ็กต์ที่ถูกส่งคืน ของ `querystring` ไม่ส่งต่อต้นแบบจาก `Object` ของ JavaScript ซึ่งหมายความว่าฟังก์ชัน `hasOwnProperty`และ `toString` จะไม่สามารถใช้ได้ ถือได้ว่า เป็นการช่วยขยายความยืดหยุ่นของข้อมูล แต่ว่าก็ยังเทียบกับ JSON ไม่ได้อยู่ดี
# --hints--

มิดเดิ้ลแวร์ 'body-parser'ควรที่จะติดตั้งเอาไว้

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
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
