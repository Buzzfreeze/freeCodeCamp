---
id: 587d824e367417b2b2512c58
title: Run Functional Tests on API Endpoints using Chai-HTTP
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)


เราจะใช้ Mocha เพื่อ test การทำงานแบบ asynchronous (เช่น การเรียกใช้ API endpoint) ได้ด้วยปลั๊กอินชื่อ `chai-http`

ด้านล่างเป็นตัวอย่างการ test โดยใช้ `chai-http` ของ suite ชื่อ `'GET /hello?name=[name] => "hello [name]"'`: 

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

การ test จะส่ง request แบบ `GET` ไปยังเซิร์ฟเวอร์โดยใช้ ืname เป็น query string (`?name=John`) และใน callback function ของ method `end` จะได้รับค่าที่คืนกลับมา (`res`) โดยมี property ชื่อ `status`

`assert.equal` ตัวแรกจะตรวจสอบว่า `status` เป็น `200` หรือไม่  
`assert.equal` ตัวที่สองตรวจสอบว่า string ของค่าที่คืนกลับมา (`res.text`) เป็น `"hello John"` หรือไม่

นอกจากนี้ จะเห็นว่า `done` ใน callback function ของการ test จะถูกเรียกใช้โดยไม่ส่ง argument เข้าไป การเรียกใช้ฟังก์ชันนี้เป็นการบอกว่าการดำเนินการแบบ asynchronous เสร็จสมบูรณ์

# --instructions--

ในไฟล์ `tests/2_functional-tests.js` ให้แก้ไข test ที่ชื่อ `'Test GET /hello with no name'` (`// #1`) เพื่อทำให้การ assert `status` และ `text` ผ่าน
อย่าแก้ไข argument ที่ส่งเข้าไปใน assert

ในแบบทดสอบนี้จะยังไม่ต้องมี query string โดย endpoint จะคืนค่ามาเป็น `hello Guest` ถ้าไม่ได้ส่ง query string ไป

# --hints--

test ทั้งหมดต้องผ่าน

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

ต้องตรวจสอบว่า `res.status` == 200

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

ต้องตรวจสอบว่า `res.text` == `'hello Guest'`

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
