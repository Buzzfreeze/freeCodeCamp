---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

เมื่อสร้าง API เราช่วยให้ผู้ใช้สามารถสื่อสารกับเราถึงสิ่งที่พวกเขาต้องการพร้อมได้รับจากบริการจากเรา ตัวอย่างเช่น หากลูกค้าร้องขอข้อมูลเกี่ยวกับผู้ใช้ในฐานข้อมูล พวกเขาต้องแจ้งให้เราทราบว่าพวกเขาสนใจผู้ใช้รายไหน อีกวิธีหนึ่งที่เป็นไปได้ในการบรรลุผลลัพธ์นี้คือการใช้พารามิเตอร์เส้นทาง ซึ่งพารามิเตอร์เส้นทางคือส่วนของ URL ที่คั่นด้วยเครื่องหมายทับ (/) และแต่ละส่วนจะบันทึกค่าของส่วน URL ที่ตรงกับตำแหน่ง ค่าที่จับได้สามารถพบได้ใน `req.params`อ็อบเจ็กต์ 

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

สร้างเซิร์ฟเวอร์ echo ด้วยการติดตั้งที่ `GET /:word/echo` การตอบสนองด้วยอ็อบเจ็กต์ของ JSON สามารถทำได้ โดยใช้โครงสร้าง `{echo: word}` และคุณสามารถค้นหาคำซ้ำได้ด้วยคำสั่ง `req.params.word` นอกจากนี้คุณสามารถทดสอบเส้นทางได้จากแถบที่อยู่ของเบราว์เซอร์ ,

# --hints--

การทดสอบที่ 1 : เซิร์ฟเวอร์ echo ของคุณควรที่จะหาคำซ้ำได้อย่างถูกต้อง

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

การทดสอบที่ 2 : เซิร์ฟเวอร์ echo ของคุณควรที่จะหาคำซ้ำได้อย่างถูกต้อง

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
