---
id: 60a3e3396c7b40068ad6998b
title: Part 34
challengeType: 0
dashedName: part-34
---

# --description--

มันมีประโยชน์ที่จะมี margin ช่วยดันไปทางใดทางหนึ่ง

ในกรณีนี้ bottom margin ของ `.one` element จะดัน `.two` ลงไป 20 pixels

ที่ `.two`, จงเพิ่ม `margin: 0 auto 20px;` เพื่อกำหนดให้ top margin ของมันเป็น 0, จัดให้มันอยู่ตรงกลางแนวนอน และกำหนดให้ bottom margin ของมันเป็น 20 pixel

# --hints--

คุณควรกำหนดให้ `margin` property มีค่า `0 auto 20px`

```js
const hasMargin = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.margin === '0px auto 20px');
assert(hasMargin);
```

Your `.two` element should have a `margin` value of `0 auto 20px`.

```js
const twoMargin = new __helpers.CSSHelp(document).getStyle('.two')?.getPropertyValue('margin');
assert(twoMargin === '0px auto 20px');
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
--fcc-editable-region--
  margin: auto;
--fcc-editable-region--
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
