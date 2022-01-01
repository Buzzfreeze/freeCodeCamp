---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

inequality operator (`!=`) จะทำงานตรงข้ามกับ equality operator (`==`) เช่น ถ้าค่าของข้อมูลเท่ากัน inequality operator (`!=`) จะคืนค่า `false` ออกมา ในขณะที่ถ้าเป็น equality operator (`==`) จะคืนค่า `true` 
และ inequality operator (`!=`) ก็เหมือนกับ equality operator (`==`) ตรงที่จะทำการแปลงประเภทข้อมุลให้เมื่อมีการเปรียบเทียบ


**ตัวอย่าง**

```js
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
```

ผลลัพธ์ของแต่ละบรรทัดจะเป็น `true`, `false`, `false`, `false`, และ `false` ตามลำดับ


# --instructions--

จงเพิ่ม inequality operator `!=` ในคำสั่ง `if` เพื่อให้ฟังก์ชันคืนค่าออกมาเป็น string ที่มีค่าเท่ากับ `Not Equal` เมื่อ `val` มีค่าไม่เท่ากับ `99`


# --hints--

การเรียกใช้ฟังก์ชัน `testNotEqual(99)` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

การเรียกใช้ฟังก์ชัน `testNotEqual("99")` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

การเรียกใช้ฟังก์ชัน `testNotEqual(12)` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `testNotEqual("12")` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `testNotEqual("bob")` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

คุณต้องใช้เครื่องหมาย `!=`

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function testNotEqual(val) {
  if (val) { // แก้ไขบรรทัดนี้
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
