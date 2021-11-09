---
id: 5d792533ed00e75d129e1b18
title: Part 13
challengeType: 0
dashedName: part-13
---

# --description--

`replace` เป็น higher order function เพราะสามารถรับฟังก์ชันเป็น argument ได้ (higher order functions ก็ยังสามารถคืนค่าเป็นฟังก์ชันได้)

จงส่งค่าฟังก์ชัน `+` จาก `infixToFunction` เข้าไปเป็น argument ที่สองของ `replace` method

นี่คือวิธีที่คุณจะส่งค่าฟังก์ชัน `-` เข้าไป:

```js
str.replace(regex, infixToFunction["-"])
```

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(infixEval('ab', /(a)b/) === 'aba');
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

const infixEval = (str, regex) => str.replace(regex, "");


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

const infixEval = (str, regex) => str.replace(regex, infixToFunction["+"]);
</script>
```
