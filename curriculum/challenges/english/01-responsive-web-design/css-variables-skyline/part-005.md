---
id: 5d822fd413a79914d39e98cd
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

ใน CSS, คุณสามารถระบุทุกอย่างได้ด้วย asterisk (*)
จงเพิ่มขอบให้กับทุกอย่างโดยใช้ `*` selector และจงกำหนดให้มันมี `border` เป็น `1px solid black`
สิ่งนี้คือทริคที่ฉันชอบใช้เพื่อ visualize ตำแหน่งและขนาดของ element
คุณจะลบมันทีหลัง

# --hints--

คุณควรใช้ `*` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('*'));
```

You should use the `border` property to style all the elements.

```js
assert(new __helpers.CSSHelp(document).isPropertyUsed('border'));
```

All elements should have a `1px solid black` border.

```js
const astStyles = new __helpers.CSSHelp(document).getStyle('*');
assert.equal(astStyles?.border, '1px solid black');
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
--fcc-editable-region--

--fcc-editable-region--

```
