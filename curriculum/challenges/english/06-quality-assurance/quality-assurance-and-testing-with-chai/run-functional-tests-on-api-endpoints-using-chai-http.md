---
id: 587d824e367417b2b2512c58
title: Run Functional Tests on API Endpoints using Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

Project นี้ สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)


Mocha ให้ผู้เรียนทดสอบการทำงานแบบ asynchronous เช่น การเรียกไปยังจุดปลาย API ด้วยปลั๊กอินชื่อ `chai-http`

ต่อไปนี้คือตัวอย่างการทดสอบโดยใช้ `chai-http` สำหรับชุดชื่อ `'GET /hello?name=[name] => "hello [name]"'`: 

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test('?name=John', function (done) {
    chai
      .request(server)
      .get('/hello?name=John')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'hello John', 'Response should be "hello John"');
        done();
      });
  });
});
```

การทดสอบจะส่งคำขอ "GET" ไปยังเซิร์ฟเวอร์โดยใช้ชื่อเป็นสตริงการสืบค้น URL (`?name=John`) ในฟังก์ชันการเรียกกลับของเมธอด `end` วัตถุการตอบสนอง (`res`) ที่ได้รับและมีคุณสมบัติ `status'

`assert.equal` ตัวแรกจะตรวจสอบว่าสถานะเท่ากับ `200` หรือไม่ `assert.equal` ที่สองตรวจสอบว่า string ตอบกลับ (`res.text`) เท่ากับ `"hello John"`

นอกจากนี้ ให้สังเกตพารามิเตอร์ `done` ในฟังก์ชันเรียกกลับของการทดสอบ การเรียกโดยไม่มีอาร์กิวเมนต์ เมื่อสิ้นสุดการทดสอบจำเป็นต้องส่งสัญญาณว่าการดำเนินการแบบ asynchronous เสร็จสมบูรณ์ 

# --instructions--

ภายใน `tests/2_functional-tests.js` ให้แก้ไข `'Test GET /hello with no name'` test (`// #1`) เพื่อยืนยัน `status` และ `text` ของการตอบกลับ เพื่อทำให้ผ่านการทดสอบ // อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

ไม่ควรมีการสืบค้น URL หากไม่มีการสืบค้นชื่อ URL ปลายทางจะตอบกลับด้วย `hello Guest' 

# --hints--

ควรผ่านการทดสอบทั้งหมด

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรทดสอบ `res.status` เป็น 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรทดสอบ `res.text` == `'hello Guest'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /('|")hello Guest\1/);
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
