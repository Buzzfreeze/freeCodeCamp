---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

inequality operator (`!=`) จะทำงานตรงข้ามกับ equality operator (`==`) ซึ่ง (`!=`) หมายถึง ถ้าค่าข้อมูลเท่า จะส่งคืนค่า `false` ในขณะที่ (`==`) จะคืนค่า `true` อย่างไรก็ตาม เช่นเดียวกับ equality operator (`==`) เมื่อมีการเปรียบเทียบ inequality operator (`!=`) จะทำการแปลงประเภทข้อมุลให้


**Examples**

```js
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
```

ผลลัพธ์แต่ละบรรทัดจะเป็น `true`, `false`, `false`, `false`, และ `false` ตามลำดับ


# --instructions--

จงเพิ่ม inequality operator `!=` ใน `if` statement เพื่อให้ function คืนค่า string `Not Equal` เมื่อ `val` ไม่เท่ากับ `99`


# --hints--

`testNotEqual(99)` ควรคืนค่า string `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` ควรคืนค่า string `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` ควรคืนค่า string `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` ควรคืนค่า string `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` ควรคืนค่า string `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

คุณควรใช้เครื่องหมาย `!=` operator

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```
