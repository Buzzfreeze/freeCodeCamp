---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

# - <dfn>logical or</dfn> operator (`||`) คืนค่า `true` หาก <dfn>operands</dfn> (ค่าที่ทดสอบ) ตัวใดตัวหนึ่งเป็น `true` นอกเหนือจากนั้น จะคืนค่า `false`

<dfn>logical or</dfn> operator ประกอบด้วย pipe symbols 2 อัน (`||`) ซึ่งอยู่ระหว่างปุ่ม Backspace และ Enter

รูปแบบด้านล่ารคล้ายกับที่เราเรียนกันมา

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

จะคืนค่า `Yes` ก็ต่อเมื่อ `num` อยู่ระหว่าง  `5` และ `10` (รวม 5 และ 10 ด้วย)  ซึ่ง logic เดียวกันนี้ สามารถเขียนได้ดังนี้:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

จงรวมคำสั่ง `if` ทั้งสองคำสั่งให้เป็น if คำสั่งเดียว เพื่อให้คืนค่า string `Outside` ถ้า `val` ไม่ได้อยู่ระหว่าง `10` และ `20` (รวม `10` และ `20` ด้วย) แต่ถ้าเงื่อนไขเป็นเท็จ จะคืนค่า string `Inside`

# --hints--

คุณควรใช้เครื่องหมาย `||` หนึ่งครั้ง

```js
assert(code.match(/\|\|/g).length === 1);
```

# -คุณควรมีแค่คำสั่ง `if` อันเดียว

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` ควรคืนค่า string `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` ควรคืนค่า string `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` ควรคืนค่า string `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` ควรคืนค่า string `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` ควรคืนค่า string `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` ควรคืนค่า string `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` ควรคืนค่า string `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` ควรคืนค่า string `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
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
