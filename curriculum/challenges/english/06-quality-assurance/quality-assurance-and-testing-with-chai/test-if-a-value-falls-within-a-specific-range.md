---
id: 587d824c367417b2b2512c4f
title: Test if a Value Falls within a Specific Range
challengeType: 2
forumTopicId: 301598
dashedName: test-if-a-value-falls-within-a-specific-range
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

```javascript
.approximately(actual, expected, delta, [message])
```

ยืนยันว่า `actual` เท่ากับ `expected` ภายในช่วง +/- `delta`

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้การทดสอบที่ระบุว่า "#10" ในชุด `Comparisons` ให้เปลี่ยน `assert` แต่ละรายการเป็น `assert.approximately` เพื่อให้ผ่านการทดสอบ (ควรประเมินค่า `true`)

เลือกช่วงต่ำสุด (parameter ที่ 3) เพื่อให้การทดสอบผ่านเสมอ ควรน้อยกว่า 1

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกช่วงที่ถูกต้องสำหรับการยืนยันครั้งแรก -`approximately(actual, expected, range)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'approximately');
      assert.equal(
        data.assertions[0].args[2],
        0.5,
        "weirdNumbers(0.5) is in the range (0.5, 1.5]. It's within 1 +/- 0.5"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกช่วงที่ถูกต้องสำหรับการยืนยันครั้งที่สอง -`approximately(actual, expected, range)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'approximately');
      assert.equal(
        data.assertions[1].args[2],
        0.8,
        "weirdNumbers(0.2) is in the range (0.2, 1.2]. It's within 1 +/- 0.8"
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
