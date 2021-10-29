---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

สร้างแอพแบบ full stack ด้วย JavaScript ที่ทำงานคล้ายกับเว็บไซต์ <https://timestamp-microservice.freecodecamp.rocks/>  การทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

-   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-timestamp/) ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
-   ใช้เว็บไซต์ [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp) ในการทำโปรเจคให้เสร็จสมบูรณ์
-   ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` หรือส่งลิงก์ซอร์สโค้ดของโปรเจคไว้ใน `GitHub Link` อีกช่องทางหนึ่งก็ได้

# --hints--

คุณควรที่จะให้แหล่งโปรเจคของคุณ ไม่ใช่ตัวอย่างจาก URL

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

คำขอ `/api/:date?` พร้อมกับวันที่ที่ถูกต้อง ควรที่จะคืนค่าอ็อบเจ็กต์ของ JSON ด้วย `unix` คีย์ ซึ่งก็คือ Unix timestamp ของวันที่อินพุตในหน่วยของมิลลิวินาที

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

คำขอ `/api/:date?` พร้อมกับวันที่ที่ถูกต้อง ควรที่จะคืนค่าอ็อบเจ็กต์ของ JSON ด้วย `utc` คีย์ นั่นคือสตริงของวันที่อินพุตในรูปแบของ `Thu, 01 Jan 1970 00:00:00 GMT`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

คำขอที่ `/api/1451001600000` ควรที่จะคืนค่า `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

โปรเจคของคุณสามารถจัดการวันที่ได้ด้วยการวิคราะห์คำได้เป็นอย่างดี โดยการใช้ `new Date(date_string)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

หากเราอินพุตค่าสตริงวันที่ไม่ถูกต้อง API จะส่งคืนค่าอ็อบเจ็กต์ในรูปแบบ `{ error : "Invalid Date" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

ในส่วนของพารามิเตอร์วันที่ที่ว่างเปล่า ระบบจะส่งคืนค่าเป็นเวลา ปัจจุบันในรูปแบบของอ็อบเจ็กต์ของ JSON พร้อมกับ `unix` คีย์

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

พารามิเตอร์วันที่ที่ว่างเปล่า ระบบจะส่งคืนค่าเป็นเวลา ปัจจุบันในรูปแบบของอ็อบเจ็กต์ของ JSON พร้อมกับ `utc` คีย์

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
