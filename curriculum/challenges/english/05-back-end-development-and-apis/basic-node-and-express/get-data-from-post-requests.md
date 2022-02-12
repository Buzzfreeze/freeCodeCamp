---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
challengeType: 2
forumTopicId: 301511
dashedName: get-data-from-post-requests
---

# --description--

ให้ใช้ POST handler ที่ route `/name` (ซึ่งเป็น route เดียวกับในแบบทดสอบที่เคยทำมา) 
เราได้สร้าง form ไว้ในหน้าเว็บ HTML ให้แล้ว โดย form นี้จะส่งข้อมูลเหมือนกับในแบบทดสอบข้อ 10 ที่เราได้ทำมา (เป็น query string)  
ถ้าคุณเรียกใช้ body-parser ได้อย่างถูกต้อง คุณจะอ่านค่าของ parameter ใน object `req.body` ได้  
ลองดูตัวอย่างด้านล่าง:

<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&#x26;bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote>

ให้ส่ง response กลับไปเป็น JSON เหมือนกับในแบบทดสอบที่เราเคยทำมาแล้ว (แบบนี้ `{name: 'firstname lastname'}`)  
ให้ลองทดสอบว่าแอปของคุณทำงานได้ไหมโดยการใช้ form ในหน้า HTML ที่เราเขียนไว้ให้

เพิ่มเติม:  มี HTTP method ตัวอื่นนอกเหนือจาก GET และ POST อีกมาก
ซึ่งโดยปกติแล้วจะใช้ HTTP verb ตามสิ่งที่เรากำลังจะทำ  
มาตรฐานในการใช้ HTTP method คือ:

POST (บางครั้งก็ใช้ PUT ได้) - ใช้เพิ่มข้อมูลใหม่ลงในฐานข้อมูล โดยใช้ข้อมูลที่ส่งไปกับ request

GET - อ่านข้อมูลจากฐานข้อมูลที่มีอยู่ โดยไม่แก้ไขอะไร

PUT หรือ PATCH/POST - อัปเดตข้อมูลในฐานข้อมูล โดยใช้ข้อมูลที่ส่งไปกับ request

DELETE => ลบข้อมูลในฐานข้อมูล

มี HTTP method ตัวอื่นที่ใช้ในการสื่อสารกับเซิร์ฟเวอร์อีกหลายตัว  
โดย method ด้านบนที่เรายกตัวอย่างมาให้จะมี payload ได้ทั้งหมด ยกเว้นแค่ GET ตัวเดียว และ middleware ของ body-parser ก็ใช้กับ HTTP method พวกนี้ได้เช่นกัน

# --hints--

Test 1 : API endpoint ต้องส่ง reponse กลับมาให้ตรงตาม request ที่ส่งเข้าไป

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

Test 2 : API endpoint ต้องส่ง reponse กลับมาให้ตรงตาม request ที่ส่งเข้าไป

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
