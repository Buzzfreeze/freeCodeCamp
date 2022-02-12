---
id: 587d824f367417b2b2512c5c
title: Simulate Actions Using a Headless Browser
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

ในแบบทดสอบต่อไป คุณจะต้องจำลองการที่คนใช้งานหน้าเว็บ โดยใช้ headless browser

headless browser คือเว็บเบราว์เซอร์ที่ไม่มี GUI แต่สามารถประมวลผล HTML, CSS และ JavaScript ได้เหมือนกับเบราว์เซอร์ทั่วไป ทำให้มีประโยชน์ในการใช้ทดสอบหน้าเว็บ

ในแบบฝึกหัดนี้ คุณจะต้องใช้ Zombie.js ซึ่งเป็น headless browser ที่ไม่หนักเครื่อง และใช้ได้โดยไม่ต้องติดตั้งอะไรเพิ่มเติม 
ฟีเจอร์นี้ทำให้คุณใช้ Zombie.js ได้แค่บางสภาพแวดล้อม เช่น Replit 
แต่ว่าก็มี headless browser ตัวอื่น ๆ ที่มีประสิทธิภาพมากกว่านี้อยู่เหมือนกัน

ถ้าใช้ Mocha เราจะสามารถรันโค้ด ก่อนที่จะทำการทดสอบได้ด้วย 
การรันโค้ดก่อนทดสอบจะมีประโยชน์หลายอย่าง เช่น การเพิ่มข้อมูลลงในฐานข้อมูล ก่อนที่จะเอาข้อมูลนั้นไปใช้ในการทดสอบ

เมื่อใช้ headless browser ก่อนทำการทดสอบจะต้อง**ไปที่**หน้าที่จะทดสอบ

hook `suiteSetup` จะทำงานแค่ครั้งเดียวที่จุดเริ่มต้นของ test suite

มี hook ประเภทอื่นๆ อีกหลายประเภท ที่สามารถรันโค้ดก่อนและหลังการทดสอบแต่ละครั้ง หรือเมื่อจบแต่ละ test suite ได้ 
ให้ดู docs ของ Mocha เพื่ออ่านรายละเอียด 

# --instructions--

ในไฟล์ `tests/2_functional-tests.js` หลังจากประกาศ `Browser` ให้เพิ่ม URL โปรเจ็กต์ของคุณไปที่ property `site` ของตัวแปร: 

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // ใส่ URL ของคุณที่นี่
```

จากนั้นที่ชั้นนอกสุดของ suite ที่ชื่อ `'Functional Tests with Zombie.js'` ให้สร้าง instance ใหม่ของ object `Browser` ด้วยโค้ดด้านล่างนี้:

```js
const browser = new Browser();
```

และใช้ hook `suiteSetup` เพื่อกำหนด route ของ `browser` ไปยัง `/` ด้วยโค้ดด้านล่างนี้: 

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

test ทั้งหมดต้องผ่าน

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
