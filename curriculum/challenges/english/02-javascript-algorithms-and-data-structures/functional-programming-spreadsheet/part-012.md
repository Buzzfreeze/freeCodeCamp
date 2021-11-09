---
id: 5d7925330918ae4a2f282e7e
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

ใช้ arrow function syntax เพื่อสร้างฟังก์ชัน `infixEval` ที่รับ argument เป็น `str` และ `regex` แล้วคืนค่า `str.replace(regex, "")`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  /constinfixEval=\(str,regex\)=>str\.replace\(regex,['"]{2}\)/.test(
    code.replace(/\s/g, '')
  )
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

const infixEval = (str, regex) => str.replace(regex, "");
</script>
```
