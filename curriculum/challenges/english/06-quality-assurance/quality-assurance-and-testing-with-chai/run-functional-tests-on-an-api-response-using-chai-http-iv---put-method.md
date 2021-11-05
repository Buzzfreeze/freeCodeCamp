---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2
forumTopicId: 301591
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iv---put-method
---

# --description--

Project นี้ สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

แบบฝึกหัดนี้คล้ายกับแบบฝึกหัดก่อนหน้า 

ตอนนี้ผู้เรียนรู้วิธีทดสอบคำขอ `PUT  แล้ว ถึงเวลาที่ผู้เรียนต้องทำใหม่ตั้งแต่ต้น 

# --instructions--

ภายใน `tests/2_functional-tests.js` ให้เปลี่ยนการทดสอบ `'Send {surname: "da Verrazzano"}'' (`// #4`) และใช้วิธี `put` และ `send` เพื่อทดสอบจุดสิ้นสุด '/travellers'

ส่ง JSON object ต่อไปนี้พร้อมกับคำขอ PUT request: 

```json
{
  "surname": "da Verrazzano"
}
```

ตรวจสอบสิ่งต่อไปนี้ในการ callback `request.end`:

1. `status` ควรเป็น `200`
2. `type` ควรเป็น `application/json`
3. `body.name` ควรเป็น `Giovanni`
4. `body.surname' ควรเป็น `da Verrazzano` 

ปฏิบัติตามคำสั่งยืนยันข้างต้น - นอกจากนี้ อย่าลืมลบ `assert.fail()` เมื่อเสร็จสิ้น 

# --hints--

ควรผ่านการทดสอบทั้งหมด

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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

ผู้เรียนควรทดสอบ `res.body.surname' เป็น  `'Giovanni'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรทดสอบ `res.body.surname' เป็น `'da Verrazzano'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);
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
