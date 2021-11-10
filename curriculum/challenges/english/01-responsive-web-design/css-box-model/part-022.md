---
id: 60a3e3396c7b40068ad6997f
title: Part 22
challengeType: 0
dashedName: part-22
---

# --description--

การเพิ่ม padding 1 pixel ที่ด้านบน, ล่าง, ซ้ายและขวาของผ้าใบเปลี่ยนไปมีขนาด 502 pixel x 602 pixel แทน

จงแทนที่ `padding: 1px;` ด้วย `overflow: hidden;` เพื่อปรับให้ผ้าใบกลับไปมีขนาดเท่าเดิม

# --hints--

คุณควรเอา `padding` property ออกจาก `.one` selector.

```js
const onePadding = new __helpers.CSSHelp(document).getStyle('.one').getPropertyValue('padding');
assert(!onePadding);
```

You should set the `overflow` property to `hidden`.

```js
const hasOverflow = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.overflow === 'hidden');
assert(hasOverflow);
```

Your `.canvas` element should have an `overflow` value of `hidden`.

```js
const canvasOverflow = new __helpers.CSSHelp(document).getStyle('.canvas')?.getPropertyValue('overflow');
assert(canvasOverflow === 'hidden')
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
--fcc-editable-region--
  padding: 1px;
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
  margin: 20px auto;
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
      </div>
    </div>
  </body>
</html>
```
