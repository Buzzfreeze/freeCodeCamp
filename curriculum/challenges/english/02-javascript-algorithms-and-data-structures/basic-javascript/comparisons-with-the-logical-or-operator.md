---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--
เครื่องหมายต่อมาคือ <dfn>logical or</dfn> operator (`||`) ซึ่งจะคืนค่าออกมาเป็น `true` ถ้าค่าของข้อมูลตัวใดตัวหนึ่งเป็น `true` (จะเป็นข้อมูลด้านซ้ายหรือด้านขวาก็ได้) แต่ถ้าไม่มีข้อมูลตัวไหนเป็น `true` เลย ก็จะคืนค่าออกมาเป็น `false` 

การพิมพ์ <dfn>logical or</dfn> operator จะใช้ pipe symbol 2 อัน (`||`) ซึ่งเครื่องหมายนี้จะอยู่ใต้ปุ่ม Backspace และเหนือปุ่ม Enter บน keyboard ของคุณ (ปกติแล้วจะอยู่กับตัว ฃ, ฅ)

ถ้าจำที่เรียนมาได้จะเข้าใจโค้ดด้านล่างนี้ได้ไม่ยาก

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

โค้ดนี้จะคืนค่าเป็น `Yes` ถ้าค่าของ `num` อยู่ในช่วง `5` ถึง `10` (รวม 5 และ 10 ด้วย)
ซึ่ง logic เดียวกันนี้ สามารถเขียนอีกแบบได้ดังนี้:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

จงรวมคำสั่ง `if` ทั้งสองคำสั่งให้เป็นกลายเป็น if คำสั่งเดียวโดยใช้เงื่อนไขดังนี้
ถ้า `val` **ไม่ได้**มีค่าในช่วง `10` ถึง `20` (รวม `10` และ `20` ด้วย) ให้คืนค่าเป็น string `Outside`  แต่ถ้ามีค่าอยู่ในช่วงนี้ให้คืนค่าออกมาเป็น string `Inside` แทน

# --hints--

ต้องใช้เครื่องหมาย `||` หนึ่งครั้งในโค้ด

```js
assert(code.match(/\|\|/g).length === 1);
```

ต้องมีคำสั่ง `if` แค่อันเดียวในโค้ด

```js
assert(code.match(/if/g).length === 1);
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(0)` ต้องคืนค่าออกมาเป็น string `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(9)` ต้องคืนค่าออกมาเป็น string `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(10)` ต้องคืนค่าออกมาเป็น string `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(15)` ต้องคืนค่าออกมาเป็น string `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(19)` ต้องคืนค่าออกมาเป็น string `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(20)` ต้องคืนค่าออกมาเป็น string `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(21)` ต้องคืนค่าออกมาเป็น string `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

การเรียกใช้ฟังก์ชัน `testLogicalOr(25)` ต้องคืนค่าออกมาเป็น string `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
