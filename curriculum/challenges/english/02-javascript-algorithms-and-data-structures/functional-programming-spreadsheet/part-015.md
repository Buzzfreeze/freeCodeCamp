---
id: 5d79253358e8f646cbeb2bb0
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

จงเปลี่ยน `"+"` ที่เรียก `infixToFunction` ให้เป็น `fn`

`fn` เป็นเครื่องหมายที่ผู้ใช้งานกรอกเข้ามา (`+`, `-`, `*` or `/`)  เราใช้ `infixToFunction` เพื่อเรียกฟังก์ชันที่เกี่ยวข้องกับเครื่องหมายเหล่านั้น

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  code
    .replace(/\s/g, '')
    .includes('str.replace(regex,(match,arg1,fn,arg2)=>infixToFunction[fn])')
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
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction["+"]
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
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn]
  );
</script>
```
