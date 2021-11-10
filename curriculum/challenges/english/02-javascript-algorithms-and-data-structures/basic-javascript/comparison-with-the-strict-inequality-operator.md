---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

strict inequality operator (`!==`) เป็นตรรกะที่ตรงกันข้ามกับ strict equality operator (`===`) ซึ่ง (`!==`) หมายถึง ถ้าค่าข้อมูลและประเภทข้อมูลเท่า จะคืนค่า `false` ในขณะที่ (`===`) จะคืนค่า `true` โดย strict inequality operator (`!==`) จะไม่แปลงประเภทข้อมูล


**Examples**

```js
3 !==  3
3 !== '3'
4 !==  3
```

ตามลำดับแต่ละบรรทัดจะได้ค่า  `false`, `true`, และ `true`.

# --instructions--

Add the strict inequality operator to the `if` statement so the function will return the string `Not Equal` when `val` is not strictly equal to `17`

# - เพิ่มเครื่องหมาย (`!==`) ในคำสั่ง `if` เพื่อให้ function ส่งคืนค่า string `Not Equal` เมื่อ `val` ไม่เท่า `17` ทั้งข้อมูลและประเภท

# --hints--

`testStrictNotEqual(17)` should return the string `Equal`

# - `testStrictNotEqual(17)`  ควรคืนค่า string `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` should return the string `Not Equal`

# - `testStrictNotEqual("17")` ควรคืนค่า string `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` should return the string `Not Equal`

# - `testStrictNotEqual(12)` ควรคืนค่า string `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` should return the string `Not Equal`

# - `testStrictNotEqual("bob")` ควรคืนค่า string `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

You should use the `!==` operator

# - คุณควรใช้เครื่องหมาย `!==`

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
