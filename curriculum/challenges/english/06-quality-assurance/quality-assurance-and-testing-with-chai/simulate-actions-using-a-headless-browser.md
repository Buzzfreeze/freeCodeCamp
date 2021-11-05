---
id: 587d824f367417b2b2512c5c
title: Simulate Actions Using a Headless Browser
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone แบบมาจาก [GitHub](https://github.com) /freeCodeCamp/boilerplate-mochachai/).

ใน challenges ครั้งต่อไป ผู้เรียนจะต้องจำลองการโต้ตอบของคน กับหน้าเว็บโดยใช้ headless browser

headless browser คือเว็บเบราว์เซอร์ที่ไม่มี GUI สามารถแสดงผลและแปลง HTML, CSS และ JavaScript ได้เช่นเดียวกับเบราว์เซอร์ทั่วไป ทำให้มีประโยชน์อย่างยิ่งสำหรับการทดสอบหน้าเว็บ

สำหรับ challenge ต่อไปนี้ ผู้เรียนจะต้องใช้ Zombie.js ซึ่งเป็น headless browser ที่มีน้ำหนักเบาซึ่งไม่ต้องอาศัยไบนารีเพิ่มเติมในการติดตั้ง ฟีเจอร์นี้ทำให้ใช้งานได้ในสภาพแวดล้อมที่จำกัด เช่น Replit แต่มีตัวเลือกheadless browser อื่น ๆ ที่มีประสิทธิภาพมากกว่า

Mocha อนุญาตให้เรียกใช้ code ก่อนที่จะทำการทดสอบจริง สิ่งนี้มีประโยชน์ในการทำสิ่งต่างๆ เช่น เพิ่มรายการลงในฐานข้อมูล ซึ่งจะใช้ในการทดสอบที่เหลือ

เมื่อใช้ headless browserว ก่อนทำการทดสอบ จะต้อง **ไปที่** หน้าที่จะทดสอบ

hook `suiteSetup` ทำงานเพียงครั้งเดียวที่จุดเริ่มต้นของชุดทดสอบ

มี hook ประเภทอื่นๆ อีกหลายประเภทที่สามารถรันโค้ดก่อนการทดสอบแต่ละครั้ง หลังการทดสอบแต่ละครั้ง หรือเมื่อสิ้นสุดชุดการทดสอบ ดูเอกสาร Mocha สำหรับข้อมูลเพิ่มเติม 

# --instructions--

ภายใน "tests/2_functional-tests.js" หลังจากประกาศ `Browser` ให้เพิ่ม URL โปรเจ็กต์ของผู้เรียนไปที่ property `site` ของตัวแปร: 

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

จากนั้นที่ระดับ root ของชุด `'Functional Tests with Zombie.js'`  ให้สร้างอินสแตนซ์ใหม่ของ object `Browser` ด้วย code ต่อไปนี้:

```js
const browser = new Browser();
```

และใช้ hook  "suiteSetup" เพื่อกำหนดเส้นทาง route `browser` ไปยังเส้นทาง `/`ด้วย code ต่อไปนี้: 

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

การทดสอบทั้งหมดควรผ่าน 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
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
