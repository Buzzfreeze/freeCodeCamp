---
id: 60a3e3396c7b40068ad69988
title: Part 31
challengeType: 0
dashedName: part-31
---

# --description--

จงกำหนดให้ `height` ของง `.three` มีค่า `28%`

# --hints--

คุณควรกำหนดให้ `height` property มีค่า `28%`

```js
const hasHeight = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.height === '28%');
assert(hasHeight);
```

Your `.three` element should have a `height` value of `28%`.

```js
const threeHeight = new __helpers.CSSHelp(document).getStyle('.three')?.getPropertyValue('height');
assert(threeHeight === '28%');
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
  overflow: hidden;
}

.frame {
  border: 50px solid black;
  width: 500px;
  padding: 50px;
  margin: 20px auto;
}

.one {
  width: 425px;
  height: 150px;
  background-color: #efb762;
  margin: 20px auto 20px;
}

.two {
  width: 475px;
  height: 200px;
  background-color: #8f0401;
  margin: auto;
}

.three {
  width: 91%;
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
    <div class="frame">
      <div class="canvas">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
    </div>
  </body>
</html>
```
