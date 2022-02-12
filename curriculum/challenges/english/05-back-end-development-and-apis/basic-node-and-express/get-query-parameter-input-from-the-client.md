---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

อีกวิธีหนึ่งในการส่งข้อมูลจาก client คือ การใส่ข้อมูลหลัง route โดยใช้ query string 
การระบุ query string ใน URL จะต้องระบุหลังจากเครื่องหมายคำถาม (?) โดยระบุในรูปแบบ field=value ซึ่งเราต้องคั่นข้อมูลแต่ละชุดด้วยเครื่องหมาย `&`  
Express จะอ่านข้อมูลจาก query string และแปลงเป็น object ใน `req.query` ให้ได้เลย 
แต่จะมีข้อจำกัดคือ เราจะไม่สามารถใช้ตัวอักษรบางตัว (เช่น เปอร์เซ็นต์ `%`) ใน URL ได้ ทำให้ต้องเข้ารหัสข้อมูลก่อนที่จะส่งมาใน URL ได้  
แต่ว่าถ้าคุณใช้ API ของ JavaScript นั้น จะมี method ที่ใช้สำหรับเข้ารหัส (encode)/ถอดรหัส (decode) ตัวอักษรพวกนี้ได้ 

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

ให้สร้าง API endpoint ที่ `GET /name` ซึ่งจะส่งข้อมูลกลับมาเป็น JSON object ตามรูปแบบนี้ `{ name: 'firstname lastname'}`  
และในการส่ง query string จะใช้รูปแบบนี้ `?first=firstname&last=lastname`


**Note:** ในแบบฝึกหัดต่อไป คุณจะต้องรับ request แบบ POST ที่ route เดียวกันนี้ (`/name`) คุณจะใช้ method `app.route(path).get(handler).post(handler)` ก็ได้ ซึ่ง syntax นี้จะทำให้คุณรับ HTTP verb หลายตัวที่มี route เดียวกันได้ 
ซึ่งจะช่วยให้พิมพ์น้อยลง และได้โค้ดที่เป็นระเบียบมากขึ้น

# --hints--

Test 1 : API endpoint ต้องส่ง reponse กลับมาให้ตรงตาม query string ที่ส่งเข้าไป

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2 : API endpoint ต้องส่ง reponse กลับมาให้ตรงตาม query string ที่ส่งเข้าไป

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
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
