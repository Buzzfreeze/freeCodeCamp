---
id: 60a3e3396c7b40068ad69971
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

ถึงเวลาของ CSS.

แม้ว่า `<div>` จะไม่มีข้อความใด ๆ มันยังถูกนับเป็นกล่องที่เก็บ content ไว้อยู่
จงเขียน CSS rule ที่จะใช้  `.canvas` class selector และกำหนด `width` ของมันให้เท่ากับ 500 pixels
นี่คือ CSS rule อันหนึ่งที่กำหนดให้ความกว้างของ class `card` มีค่าเป็น 300 pixels:

```css
.card {
  width: 300px;
}
```

# --hints--

คุณควรมี 1 `.canvas` selector.

```js
const hasCanvas = new __helpers.CSSHelp(document).getStyle('.canvas');
assert(hasCanvas)
```

You should set the `width` property to `500px`.

```js
const hasWidth = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.width === '500px')
assert(hasWidth);
```

Your `.canvas` element should have a `width` of `500px`.

```js
const width = new __helpers.CSSHelp(document).getStyle('.canvas')?.getPropertyValue('width');
assert(width === '500px');
```

# --seed--

## --seed-contents--

```css
--fcc-editable-region--

--fcc-editable-region--

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
