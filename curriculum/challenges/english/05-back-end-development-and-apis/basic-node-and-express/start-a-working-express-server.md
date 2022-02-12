---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

ใน 2 บรรทัดแรกของไฟล์ `myApp.js` คุณจะเห็นว่าการสร้าง object app ของ Express นั้นง่ายมากๆ  
object ตัวนี้มี method ข้างในหลายตัวมาก ซึ่งคุณจะได้เรียนเรื่องนี้ในภายหลัง  
method พื้นฐานตัวหนึ่งคือ `app.listen(port)` ซึ่งจะบอกให้เซิร์ฟเวอร์ทำงานบนพอร์ทที่ระบุ 
และเพื่อที่จะทำให้เราทดสอบแอปของคุณได้ เราเลยได้ทำการเรียกใช้คำสั่งนี้ไว้ที่ไฟล์ `server.js` แล้ว

มาทำให้เซิร์ฟเวอร์ของเราส่งข้อความออกมาได้ดีกว่า! 
ในการใช้ Express การ route ข้อมูลจะเป็นในรูปแบบนี้ `app.METHOD(PATH, HANDLER)` 

- `METHOD` คือประเภทของ HTTP request ที่ method นี้จะรับ (ตัวอย่างของ HTTP Request เช่น get post put ฯลฯ)
- `PATH` คือส่วนหนึ่งของ URL ที่ใช้เข้าถึงเซิร์ฟเวอร์ (เป็น string หรือ regex ก็ได้)
- `HANDLER` คือฟังก์ขันที่ Express จะเรียกใช้เมื่อมี request ส่งเข้ามาตาม path ที่เราตั้งไว้ โดย callback function ของ HANDLER จะใช้รูปแบบเป็น `function(req, res) {...}` โดยที่ req คือ request object ส่วน res คือ response object 

ตัวอย่างเช่น :

```js
function(req, res) {
  res.send('Response String');
}
```

โค้ดด้านบนนี้จะส่ง string `'Response String'` กลับไปให้กับผู้ที่ส่ง request มา

# --instructions--

ให้ใช้ method `app.get()` เพื่อส่ง string "Hello Express" กลับไป 
โดยกำหนดให้ใช้ path เป็น `/` 

ให้ดู log ด้วยเพื่อให้แน่ใจว่าโค้ดที่เขียนทำงานได้ 
ถ้าใช้ Replit ให้ดูการแสดงผลใน preview

**Note:** โค้ดที่คุณเขียนจะต้องอยู่ใต้ `var app = express();` และอยู่เหนือ `module.exports = app;`

# --hints--

แอพของคุณต้องส่งค่ากลับมาเป็น "Hello Express"

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
