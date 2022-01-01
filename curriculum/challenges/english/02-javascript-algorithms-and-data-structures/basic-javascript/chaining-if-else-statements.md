---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

เราสามารถเชื่อมคำสั่ง `if/else` เข้าด้วยกันเพื่อสร้าง logic ที่ซับซ้อนมากขึ้นได้ 
<dfn>pseudocode</dfn> ด้านล่างนี้เป็นตัวอย่างของการเชื่อมคำสั่ง `if` / `else if` เข้าด้วยกัน


```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

# --instructions--

จงเชื่อมคำสั่ง `if`/`else if` เพื่อให้เป็นไปตามเงื่อนไขด้านล่าง

ถ้า `num < 5` จะคืนค่า `Tiny`  
ถ้า `num < 10` จะคืนค่า `Small`  
ถ้า `num < 15` จะคืนค่า `Medium`  
ถ้า `num < 20` จะคืนค่า `Large`  
ถ้า `num >= 20` จะคืนค่า `Huge`

# --hints--

ต้องใช้คำสั่ง `else` อย่างน้อยสี่ครั้งในโค้ด

```js
assert(code.match(/else/g).length > 3);
```

ต้องใช้คำสั่ง `if` อย่างน้อยสี่ครั้งในโค้ด

```js
assert(code.match(/if/g).length > 3);
```

ต้องใช้คำสั่ง `return` อย่างน้อยหนึ่งครั้งในโค้ด

```js
assert(code.match(/return/g).length >= 1);
```

การเรียกใช้ฟังก์ชัน `testSize(0)` ต้องคืนค่าออกมาเป็น string `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

การเรียกใช้ฟังก์ชัน `testSize(4)` ต้องคืนค่าออกมาเป็น string `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

การเรียกใช้ฟังก์ชัน `testSize(5)` ต้องคืนค่าออกมาเป็น string `Small`

```js
assert(testSize(5) === 'Small');
```

การเรียกใช้ฟังก์ชัน `testSize(8)` ต้องคืนค่าออกมาเป็น string `Small`

```js
assert(testSize(8) === 'Small');
```

การเรียกใช้ฟังก์ชัน `testSize(10)` ต้องคืนค่าออกมาเป็น string `Medium`

```js
assert(testSize(10) === 'Medium');
```

การเรียกใช้ฟังก์ชัน `testSize(14)` ต้องคืนค่าออกมาเป็น string `Medium`

```js
assert(testSize(14) === 'Medium');
```

การเรียกใช้ฟังก์ชัน `testSize(15)` ต้องคืนค่าออกมาเป็น string `Large`

```js
assert(testSize(15) === 'Large');
```

การเรียกใช้ฟังก์ชัน `testSize(17)` ต้องคืนค่าออกมาเป็น string `Large`

```js
assert(testSize(17) === 'Large');
```

การเรียกใช้ฟังก์ชัน `testSize(20)` ต้องคืนค่าออกมาเป็น string `Huge`

```js
assert(testSize(20) === 'Huge');
```

การเรียกใช้ฟังก์ชัน `testSize(25)` ต้องคืนค่าออกมาเป็น string `Huge`

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  return "Change Me";
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
