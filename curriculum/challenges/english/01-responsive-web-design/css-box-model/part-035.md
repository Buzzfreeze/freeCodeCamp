---
id: 60a3e3396c7b40068ad6998c
title: Part 35
challengeType: 0
dashedName: part-35
---

# --description--

สีและรูปทรงขอบภาพของคุณนั้นแข็งเกินกว่าที่จะเป็น Rothko

จงใช้ `filter` property ที่มีค่า `blur(2px)` ใน `.canvas`

# --hints--

คุณควรกำหนดให้ `filter` property มีค่าเป็น `blur(2px)`

```js
const hasFilter = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.filter === 'blur(2px)');
assert(hasFilter);
```

Your `.canvas` element should have a `filter` value of `blur(2px)`.

```js
const canvasFilter = new __helpers.CSSHelp(document).getStyle('.canvas')?.getPropertyValue('filter');
assert(canvasFilter === 'blur(2px)');
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
  overflow: hidden;
--fcc-editable-region--

--fcc-editable-region--
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
  margin: 0 auto 20px;
}

.three {
  width: 91%;
  height: 28%;
  background-color: #b20403;
  margin: auto;
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
