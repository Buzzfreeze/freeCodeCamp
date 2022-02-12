---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

นอกจาก GET แล้ว ก็ยังมี HTTP verb พื้นฐานอืกตัวหนึ่งคือ POST

ในตอนแรก POST จะเกิดจากการส่งข้อมูลโดยใช้ HTML form
แต่ในหลักการของ REST นั้น จะใช้ POST เพื่อเพิ่มข้อมูลลงในฐานข้อมูล (เช่นการสร้างผู้ใช้ใหม่ หรือการโพสต์ข้อมูลลงในบล็อก) 
ถึงแม้ว่าคุณจะไม่มีฐานข้อมูลในโปรเจคนี้ คุณก็จำเป็นที่จะเรียนรู้วิธีจัดการ request แบบ POST อยู่ดี

request แบบ POST นี้จะไม่ส่งข้อมูลผ่าน URL แต่จะซ่อนอยู่ใน request body 
ซึ่ง request body นี้ก็จะเป็นส่วนหนึ่งของ HTTP request ที่เรียกว่า payload 
ถึงแม้ว่าข้อมูลจะไม่ได้แสดงให้เห็นใน URL แต่ก็ไม่ได้หมายความว่าคนอื่นจะไม่เห็นข้อมูลนั้น 
ลองดูข่อมูลใน request ของ HTTP POST กัน จะได้เข้าใจมากขึ้น:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

จากข้อมูลข้างบน จะเห็นแล้วว่า request body ก็จะถูกเข้ารหัสเหมือนกับ query string นั่นแหละ โดยรูปแบบนี้เป็นรูปแบบพื้นฐานถ้าใช้ HTML form ในการส่ง POST request
แต่ถ้าใช้ Ajax คุณจะส่งเป็น JSON เพื่อให้โครงสร้างข้อมูลของคุณซับซ้อนกว่านี้ก็ได้
และยังมีการเข้ารหัสอีกแบบคือ multipart/form-data ซึ่งใช้สำหรับการอัพโหลดไฟล์ไบนารี 

ในแบบฝึกหัดนี้ คุณจะต้องใช้ request body แบบ urlencoded (แบบเดียวกับตัวอย่างด้านบน) 
ในการอ่านข้อมูลของ POST request ใน API ของคุณ คุณจะต้องติดตั้ง package `body-parser` ด้วย 
โดย package นี้จะมี middleware ที่ทำการถอดรหัส request body หลายๆรูปแบบให้คุณได้

# --instructions--

ให้ติดตั้งโมดูล `body-parser` ใน `package.json` (ถ้าคุณโหลดโค้ดของเรามาทำแบบทดสอบ เราได้ติดตั้งโมดูลนี้ไว้ให้แล้ว)
เมื่อติดตั้งแล้วให้สร้างตัวแปรชื่อ `bodyParser` โดยเก็บค่า `require(body-parser)`  
แล้วให้สร้าง middleware ที่จะจัดการกับ request body แบบ urlencoded โดยใช้ method `bodyParser.urlencoded({extended: false})`
และใช้ middleware ที่ได้จาก method ด้านบนใน `app.use()` 
อย่าลืมว่าต้องเรียกใช้ middleware ก่อนที่จะทำการประกาศ route

**Note:** การใช้ `extended` เป็นการตั้งค่าที่จะบอก `body-parser` ว่าให้แปลงข้อมูลอย่างไร  
ถ้า `extended=false` จะถอดรหัสข้อมูลโดยใช้ library `querystring`  
แต่ถ้า `extended=true` จะถอดรหัสข้อมูลโดยใช้ library `qs`

ถ้าใช้ `extended=false` ข้อมูลที่เราได้รับจะเป็นแค่ string หรือ array เท่านั้น 
โดย object ที่ได้จากการใช้ `querystring` จะไม่ได้มี prototype เป็น `Object` ของ JavaScript แปลว่าจะใช้ฟังก์ชัน `hasOwnProperty` หรือ `toString` ไม่ได้  
แต่ถ้าใช้ `extended=true` ข้อมูลเราก็จะทำอะไรได้มากขึ้น แต่ว่าก็ยังเทียบ JSON ไม่ติดอยู่ดี
# --hints--

ให้ใช้ middleware 'body-parser'

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
