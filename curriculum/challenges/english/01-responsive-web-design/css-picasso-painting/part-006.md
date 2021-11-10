---
id: 60b69a66b6ddb80858c5157c
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

ภายใน body tag, จงเพิ่ม 1 `div` element และจงกำหนดให้มันมีn `id` ที่ชื่อ `back-wall`

# --hints--

คุณควรเพิ่ม 1 `div` element.

```js
assert(document.querySelectorAll('div').length === 1);
```

Your `div` element should have the `id` value of `back-wall`.

```js
assert(document.querySelector('div')?.getAttribute('id') === 'back-wall');
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
  --fcc-editable-region--

  --fcc-editable-region--
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}
```
