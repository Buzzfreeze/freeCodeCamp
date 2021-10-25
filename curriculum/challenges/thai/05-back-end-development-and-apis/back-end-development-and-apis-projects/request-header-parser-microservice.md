---
id: bd7158d8c443edefaeb5bdff
title: Request Header Parser Microservice
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

สร้างแอพแบบ full stack ด้วย JavaScript ที่ทำงานคล้ายกับเว็บไซต์ <https://request-header-parser-microservice.freecodecamp.rocks/>  การทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

-   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-headerparser/)  ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
-   ใช้เว็บไซต์ [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-headerparser)ในการทำโปรเจคให้เสร็จสมบูรณ์
-   ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` หรือส่งลิงก์ซอร์สโค้ดของโปรเจคไว้ใน `GitHub Link` อีกช่องทางหนึ่งก็ได้

# --hints--

คุณควรที่จะให้แหล่งโปรเจคของคุณ ไม่ใช่ตัวอย่างจาก URL

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

คำขอ `/api/whoami` ควรคืนค่าอ็อบเจ็กต์ของ JSON พร้อมกับที่อยู่ IP ใน `ipaddress` คีย์

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

คำขอ `/api/whoami` ควรคืนค่าอ็อบเจ็กต์ของ JSON พร้อมกับภาษาที่คุณต้องการใน `language` คีย์

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

คำขอ `/api/whoami` ควรคืนค่าอ็อบเจ็กต์ของ JSON พร้อมกับซอฟต์แวร์ของคุณใน `software` คีย์

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.software && data.software.length > 0),
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
