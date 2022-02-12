---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

เวลาที่เราสร้าง API เราต้องทำให้ผู้ใช้บอกเราได้ว่าอยากได้อะไรจาก API ของเรา  
เช่น ถ้า client อยากได้ข้อมูลผู้ใช้ในฐานข้อมูล client จะต้องบอก API ของเราด้วยว่าอยากได้ข้อมูลของผู้ใช้คนไหน  

ในแบบทดสอบนี้เราจะสอนวิธีใช้ route parameter เพื่อให้ client บอกกับ API ได้ว่าอยากได้อะไร 
route parameter ก็คือส่วนหนึ่งของ URL โดยจะแบ่งด้วยเครื่องหมาย `/`  
ในการรับ route parameter เราต้องเขียน route ของเราให้เตรียมพร้อมที่จะรับค่านั้นด้วย แล้วเราจะอ่านค่านั้นได้จาก object `req.params`

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

ในตัวอย่างด้านบนจะเห็นว่าค่า `userId: '546'` จะได้มากจากการที่เราตั้งค่า route ไว้เป็น `:userId` ในตำแหน่งที่จะรับค่านี้

# --instructions--

ให้สร้าง echo server โดยมี route เป็น `GET /:word/echo` และให้ตอบกลับ request เป็น JSON object ตามรูปแบบนี้ `{echo: word}` โดยคุณจะอ่านค่าของ word เพื่อมาสร้างเป็น response ได้จาก `req.params.word` 
คุณจะลองดู response ของ route นี้ได้ใน browser เลย โดยไปที่ `URL_ของแอปของคุณ/CareerVio/echo`

**Echo Server** คือแอปที่ใช้ตรวจสอบว่า client จะส่งข้อมูลมาหา server ได้หรือไม่ หลักการทำงานคือ client จะต้องส่งข้อมูลมาหา server แล้ว server จะส่งข้อมูลตัวเดิมกลับไปหา client

# --hints--

Test 1 : echo server ของคุณต้องส่งคำกลับมาได้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2 : echo server ของคุณต้องส่งคำกลับมาได้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
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
