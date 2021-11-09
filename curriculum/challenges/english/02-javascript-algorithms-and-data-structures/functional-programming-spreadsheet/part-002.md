---
id: 5d7925323be8848dbc58a07a
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

ตรงบรรทัดบนก่อน `infixToFunction` ให้กำหนด empty function `add` โดยใช้คีย์เวิร์ด `function` ที่รับ parameters 2 ค่าคือ `x` และ `y`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').includes('functionadd(x,y){}'));
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

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
function add(x, y) {

}

const infixToFunction = {};
</script>
```
