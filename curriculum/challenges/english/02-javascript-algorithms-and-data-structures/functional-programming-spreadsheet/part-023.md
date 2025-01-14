---
id: 5d79253307ecd49e030bdcd1
title: Part 23
challengeType: 0
dashedName: part-23
---

# --description--

Recursion คือการที่ฟังก์ชันเรียกตัวเอง เรามักใช้ recursive แทนที่การใช้ `while`/`for` loops เนื่องจาก loops มักเกี่ยวข้องกับการเปลี่ยนแปลง state

จงแทนที่ empty string ใน `highPrecedence` ด้วยการเรียก `highPrecedence` และส่งค่า `str2` เป็น argument

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  highPrecedence('2*2*2') === '8' &&
    highPrecedence('2*2') === '4' &&
    highPrecedence('2+2') === '2+2'
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
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : "";
};


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
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};
</script>
```
