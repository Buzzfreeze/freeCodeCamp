---
id: 60f1a5e2d2c23707a4f9a660
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

ในตอนนี้ จงเอา scroll-bar ในแนวนอนออกโดนการตั้งค่าให้ default `margin` ของ `body`ที่ถูกเพิ่มโดย browsers มีค่าเท่ากับ `0`

# --hints--

คุณควรเพิ่ม `margin` ภายใน`body` element selector.

```js
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyle('body')?.margin);
```

You should give the `margin` a value of `0`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('body')?.margin, '0px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>freeCodeCamp Registration Form Project</title>
	  <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
  </body>
</html>
```

```css
--fcc-editable-region--
body {
  width: 100%;
  height: 100vh;
}
--fcc-editable-region--
```
