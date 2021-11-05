---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--


Project นี้ สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/). 


เมื่อผู้เรียน test คำขอ `PUT` ผู้เรียนมักจะส่งข้อมูลไปพร้อมกับคำ  request นั้น ข้อมูลที่คุณรวมไว้ในคำขอ `PUT` เรียกว่า body of the request ในการส่งคำขอ "PUT" และ JSON object ไปยังปลายทาง "/travellers" ผู้เรียนสามารถใช้วิธี "put" และ "send" ของปลั๊กอิน "chai-http": 

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

And the route responds with:
และ route ตอบกลับด้วย: 

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

ดู code เซิร์ฟเวอร์สำหรับการ response ที่แตกต่างกัน ที่ปลายทาง `'/travellers'' 

# --instructions--

ภายใน `tests/2_functional-tests.js` ให้เปลี่ยนการทดสอบ `'Send {surname: "Colombo"}'' (`// #3`) และใช้วิธี `put` และ `send` เพื่อทดสอบ`'/travellers'`

ส่ง JSON object ต่อไปนี้พร้อมกับคำขอ PUT request: 

```json
{
  "surname": "Colombo"
}
```

ตรวจสอบสิ่งต่อไปนี้ในการ callback `request.end`:

1. `สถานะ' ควรเป็น `200`
2. `ประเภท' ควรเป็น `application/json`
3. `body.name` ควรเป็น `Cristoforo`
4. `body.surname` ควรเป็น `Colombo` 

ปฏิบัติตามคำสั่งยืนยันข้างต้น - นอกจากนี้ อย่าลืมลบ `assert.fail()` เมื่อเสร็จสิ้น 
# --hints--

ควรผ่านการทดสอบทั้งหมด

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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

ผู้เรียนควรทดสอบ  `res.type`  เป็น `'application/json'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรทดสอบ `res.body.surname' เป็น `'Cristoforo'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรทดสอบ `res.body.surname' เป็น `'Colombo'` 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
