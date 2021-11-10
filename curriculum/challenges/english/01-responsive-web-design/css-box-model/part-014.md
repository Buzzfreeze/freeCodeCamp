---
id: 60a3e3396c7b40068ad69977
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

จงใช้ padding เพื่อปรับพื้นที่ว่างภายใน element

ใน `.frame`, จงใช้คำสั่ง`padding: 50px;` เพื่อเพิ่มพื้นที่ระหว่างด้านบน ด้านล่าง ด้านซ้ายและด้านขวาของขอบของกรอบรูปและผ้าใบข้างใน

# --hints--

คุณควรกำหนดให้ `padding` property มีค่าเป็น `50px`

```js
const hasPadding = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.padding === '50px');
assert(hasPadding);
```

Your `.frame` element should have a `padding` value of `50px`.

```js
const framePadding = new __helpers.CSSHelp(document).getStyle('.frame')?.getPropertyValue('padding');
assert(framePadding === '50px');
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
}

.frame {
  border: 50px solid black;
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
    <div class="frame">
      <div class="canvas">
      </div>
    </div>
  </body>
</html>
```
