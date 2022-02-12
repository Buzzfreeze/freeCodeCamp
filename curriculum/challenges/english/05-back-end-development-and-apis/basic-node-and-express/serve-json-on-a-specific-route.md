---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

แม้ว่าเซิร์ฟเวอร์ HTML จะให้ส่ง HTML กลับมาได้ แต่ว่า API นั้นจะใช้เพื่อส่งข้อมูล 
โดย <dfn>REST</dfn> (REpresentational State Transfer) API จะช่วยให้การแลกเปลี่ยนข้อมูลง่ายมากขึ้น โดยที่ client ไม่จำเป็นต้องรู้รายละเอียดของเซิร์ฟเวอร์เลย 
client แค่ต้องรู้ว่าจะดึงข้อมูลจากที่ไหน (URL) และจะทำอะไรกับข้อมูลนั้น (verb) 
เราจะใช้ verb `GET` เวลาที่จะดึงข้อมูล แต่ไม่ได้ต้องการแก้ไขอะไร 

ทุกวันนี้รูปแบบของการรับ-ส่งข้อมูลที่เป็นที่นิยมคือการใช้รูปแบบ JSON 
โดย JSON คือวิธีในการทำ object ของ JavaScript ให้เป็น string ทำให้รับ-ส่งข้อมูลได้สะดวก

มาสร้าง API ง่ายๆกันซักตัวดีกว่า  
ให้สร้าง route `/json` โดยใช้ `app.get()` และใน route handler ให้ใช้ `res.json()` และส่ง object เข้าไปเป็น argument ของ method นี้  
โดย method นี้จะทำให้กระบวนการรับ-ส่งข้อมูลเสร็จสิ้น โดยจะแปลง object ของ JavaScript เป็น string จากนั้นก็จะทำการตั้งค่า header ที่จะบอกเบราว์เซอร์ว่าสิ่งที่ส่งกลับมาจะอยู่ในรูปแบบ JSON นะ แล้วก็จะทำการส่งข้อมูลกลับมา  
โครงสร้าง object ที่ถูกต้องจะต้องอยู่ในรูป `{key: data}` โดย `data` จะเป็นตัวเลข, string, object หรือ array ก็ได้ แล้ว `data` ก็ยังเป็นตัวแปรหรือฟังก์ชันได้อีกด้วย โดยถ้าเป็นตัวแปรหรือฟังก์ชัน JavaScript จะทำการประมวลผลให้เสร็จ แล้วค่อยทำการแปลงข้อมูล object นี้เป็น string

# --instructions--

ให้ทำการส่ง object `{"message": "Hello json"}` ออกมาในรูปแบบ JSON ถ้ามีการส่ง request ไปยัง route `/json` 

เมื่อเขียนโค้ดเสร็จแล้ว ให้ลองเปิดเบราว์เซอร์ของคุณไปที่ `URL_ของคุณ/json` แล้วคุณจะเห็น JSON ของคุณในเบราว์เซอร์

# --hints--

endpoint `/json` ต้องส่ง object JSON ที่มีค่าเป็น `{"message": "Hello json"}` กลับออกมา

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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
