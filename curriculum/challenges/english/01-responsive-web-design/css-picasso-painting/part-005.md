---
id: 60b69a66b6ddb80858c5157b
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

เพื่อที่จะได้เริ่มสร้างภาพวาดของคุณ จงกำหนดให้ `body` element มี `background-color` เป็น `rgb(184, 132, 46)`

# --hints--

คุณควรใช้ `body` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('body'));
```

Your `body` element should have the `background-color` property set to `rgb (184, 132, 46)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('body')?.backgroundColor === 'rgb(184, 132, 46)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
  </body>
</html>
```  

```css

--fcc-editable-region--

--fcc-editable-region--

```
