---
id: 60a3e3396c7b40068ad69985
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

จงใช้ margins เพื่อจัดพื้นที่ว่างระหว่าง `one` และ `two` ให้เป็นระเบียบ

จงเปลี่ยน `margin` ของ `.one` ให้มีค่า `20px auto 20px` เพื่อที่ top margin มีค่า 20 pixel, มันจะได้อยู่ตรงกลางในแนวนอน และ bottom margin มีค่า 20 pixel

# --hints--

คุณควรกำหนดให้ `margin` property มีค่า `20px auto 20px`

```js
const hasMarginRegex = /20px\s*auto\s*20px/;
// TODO: Why is this stripped? Because margins are the same?
assert(hasMarginRegex.test(code));
```

Your `.one` element should have a `margin` value of `20px auto 20px`.

```js
const oneMarginRegex = /\.one\s*{[^}]*margin:\s*20px\s*auto\s*20px;?\s*}/
assert(oneMarginRegex.test(code));
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
--fcc-editable-region--
  margin: 20px auto;
--fcc-editable-region--
}

.two {
  width: 475px;
  height: 200px;
  background-color: #8f0401;
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
      </div>
    </div>
  </body>
</html>
```
