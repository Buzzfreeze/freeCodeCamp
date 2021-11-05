---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests Using a Headless Browser
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

Project นี้ สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

บนหน้า page มีแบบฟอร์มป้อนข้อมูล โดยฟอร์มส่งข้อมูลไปยังปลายทาง `PUT /travellers` ตามคำขอ AJAX 

เมื่อคำขอเสร็จสมบูรณ์ client code จะเพิ่ม `<div>` ต่อท้ายซึ่งมีข้อมูลในการ response ต่อ DOM

ตัวอย่างวิธีการใช้ Zombie.js เพื่อโต้ตอบกับแบบฟอร์ม: 

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


ขั้นแรก วิธี `fill` ของ object `browser`  เติมฟิลด์ `surname` ของแบบฟอร์มด้วยค่า `'Polo'` `fill' ส่งคืน promise ดังนั้น 'then' จะถูกตรึงเอาไว้

ภายใน callback `then` เมธอด "pressButton" ของ object `browser` จะใช้เพื่อเรียกใช้ event listener `submit` ของแบบฟอร์ม เมธอด `pressButton' เป็นแบบ asynchronous

จากนั้น เมื่อได้รับการตอบกลับจากคำขอ AJAX แล้ว จะมีการยืนยันดังนี้:

1. สถานะของการตอบกลับคือ `200`
2. ข้อความภายใน element `<span id='name'></span>` ตรงกับ `'Marco'`
3. ข้อความภายใน element `<span id='surname'></span>` ตรงกับ `'Polo'`
4. มี element `1` `<span id='dates'></span>`

ในที่สุด การเรียกกลับที่ `done` จะถูกเรียกใช้ ซึ่งเป็นสิ่งจำเป็น เนื่องเป็นการทดสอบแบบ asynchronous


# --instructions--

ภายใน `tests/2_functional-tests.js` ใน `'ส่งนามสกุล "Colombo" ในรูปแบบ HTML'` test (`// #5`) ให้ automate ต่อไปนี้:

1. กรอกแบบฟอร์มด้วยนามสกุล `Colombo`
2. กดปุ่มส่ง 

และภายใน callback `pressButton':

1. ยืนยันว่าสถานะ OK `200`
2. ยืนยันว่าข้อความภายใน element `span#name' คือ `'Cristoforo'`
3. ยืนยันว่าข้อความภายใน element `span#surname' คือ `'Colombo'`
4. ยืนยันว่า element `span#dates` มีอยู่และจำนวนนับ คือ `1`

อย่าลืมลบการเรียก `assert.fail()` 

# --hints--

ควรผ่านการทดสอบทั้งหมด

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

ผู้เรียนควรยืนยันว่า request เบราว์เซอร์ที่ไม่มี head สำเร็จ 

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

ผู้เรียนควรยืนยันว่าข้อความภายใน element "span#name" คือ "Cristoforo" 

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

ผู้เรียนควรยืนยันว่าข้อความภายใน element "span#surname" คือ `'Colombo'`.

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

ผู้เรียนควรยืนยันว่าข้อความภายใน  element `span#dates` มีอยู่และจำนวนนับ คือ `1`

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
