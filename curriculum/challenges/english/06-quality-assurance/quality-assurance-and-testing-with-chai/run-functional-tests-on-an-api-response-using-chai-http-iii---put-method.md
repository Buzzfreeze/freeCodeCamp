---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--


project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)


เวลาที่เราจะทดสอบ `PUT` request เรามักจะส่งข้อมูลไปพร้อมกับ request นั้น 
ข้อมูลที่ส่งไปกับ `PUT` request เรียกว่า body ของ request นั้น 

ตัวอย่างด้านล่างเป็นการส่ง `PUT` request ที่มี JSON object ไปยัง endpoint `/travellers` โดยใช้ method `put` และ `send` ของปลั๊กอิน `chai-http`: 

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

และได้รับข้อมูลกลับมาเป็น: 

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

ให้ลองดูโค้ดในไฟล์ `server.js` ว่า endpoint `'/travellers'` มี response แบบไหนบ้าง

# --instructions--

ในไฟล์ `tests/2_functional-tests.js` ให้เปลี่ยนโค้ดใน test ชื่อ `'Send {surname: "Colombo"}'` (`// #3`) ให้ใช้ method `put` และ `send` เพื่อทดสอบ `'/travellers'`

ให้ส่ง JSON object ด้านล่างนี้ไปพร้อมกับ PUT request: 

```json
{
  "surname": "Colombo"
}
```

ให้ทำการ assert ข้อมูลนี้ใน callback ของ `request.end`:

1. `status` เป็น `200`
2. `type` เป็น `application/json`
3. `body.name` เป็น `Cristoforo`
4. `body.surname` เป็น `Colombo` 

ให้เขียน assert ตามเงื่อนไขด้านบน และอย่าลืมลบ `assert.fail()` ออกด้วย 
# --hints--

test ทั้งหมดต้องผ่าน

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

ต้องตรวจสอบว่าค่าของ `res.status` เป็น 200

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

ต้องตรวจสอบว่าค่าของ  `res.type` เป็น `'application/json'`

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

ต้องตรวจสอบว่าค่าของ `res.body.surname` เป็น `'Cristoforo'`

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

ต้องตรวจสอบว่าค่าของ `res.body.surname` เป็น `'Colombo'` 

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
