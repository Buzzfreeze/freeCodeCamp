---
id: 60b69a66b6ddb80858c5157d
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

จงใช้ id selector เพื่อกำหนดให้ `back-wall` element มี `background-color` เป็น `#8B4513`

# --hints--

คุณควรใช้ `#back-wall` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall'));
```

Your `#back-wall` selector should have a `background-color` of `#8B4513`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.backgroundColor === 'rgb(139, 69, 19)');
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
    <div id="back-wall"></div>
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

--fcc-editable-region--

--fcc-editable-region--

```
