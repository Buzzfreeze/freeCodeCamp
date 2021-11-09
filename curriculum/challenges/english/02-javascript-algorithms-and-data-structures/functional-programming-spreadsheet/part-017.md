---
id: 5d79253386060ed9eb04a070
title: Part 17
challengeType: 0
dashedName: part-17
---

# --description--

ตอนนี้ไม่ได้มีการเรียกใช้ `match` parameter จึงทำให้โปรแกรม linter บางตัวแสดงคำเตือน (warning) เรื่อง unused variable

เพื่อปิดไม่ให้แสดงคำเตือน ให้รวาง underscore (`_`) ไว้หน้า `match` parameter หรือแทนที่ `match` parameter ด้วย underscore (`_`) วิธีการดังกล่าวเป็นการบอกโปรแกรม reader และโปรแกรม linter ว่า คุณทราบแล้วว่าคุณไม่จำเป้นต้องใช้

หมายเหตุ underscore (`_`) สามารถใช้ในฟังก์ชันได้เพียงครั้งเดียว และอาจขัดแย้งกับ library อื่นๆ บางตัว (Lodash, Underscore.js)

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').includes('str.replace(regex,(_'));
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
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );
</script>
```
