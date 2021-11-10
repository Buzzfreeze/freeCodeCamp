---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

เมื่อเงื่อนไขของคำสั่ง `if` เป็นจริง บล็อกของโค้ดที่ตามมาจะทำงาน แล้วถ้าเงื่อนไขนั้นเป็นเท็จล่ะ? โดยทั่วไปจะไม่มีอะไรเกิดขึ้น แต่ถ้าใช้คำสั่ง `else` บล็อกของโค้ดของ `else` จะทำงานได้

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

จงรวมคำสั่ง `if` ให้เป็นคำสั่ง `if/else`

# --hints--

คุณควรมีคำสั่ง `if` แค่คำสั่งเดียวใน editor

```js
assert(code.match(/if/g).length === 1);
```

คุณควรใช้คำสั่ง `else` 

```js
assert(/else/g.test(code));
```

`testElse(4)` ควรคืนค่า string  `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` ควรคืนค่า string  `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` ควรคืนค่า string  `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` ควรคืนค่า string  `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

คุณไม่ควรเปลี่ยนโค้ดด้านบนหรือด้านล่างของ comment ที่กำหนด

```js
assert(/var result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
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
