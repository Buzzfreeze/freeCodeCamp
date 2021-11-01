---
id: 5d8a4cfbe6b6180ed9a1c9e1
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

ข้างล่าง title ให้ link external stylesheet โดยเพิ่ม `link` element กับ `rel` attribute ของ `stylesheet` และ `href` attribute ของ`./dashboard.css` อย่างลืมว่า link elements ไม่จำเป็นต้องมี closing tag

# --hints--

test-text

```js
const link = code.match(/<link\s+[\s\S]+?[^>]>/gi)[0];
assert(
  /rel\s*=\s*('|")\s*stylesheet\s*\1/gi.test(link) &&
    /href\s*=\s*('|")\s*(.\/)?dashboard\.css\s*\1/gi.test(link)
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>

    
  </head>

  <body>
  </body>
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
  </head>

  <body>
  </body>
</html>
```
