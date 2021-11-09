---
id: 5d79253297c0ebb149ea9fed
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

ด้วยหลักการ functional programming เรามักทำงานกับตัวแปรที่แก้ไขค่าไม่ได้ มากกว่าตัวแปรที่แก้ไขค่าได้

ตัวแปรที่แก้ไขค่าได้ (ประกาศด้วย `var` หรือ `let`) อาจทำให้เกิดผลลัพธ์ไม่พึงประสงค์หรือข้อผิดพลาดได้ แต่ตัวแปรที่ประกาศด้วย `const` ไม่สามารถกำหนดค่าได้อีกภายหลัง (reassigned) จึงทำให้ใช้งานง่ายกว่า เนื่องจากคุณไม่ต้องคอยเช็คค่าของตัวแปรอยู่ตลอด

เริ่มด้วยการสร้าง empty `infixToFunction` object โดยใช้ `const`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').includes('constinfixToFunction={}'));
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


</script>
```

# --solutions--

```html
<script>
const infixToFunction = {};
</script>
```
