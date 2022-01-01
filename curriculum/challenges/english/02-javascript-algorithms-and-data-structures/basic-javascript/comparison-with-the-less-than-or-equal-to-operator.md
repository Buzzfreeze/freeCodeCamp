---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

เครื่องหมายน้อยกว่าหรือเท่ากับ (`<=`) จะเปรียบเทียบค่าของตัวเลขสองตัว ถ้าตัวเลขทางซ้ายน้อยกว่าหรือเท่ากับตัวเลขทางขวา จะคืนค่ามาเป็น `true` 
แต่ถ้าตัวเลขทางซ้ายมากกว่าตัวเลขทางขวาจะคืนค่า `false` แทน

เครื่องหมายน้อยกว่าหรือเท่ากับก็จะแปลงประเภทของข้อมูลให้เลย เหมือนกับเวลาใช้เครื่องหมาย (`==`) 

**Examples**

```js
4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
```

แต่ละบรรทัดจะได้ค่าเป็น `true`, `true`, `true`, `false` และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายน้อยกว่าหรือเท่ากับในบรรทัดที่กำหนดเพื่อให้การคืนค่าถูกต้อง

# --hints--

การเรียกใช้ฟังก์ชัน `testLessOrEqual(0)` ต้องคืนค่าออกมาเป็น string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

การเรียกใช้ฟังก์ชัน `testLessOrEqual(11)` ต้องคืนค่าออกมาเป็น string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

การเรียกใช้ฟังก์ชัน `testLessOrEqual(12)` ต้องคืนค่าออกมาเป็น string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

การเรียกใช้ฟังก์ชัน `testLessOrEqual(23)` ต้องคืนค่าออกมาเป็น string `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

การเรียกใช้ฟังก์ชัน `testLessOrEqual(24)` ต้องคืนค่าออกมาเป็น string `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

การเรียกใช้ฟังก์ชัน `testLessOrEqual(25)` ต้องคืนค่าออกมาเป็น string `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

การเรียกใช้ฟังก์ชัน `testLessOrEqual(55)` ต้องคืนค่าออกมาเป็น string `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

ต้องใช้เครื่องหมาย `<=` อย่างน้อยสองที่ในโค้ด


```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // แก้ไขบรรทัดนี้
    return "Smaller Than or Equal to 12"; // น้อยกว่าหรือเท่ากับ 12
  }

  if (val) {  // แก้ไขบรรทัดนี้
    return "Smaller Than or Equal to 24"; // น้อยกว่าหรือเท่ากับ 24
  }

  return "More Than 24"; // มากกว่า 24
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // แก้ไขบรรทัดนี้
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // แก้ไขบรรทัดนี้
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
