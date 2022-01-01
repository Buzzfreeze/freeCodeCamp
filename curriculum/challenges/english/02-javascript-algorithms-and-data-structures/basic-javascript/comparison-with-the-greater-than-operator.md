---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

เครื่องหมายมากกว่า (`>`) จะเปรียบเทียบค่าของตัวเลขสองตัว ถ้าตัวเลขทางซ้ายมากกว่าตัวเลขทางขวา จะคืนค่ากลับมาเป็น `true` ถ้าไม่มากกว่าจะเป็น `false`

เครื่องหมายมากกว่าก็จะแปลงประเภทของข้อมูลให้เลย เหมือนกับเวลาใช้เครื่องหมาย (`==`) 


**Examples**

```js
5   >  3
7   > '3'
2   >  3
'1' >  9
```

ผลลัพธ์ของแต่ละบรรทัดจะเป็น `true`, `true`, `false`, และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายมากกว่าในบรรทัดที่กำหนดเพื่อให้การคืนค่าถูกต้อง
เช่น ถ้าใส่ตัวเลขที่มากกว่า 100 จะคืนค่าออกมาเป็น `Over 100` (มากกว่า 100)

# --hints--

การเรียกใช้ฟังก์ชัน `testGreaterThan(0)` ต้องคืนค่าออกมาเป็น string  `10 or Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

การเรียกใช้ฟังก์ชัน `testGreaterThan(10)` ต้องคืนค่าออกมาเป็น string `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

การเรียกใช้ฟังก์ชัน `testGreaterThan(11)` ต้องคืนค่าออกมาเป็น string  `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

การเรียกใช้ฟังก์ชัน `testGreaterThan(99)` ต้องคืนค่าออกมาเป็น string  `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

การเรียกใช้ฟังก์ชัน `testGreaterThan(100)` ต้องคืนค่าออกมาเป็น string  `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

การเรียกใช้ฟังก์ชัน `testGreaterThan(101)` ต้องคืนค่าออกมาเป็น string  `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

การเรียกใช้ฟังก์ชัน `testGreaterThan(150)` ต้องคืนค่าออกมาเป็น string `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

ต้องใช้เครื่องหมาย `>` อย่างน้อย 2 ที่ในโค้ด

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // แก้ไขบรรทัดนี้
    return "Over 100"; // มากกว่า 100
  }

  if (val) {  // แก้ไขบรรทัดนี้
    return "Over 10"; // มากกว่า 10
  }

  return "10 or Under"; // น้อยกว่าหรือเท่ากับ 10
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // แก้ไขโค้ดบรรทัดนี้
    return "Over 100";
  }
  if (val > 10) {  // แก้ไขโค้ดบรรทัดนี้
    return "Over 10";
  }
  return "10 or Under";
}
```
