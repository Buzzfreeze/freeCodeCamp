---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

ถ้าเราต้องตรวจสอบเงื่อนไขหลายๆ อัน เราสามารถเชื่อมคำสั่ง `if` ให้ต่อเนื่องกันได้ด้วยคำสั่ง `else if`

ลองดูและทำความเข้าใจตัวอย่างด้านล่าง:

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

# --instructions--


จงเปลี่ยนโค้ดไปใช้คำสั่ง `else if`

# --hints--



ต้องใช้คำสั่ง `else` อย่างน้อยสองครั้งในโค้ด

```js
assert(code.match(/else/g).length > 1);
```

ต้องใช้คำสั่ง `if` อย่างน้อยสองครั้งในโค้ด

```js
assert(code.match(/if/g).length > 1);
```

ต้องมีวงเล็บปีกกา (`{}`) ทั้งเปิดและปิดสำหรับคำสั่ง `if else` แต่ละตัว

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

การเรียกใช้ฟังก์ชัน `testElseIf(0)` ต้องคืนค่าออกมาเป็น string  `Smaller than 5`

```js
assert(testElseIf(0) === 'Smaller than 5');
```

การเรียกใช้ฟังก์ชัน `testElseIf(5)` ต้องคืนค่าออกมาเป็น string  `Between 5 and 10`

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

การเรียกใช้ฟังก์ชัน `testElseIf(7)` ต้องคืนค่าออกมาเป็น string  `Between 5 and 10`

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

การเรียกใช้ฟังก์ชัน `testElseIf(10)` ต้องคืนค่าออกมาเป็น string  `Between 5 and 10`

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

การเรียกใช้ฟังก์ชัน `testElseIf(12)` ต้องคืนค่าออกมาเป็น string  `Greater than 10`

```js
assert(testElseIf(12) === 'Greater than 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10"; // มากกว่า 10
  }

  if (val < 5) {
    return "Smaller than 5"; // น้อยกว่า 10
  }

  return "Between 5 and 10"; // อยู่ระหว่าง 5 และ 10
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```
