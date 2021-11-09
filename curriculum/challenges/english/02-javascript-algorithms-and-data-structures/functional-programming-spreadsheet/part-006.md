---
id: 5d792533cc8b18b6c133edc7
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

Anonymous functions มักถูกส่งเข้าไปเป็น arguments ของฟังก์ชันอื่น แต่หากคุณต้องการเรียกใช้ Anonymous functions ภายหลัง คุณสามารถกำหนดค่า Anonymous functions ให้กับตัวแปร และเรียกใช้ด้วยชื่อตัวแปร 

```js
const fn = function(x) {
  return x;
}

fn();
```

จงกำหนดค่า anonymous function ให้กับตัวแปร `addVar`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').includes('constaddVar=function(x,y){returnx+y'));
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
const addVar = function(x, y) {
  return x + y;
};

const infixToFunction = {};
</script>
```
