---
id: 60a3e3396c7b40068ad69972
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

จงเพิ่ม `height` property ที่มีค่า `600px` ให้กับ `.canvas` rule.

# --hints--

คุณควรกำหนดให้ `height` property มีค่า `600px`

```js
const hasHeight = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.height === '600px');
assert(hasHeight);
```

Your `.canvas` element should have a `height` of `600px`.

```js
const canvasHeight = new __helpers.CSSHelp(document).getStyle('.canvas')?.getPropertyValue('height');
assert(canvasHeight === '600px');
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
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
