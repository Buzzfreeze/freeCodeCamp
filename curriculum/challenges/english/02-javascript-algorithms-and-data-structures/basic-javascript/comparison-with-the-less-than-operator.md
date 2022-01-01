---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

เครื่องหมายน้อยกว่า (`<`) เปรียบเทียบค่าของตัวเลขสองตัว ถ้าตัวเลขทางซ้ายน้อยกว่าตัวเลขทางขวา จะคืนค่ามาเป็น `true` แต่ถ้าไม่น้อยกว่าจะเป็น `false` 

เครื่องหมายน้อยกว่าก็จะแปลงประเภทของข้อมูลให้เลย เหมือนกับเวลาใช้เครื่องหมาย (`==`) 

**Examples**

```js
2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
```

แต่ละบรรทัดจะได้ค่าเป็น `true`, `true`, `false`, `false` และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายน้อยกว่าในบรรทัดที่กำหนดเพื่อให้การคืนค่าถูกต้อง


# --hints--

การเรียกใช้ฟังก์ชัน `testLessThan(0)` ต้องคืนค่าออกมาเป็น string `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

การเรียกใช้ฟังก์ชัน `testLessThan(24)` ต้องคืนค่าออกมาเป็น string `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

การเรียกใช้ฟังก์ชัน `testLessThan(25)` ต้องคืนค่าออกมาเป็น string `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

การเรียกใช้ฟังก์ชัน `testLessThan(54)` ต้องคืนค่าออกมาเป็น string `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

การเรียกใช้ฟังก์ชัน `testLessThan(55)` ต้องคืนค่าออกมาเป็น string `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

การเรียกใช้ฟังก์ชัน `testLessThan(99)` ต้องคืนค่าออกมาเป็น string `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

ต้องใช้เครื่องหมาย `<` อย่างน้อยสองที่ในโค้ด

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // แก้ไขบรรทัดนี้
    return "Under 25"; // น้อยกว่า 25
  }

  if (val) {  // แก้ไขบรรทัดนี้
    return "Under 55"; // น้อยกว่า 55
  }

  return "55 or Over"; // มากกว่าหรือเท่ากับ 55
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // แก้ไขบรรทัดนี้
    return "Under 25";
  }

  if (val < 55) {  // แก้ไขบรรทัดนี้
    return "Under 55";
  }

  return "55 or Over";
}
```
