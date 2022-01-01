---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

ถ้าเงื่อนไขในคำสั่ง `if` เป็นจริง โค้ดในวงเล็บปีกกาใต้ `if` จะทำงาน แต่ถ้าเงื่อนไขที่เราใส่ไปเป็นเท็จล่ะ? ปกติแล้วก็จะไม่มีอะไรเกิดขึ้น แต่ถ้าเราใช้คำสั่ง `else` โค้ดในวงเล็บปีกกาใต้ `else` ก็จะทำงานแทน

ลองดูและทำความเข้าใจตัวอย่างด้านล่าง:

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

จงรวมคำสั่ง `if` ที่มีให้กลายเป็นคำสั่ง `if/else`

# --hints--

ต้องมีการใช้คำสั่ง `if` แค่ครั้งเดียวในโค้ด

```js
assert(code.match(/if/g).length === 1);
```

ต้องใช้คำสั่ง `else` 

```js
assert(/else/g.test(code));
```

การเรียกใช้ฟังก์ชัน `testElse(4)` ต้องคืนค่าออกมาเป็น string  `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

การเรียกใช้ฟังก์ชัน `testElse(5)` ต้องคืนค่าออกมาเป็น string  `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

การเรียกใช้ฟังก์ชัน `testElse(6)` ต้องคืนค่าออกมาเป็น string  `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

การเรียกใช้ฟังก์ชัน `testElse(10)` ต้องคืนค่าออกมาเป็น string  `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

ห้ามแก้ไขโค้ดนอกเหนือจากส่วนที่กำหนด

```js
assert(/var result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  var result = "";
  // แก้โค้ดใต้บรรทัดนี้เท่านั้น

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  var result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
