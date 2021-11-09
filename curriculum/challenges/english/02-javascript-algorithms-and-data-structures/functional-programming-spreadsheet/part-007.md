---
id: 5d7925337954ed57a565a135
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

แม้ anonymous function กำหนดค่าให้กับตัวแปรได้ แต่จริงๆ แล้วก็ทำงานได้เหมือนกับการใช้ฟังก์ชันปกติ

จงเขียน `addVar` ใหม่ โดยใช้ arrow syntax ใน ES6:

```js
const fn = (x, y) => x;
```

หมายเหตุ จากตัวอย่างมีการคืนค่าออกมาด้วย

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').includes('constaddVar=(x,y)=>x+y'));
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

const addVar = function(x, y) {
  return x + y;
};

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
const addVar = (x, y) => x + y;

const infixToFunction = {};
</script>
```
