---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

ถ้าเราไม่เขียนคำสั่ง `break` ไว้ในแต่ละ `case` ของคำสั่ง `switch` ก็จะทำให้ `case` ถัดไปทำงานไปเรื่อยๆ จนกว่าจะเจอคำสั่ง `break`  
ถ้าคุณมีหลาย input ที่อยากให้มี output เหมือนกัน คุณจะสามารถใช้คำสั่ง `switch` แบบนี้ได้:


```js
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

`case` 1, 2, และ 3 จะทำให้เกิดผลลัพธ์เดียวกัน

# --instructions--

จงเขียนคำสั่ง switch เพื่อกำหนดค่าตัวแปร `answer` ตามช่วงต่อไปนี้: 

`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**หมายเหตุ:** คุณจะต้องมีคำสั่ง `case` สำหรับตัวเลขทุกตัวในช่วงที่กำหนด

# --hints--

การเรียกใช้ฟังก์ชัน `sequentialSizes(1)` ต้องคืนค่าออกมาเป็น string `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(2)` ต้องคืนค่าออกมาเป็น string `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(3)` ต้องคืนค่าออกมาเป็น string `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(4)` ต้องคืนค่าออกมาเป็น string `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(5)` ต้องคืนค่าออกมาเป็น string `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(6)` ต้องคืนค่าออกมาเป็น string `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(7)` ต้องคืนค่าออกมาเป็น string `High`

```js
assert(sequentialSizes(7) === 'High');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(8)` ต้องคืนค่าออกมาเป็น string `High`

```js
assert(sequentialSizes(8) === 'High');
```

การเรียกใช้ฟังก์ชัน `sequentialSizes(9)` ต้องคืนค่าออกมาเป็น string `High`

```js
assert(sequentialSizes(9) === 'High');
```

ห้ามใช้คำสั่ง `if` และ `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

ต้องใช้คำสั่ง `case` เก้าครั้งในโค้ด

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  var answer = "";
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
