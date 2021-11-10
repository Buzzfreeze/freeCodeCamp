---
id: 60a3e3396c7b40068ad69973
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

จงเปลี่ยน `background-color` ของภาพใบให้เป็น `#4d0f00`

# --hints--

คุณควรกำหนดให้ `background-color` property มีค่า `#4d0f00`

```js
const hasBackground = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['background-color'] === 'rgb(77, 15, 0)');
// TODO: Why does it still do this?
assert(hasBackground);
```

Your `.canvas` element should have a `background-color` of `#4d0f00`.

```js
const canvasBackground = new __helpers.CSSHelp(document).getStyle('.canvas')?.getPropertyValue('background-color');
assert(canvasBackground === 'rgb(77, 15, 0)');
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
--fcc-editable-region--

--fcc-editable-region--
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
    <link href="./styles.css" rel="stylesheet">
  </head>
  <body>
    <div class="canvas">
    </div>
  </body>
</html>
```
