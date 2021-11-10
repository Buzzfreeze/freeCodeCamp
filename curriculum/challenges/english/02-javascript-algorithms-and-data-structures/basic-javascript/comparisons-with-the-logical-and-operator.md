---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

บางครั้งคุณจะต้องการทดสอบมากกว่าหนึ่งสิ่งในครั้งเดียว <dfn>logical and</dfn> (`&&`) จะคืนค่า `true` หาก <dfn>operands</dfn> (ค่าที่ทดสอบ)ทางซ้ายและขวาเป็นจริงเท่านั้น

การซ้อนคำสั่ง if (คือมีคำสั่ง if ภายในคำสั่ง if) สามารถทำให้ได้ผลลัพธ์ที่เหมือนกัน


```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

จะคืนค่า `Yes` ก็ต่อเมื่อ `num` มากกว่า `5` และน้อยกว่า `10` ซึ่ง logic เดียวกันนี้ สามารถเขียนได้ดังนี้:


```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

จงแทนที่คำสั่ง if ทั้งสองด้วย if คำสั่งเดียว โดยใช้เครื่องหมาย `&&` กำหนดให้คืนค่า string `Yes` ถ้า `val` น้อยกว่าหรือเท่ากับ `50` และมากกว่าหรือเท่ากับ `25` แต่ถ้าเงื่อนไขเป็นเท็จ จะคืนค่า string `No`

# --hints--

คุณควรใช้เครื่องหมาย `&&` หนึ่งครั้ง


```js
assert(code.match(/&&/g).length === 1);
```

คุณควรมีแค่คำสั่ง `if` อันเดียว

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` ควรคืนค่า string `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` ควรคืนค่า string `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` ควรคืนค่า string `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` ควรคืนค่า string `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` ควรคืนค่า string `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` ควรคืนค่า string `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` ควรคืนค่า string `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` ควรคืนค่า string `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
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
