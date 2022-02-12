---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

ปกติแล้วเซิร์ฟเวอร์ HTML มักจะมี directory อย่างน้อยหนึ่งที่ ที่ผู้ใช้สามารถเข้าถึงได้ และคุณจะวางไฟล์ที่แอปของคุณต้องใช้ไว้ที่ directory พวกนี้ได้ เช่น stylesheet script หรือ รูปภาพ

ถ้าใช้ Express คุณสามารถทำให้เข้าถึง directory พวกนี้ได้โดยใช้ middleware ชื่อ `express.static(path)` โดยที่พารามิเตอร์ `path` จะเป็น absolute path ของโฟลเดอร์ที่คุณอยากให้เ้ขาถึงได้

ไม่ต้องห่วงถ้าคุณยังไม่รู้ว่า middleware คืออะไร เดี๋ยวเราจะสอนคุณอย่างละเอียดทีหลัง 
แต่ถ้าจะให้อธิบายสั้นๆ middleware คือฟังก์ชันที่จะเรียกใช้ก่อนที่จะไปใช้ route handler  
ในการใช้ middleware คุณต้องเรียกใช้ method `app.use(path, middlewareFunction)` ก่อน โดยที่คุณจะระบุ หรือไม่ระบุ argument แรกก็ได้ ถ้าไม่ระบุ middleware จะทำงานกับทุก route ของคุณ

# --instructions--

ให้ใช้ middleware `express.static()` กับ path `/public` โดยใช้ `app.use()` 
ซึ่ง absolute path ของโฟลเดอร์นี้คือ `__dirname + /public`

เมื่อทำตามเงื่อนไขข้างบนแล้ว แอปของคุณจะต้องใช้ CSS stylesheet ได้ 
แล้วจะเห็นว่าเรามีการเรียกใช้ไฟล์ `/public/style.css` ใน `/views/index.html` ด้วย

# --hints--

แอปของคุณต้องทำให้เข้าถึง directory `/public` โดยใช้ path `/public` ได้

```js

(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
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
