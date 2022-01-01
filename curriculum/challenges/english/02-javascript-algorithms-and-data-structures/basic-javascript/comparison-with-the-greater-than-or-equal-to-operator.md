---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

เครื่องหมายมากกว่าหรือเท่ากับ (`>=`) จะเปรียบเทียบค่าของตัวเลขสองตัว ถ้าตัวเลขทางซ้ายมากกว่าหรือเท่ากับตัวเลขทางขวา จะคืนค่ามาเป็น `true` และถ้าน้อยกว่าจะเป็น `false`

เครื่องหมายมากกว่าหรือเท่ากับก็จะแปลงประเภทของข้อมูลให้เลย เหมือนกับเวลาใช้เครื่องหมาย (`==`) 


**Examples**

```js
6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
```

แต่ละบรรทัดจะได้ค่าเป็น `true`, `true`, `false`, และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายมากกว่าหรือเท่ากับในบรรทัดที่กำหนดเพื่อให้การคืนค่าถูกต้อง

# --hints--

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(0)` ต้องคืนค่าออกมาเป็น string `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(9)` ต้องคืนค่าออกมาเป็น string `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(10)` ต้องคืนค่าออกมาเป็น string `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(11)` ต้องคืนค่าออกมาเป็น string `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(19)` ต้องคืนค่าออกมาเป็น string `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(100)` ต้องคืนค่าออกมาเป็น string `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

การเรียกใช้ฟังก์ชัน `testGreaterOrEqual(21)` ต้องคืนค่าออกมาเป็น string `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

ต้องใช้เครื่องหมาย `>=` อย่างน้อยสองครั้งในโค้ด

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // แก้ไขบรรทัดนี้
    return "20 or Over"; // มากกว่าหรือเท่ากับ 20
  }

  if (val) {  // แก้ไขบรรทัดนี้
    return "10 or Over"; // มากกว่าหรือเท่ากับ 10
  }

  return "Less than 10"; // น้อยกว่า 10
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // แก้ไขบรรทัดนี้
    return "20 or Over";
  }

  if (val >= 10) {  // แก้ไขบรรทัดนี้
    return "10 or Over";
  }

  return "Less than 10";
}
```
