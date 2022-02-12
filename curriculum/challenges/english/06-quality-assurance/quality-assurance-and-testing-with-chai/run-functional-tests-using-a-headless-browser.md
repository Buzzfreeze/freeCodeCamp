---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests Using a Headless Browser
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

บนหน้าเว็บจะมี form ที่ให้ป้อนข้อมูลได้ โดยจะส่งข้อมูลไปยัง endpoint `PUT /travellers` โดยใช้การส่ง request แบบ AJAX

เมื่อการส่ง request เสร็จสมบูรณ์ โค้ดในฝั่ง client จะเพิ่ม `<div>` ที่มีข้อมูลจาก response ไปยัง DOM

ตัวอย่างวิธีการใช้ Zombie.js เพื่อใช้งานแบบฟอร์ม: 

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```


ในขั้นตอนแรก method `fill` ของ object `browser` จะกรอกข้อมูลลงในฟิลด์ `surname` ของแบบฟอร์มด้วยคำว่า `'Polo'` และ method `fill` จะคืนค่าเป็น promise เราจึงใช้ `then` เชื่อมกับ method นี้ไว้

ภายใน callback ของ `then` เราจะใช้ method `pressButton` ของ object `browser` จะใช้เพื่อเรียกใช้ event listener `submit` ของ form ซึ่ง method `pressButton` นี้จะเป็นแบบ asynchronous

จากนั้น เมื่อได้รับการตอบกลับ AJAX request แล้ว เราจะ assert ค่าตามนี้:

1. status ของ response เป็น `200`
2. ข้อความภายใน element `<span id='name'></span>` ตรงกับ `'Marco'`
3. ข้อความภายใน element `<span id='surname'></span>` ตรงกับ `'Polo'`
4. มี element `<span id='dates'></span>` ทั้งหมด `1` ตัว

สุดท้ายจะเรียกใช้ callback method `done` ซึ่งจำเป็นต้องเรียกใช้ เพราะว่าเป็นการทดสอบแบบ asynchronous


# --instructions--

ในไฟล์ `tests/2_functional-tests.js` ใน test ที่ชื่อ `'Submit the surname "Colombo" in the HTML form` (`// #5`) ให้ใช้ Zombie.js ทำตามเงื่อนไขนี้โดยอัตโนมัติ:

1. กรอกฟิลด์ `surname` ในฟอร์มด้วยคำว่า `Colombo`
2. กดปุ่มส่ง

และภายใน callback function ของ `pressButton` ให้ทำตามเงื่อนไขนี้:

1. ตรวจสอบว่า status เป็น `200`
2. ตรวจสอบว่าข้อความภายใน element `span#name` เป็น `'Cristoforo'`
3. ตรวจสอบว่าข้อความภายใน element `span#surname` เป็น `'Colombo'`
4. ตรวจสอบว่า element `span#dates` มีอยู่ `1` ตัว

อย่าลืมลบการเรียกใช้ `assert.fail()` ออกด้วย

# --hints--

test ทั้งหมดต้องผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องตรวจสอบว่าการส่ง request โดยใช้ headless browser สำเร็จ

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องตรวจสอบว่าข้อความภายใน element `span#name` เป็น `'Cristoforo'` 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องตรวจสอบว่าข้อความภายใน element `span#surname` เป็น `'Colombo'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องตรวจสอบว่า element `span#dates` มีอยู่ `1` ตัว

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
