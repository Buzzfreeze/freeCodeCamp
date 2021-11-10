---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

ลำดับมีความสำคัญอย่างมาก สำหรับ `if`, `else if` statements

function จะทำงานจากด้านบนไปด้านล่าง ดังนั้นคุณจะต้องระมัดระวังว่าคำสั่งไหนทำก่อน

ลองดูตัวอย่างของทั้งสอง function

ตัวอย่างแรก

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

ตัวอย่างที่สองเพียงแค่สลับลำดับคำสั่ง

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

ขณะที่ทั้งสอง function ดูเกือบจะเหมือนกัน แต่หากเราส่ง number ให้กับทั้งสอง function เราจะได้ผลลัพธ์ที่ต่างกัน


```js
foo(0)
bar(0)
```

`foo(0)` จะคืนค่า string `Less than one` ส่วน `bar(0)` จะคืนค่า string `Less than two`

# --instructions--

จงแก้ไขลำดับของ logic ใน function เพื่อให้ส่งค่ากลับมาได้อย่างถูกต้องในทุกเคส

# --hints--

`orderMyLogic(4)` ควรคืนค่า string `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` ควรคืนค่า string `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` ควรคืนค่า string `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
