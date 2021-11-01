---
id: 5d8a4cfbe6b6180ed9a1c9e9
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

กลับไปที่ HTML file ให้เพิ่ม `script` tag ที่ด้านล่างของ head element และกำหนดให้ `src` attribute เป็น `./d3-5.9.2.min.js` อย่าลืม closing tag ขั้นตอนนี้เป็นการเพิ่ม D3 library ให้กับ project จาก downloaded copy

# --hints--

test-text

```js
const script = code.match(/<script\s+[\s\S]+?[^>]>\s*<\/script\s*>/gi)[0];
assert(/src\s*=\s*('|")\s*(\.\/)?d3-5.9.2.min.js\s*\1/gi.test(script));
```

# --seed--

## --before-user-code--

```html
<style>
  body {
    background-color: #ccc;
    padding: 100px 10px;
  }

  .dashboard {
    width: 980px;
    height: 500px;
    background-color: white;
    box-shadow: 5px 5px 5px 5px #888;
    margin: auto;
    display: flex;
    align-items: center;
  }
</style>
```

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">

    
  </head>

  <body>
    <div class="dashboard"></div>
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
    <script src="./d3-5.9.2.min.js"></script>

    
 </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```
