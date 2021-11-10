---
id: 5d822fd413a79914d39e98cf
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

คุณสามารถมองเห็น `body` (มันคือกล่องที่อยู่ด้านในสุดของเพจของคุณ)
กล่องที่อยู่รอบ ๆ มันคือ `html` element
จงทำให้ `body` มีขนาดใหญ่เท่ากับ viewport โดยการกำหนดให้มันมี `height` เท่ากับ `100vh`
จงลบ `margin` ตั้งต้นออกจาก `body` โดยการกำหนดให้ `margin` มีค่าเป็น `0`
สุดท้ายนี้ จงกำหนด `overflow` property มีค่าเป็น `hidden` เพื่อซ่อน scroll bar ต่าง ๆ ที่จะปรากฏขึ้นมาเมื่อมีอะไรเลยออกจาก viewport

# --hints--

คุณควรใช้ `body` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('body'));
```

Your `body` should have a `height` of `100vh`.

```js
const bodyStyles = new __helpers.CSSHelp(document).getStyle('body');
assert.equal(bodyStyles?.height, '100vh');
```

Your `body` should have a `margin` of `0`.

```js
// TODO: Editor adds margin as preferential style - 8px is always added.
assert.equal(new __helpers.CSSHelp(document).getStyle('body')?.margin, '0px');
```

Your `body` should have the `overflow` property set to `hidden`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('body')?.overflow, 'hidden');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
  </body>
</html>
```

```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

--fcc-editable-region--


--fcc-editable-region--
    
```

