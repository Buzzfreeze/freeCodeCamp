---
id: 5d792533bb38fab70b27f527
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

`arg1` และ `arg2` เป็นตัวเลขที่ผู้ใช้งานกรอกเข้ามาเป็น string เช่น "1+3"

จงส่งค่า `parseFloat(arg1)` และ `parseFloat(arg2)` เป็น arguments ให้กับ `infixToFunction[fn]` (ให้นึกถึงว่า `infixToFunction[fn]` คือฟังก์ชัน)

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
const regex = /([0-9.]+)([+-\/*])([0-9.]+)/;
assert(
  infixEval('23+35', regex) === '58' &&
    infixEval('100-20', regex) === '80' &&
    infixEval('10*10', regex) === '100' &&
    infixEval('120/6', regex) === '20'
);
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

## --after-user-code--

```html
</body>
</html>
```

## --seed-contents--

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn]
  );


</script>
```

# --solutions--

```html
<script>
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );
</script>
```
