---
id: 5d7925329445167ecc2ac9c9
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

ในภาษา JavaScript ฟังก์ชันถือเป็น first class หมายความว่า เราสามารถใช้งานฟังก์ชันได้เหมือนค่าทั่วๆ ไป เช่น สามารถนำฟังก์ชันกำหนดค่า (assigned) ให้กับตัวแปร 

จงกำหนดค่า `add` ให้กับตัวแปรใหม่ชื่อ `addVar`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').includes('constaddVar=add'));
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

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
function add(x, y) {
  return x + y;
}

const addVar = add;

const infixToFunction = {};
</script>
```
