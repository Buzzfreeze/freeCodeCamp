---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

เครื่องหมายอีกหนึ่งตัวที่เราจะเรียนคือ <dfn>logical and</dfn> operator (`&&`) โดยตัว `&&` นี้จะคืนค่าออกมาเป็น `true` เมื่อข้อมูลทางซ้ายและขวาเป็นจริงทั้งสองตัวเท่านั้น

เราสามารถซ้อนคำสั่ง if เพื่อให้ทำงานเหมือนเครื่องหมาย `&&` ก็ได้


```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

โค้ดด้านบนจะคืนค่า `Yes` ถ้า `num` นั้นมากกว่า `5` และน้อยกว่า `10` ด้วย
ซึ่ง logic ข้างบนนี้ก็สามารถเขียนอีกแบบได้ตามด้านล่าง:


```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

จงเปลี่ยนการใช้คำสั่ง if สองตัวให้กลายเป็นการใช้คำสั่ง if ตัวเดียว โดยใช้เครื่องหมาย `&&` 
ให้ฟังก์ชันคืนค่า string `Yes` ถ้า `val` มีค่าน้อยกว่าหรือเท่ากับ `50` และมากกว่าหรือเท่ากับ `25` แต่ถ้าไม่ตรงตามนี้ให้คืนค่าเป็น string `No`

# --hints--

ต้องใช้เครื่องหมาย `&&` หนึ่งครั้งในโค้ด


```js
assert(code.match(/&&/g).length === 1);
```

ต้องมีแค่คำสั่ง `if` ในโค้ดแค่อันเดียว

```js
assert(code.match(/if/g).length === 1);
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(0)` ต้องคืนค่าออกมาเป็น string `No`

```js
assert(testLogicalAnd(0) === 'No');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(24)` ต้องคืนค่าออกมาเป็น string `No`

```js
assert(testLogicalAnd(24) === 'No');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(25)` ต้องคืนค่าออกมาเป็น string `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(30)` ต้องคืนค่าออกมาเป็น string `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(50)` ต้องคืนค่าออกมาเป็น string `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(51)` ต้องคืนค่าออกมาเป็น string `No`

```js
assert(testLogicalAnd(51) === 'No');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(75)` ต้องคืนค่าออกมาเป็น string `No`

```js
assert(testLogicalAnd(75) === 'No');
```

การเรียกใช้ฟังก์ชัน `testLogicalAnd(80)` ต้องคืนค่าออกมาเป็น string `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // แก้โค้ดใต้บรรทัดนี้เท่านั้น

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // แก้โค้ดเหนือบรรทัดนี้เท่านั้น
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
