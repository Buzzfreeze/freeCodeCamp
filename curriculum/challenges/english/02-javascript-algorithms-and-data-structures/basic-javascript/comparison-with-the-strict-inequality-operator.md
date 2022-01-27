---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

strict inequality operator (`!==`) นั้นตรงข้ามกับ strict equality operator (`===`) เลย  
เช่น ถ้าใช้ `!==` แล้วได้ผลลัพธ์เป็น `false` แล้วเอาข้อมูลเดียวกันมาใช้กับ `===` จะได้ค่า `true` แทน แล้วก็ strict inequality operator (`!==`) จะเหมือนกับ `===` ตรงที่จะไม่แปลงประเภทข้อมูลให้


**Examples**

```js
3 !==  3
3 !== '3'
4 !==  3
```

จากตัวอย่างด้านบนจะได้ค่าเป็น  `false`, `true`, และ `true` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมาย `!==` ในคำสั่ง `if` เพื่อให้ function คืนค่าออกมาเป็น string ซึ่งมีค่าเป็น `Not Equal` เมื่อข้อมูล `val` ไม่เท่ากับ `17`

# --hints--

การเรียกใช้ฟังก์ชัน `testStrictNotEqual(17)` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```


การเรียกใช้ฟังก์ชัน `testStrictNotEqual("17")` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `testStrictNotEqual(12)` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `testStrictNotEqual("bob")` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

ต้องใช้เครื่องหมาย `!==`

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function testStrictNotEqual(val) {
  if (val) { // แก้บรรทัดนี้เท่านั้น
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
