---
id: 5d792533717672657b81aa69
title: Part 18
challengeType: 0
dashedName: part-18
---

# --description--

เมื่อประกาศ arrow function ที่มี argument เดียว เราสามารถละวงเล็บของ argument ได้

```js
const greeting = name => `Hello !`;
```

จงสร้างฟังก์ชัน `highPrecedence` ที่มี argument ตัวเดียวคือ `str` แล้วคืนค่าออกมาเป็น `str`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(highPrecedence('a') === 'a');
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
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = str => str;
</script>
```
