---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

ลำดับในการใช้คำสั่ง `if` หรือ `else if` นั้นมีความสำคัญมาก

ฟังก์ชั่นจะเริ่มทำงานจากบนลงล่าง ดังนั้นต้องดูให้ดีว่าจะเอาคำสั่งไหนขึ้นก่อน

ลองดูฟังก์ชั่นตัวอย่างด้านล่าง

ตัวอย่างแรก:

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

และตัวอย่างที่สอง ที่เราสลับลำดับของคำสั่ง

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

ทั้งสองฟังก์ชันอาจจะดูคล้ายกัน แต่ว่าถ้าเราส่งตัวเลขเข้าไปในฟังก์ชันทั้งสองตัวนี้ เราจะได้ผลลัพธ์ไม่เหมือนกัน

```js
foo(0)
bar(0)
```

ฟังก์ชัน `foo(0)` จะคืนค่าออกมาเป็น string `Less than one` 
ส่วนฟังก์ชัน `bar(0)` จะคืนค่าออกมาเป็น string `Less than two`

# --instructions--

จงแก้ไขลำดับของ logic ในฟังก์ชันเพื่อให้ส่งค่ากลับมาได้อย่างถูกต้องในทุกเคส

# --hints--

การเรียกใช้ฟังก์ชัน `orderMyLogic(4)` ต้องคืนค่าออกมาเป็น string `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

การเรียกใช้ฟังก์ชัน `orderMyLogic(6)` ต้องคืนค่าออกมาเป็น string `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

การเรียกใช้ฟังก์ชัน `orderMyLogic(11)` ต้องคืนค่าออกมาเป็น string `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10"; // น้อยกว่า 10
  } else if (val < 5) {
    return "Less than 5"; // น้อยกว่า 5
  } else {
    return "Greater than or equal to 10"; // มากกว่าหรือเท่ากับ 10
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
