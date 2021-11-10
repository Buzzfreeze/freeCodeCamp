---
id: 5d822fd413a79914d39e98ce
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

นอกจากนี้ จงเพิ่ม `box-sizing` ที่เป็น `border-box` ให้กับทุกอย่าง
นี่จะทำให้ขอบที่คุณเพิ่มไม่ส่งผลกับขนาดของ elements ของคุณ

# --hints--

คุณควรใช้ `box-sizing` property.

```js
assert(new __helpers.CSSHelp(document).isPropertyUsed('box-sizing'));
```

You should make use of the existing `*` selector.

```js
// Two selectors create two CSSStyleRule objects
assert.equal(new __helpers.CSSHelp(document).getStyleDeclarations('*').length, 1);
```

All elements should have a `box-sizing` of `border-box`.

```js
const astStyles = new __helpers.CSSHelp(document).getStyle('*');
assert.equal(astStyles.boxSizing, 'border-box');
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
* {
  border: 1px solid black;
}

--fcc-editable-region--

```

