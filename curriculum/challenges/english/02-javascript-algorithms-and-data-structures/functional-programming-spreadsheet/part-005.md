---
id: 5d792532b07918c3a5904913
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

Anonymous functions คือฟังก์ชันที่ไม่มีชื่อ มักถูกเรียกเพียงครั้งเดียวจบ โดย syntax เหมือนกับฟังก์ชันทั่วไปแต่ไม่มีชื่อ

```js
function(x) {
  return x
}
```

ขั้นแรก ให้ลบบรรทัดที่ประกาศตัวแปร `addVar` ออก

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(!code.replace(/\s/g, '').includes('constaddVar=add'));
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

function add(x, y) {
  return x + y;
}

const addVar = add;

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
function add(x, y) {
  return x + y;
}

const infixToFunction = {};
</script>
```
