---
id: 60f1a9cbd23023082e149fee
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

ตอนนี้มันดูดีกว่าเดิมแล้ว
ในตอนนี้ จงทำให้พื้นหลังดูง่ายขึ้น โดยการเปลี่ยน `body` `background-color` ให้มีค่า `#1b1b32`
หลังจากนั้น จงเปลี่ยน `color` ให้เป็น `#f5f6f7`เพื่อที่ข้อความจะได้ดูชัดเจนขึ้น

# --hints--

คุณควรเพิ่ม `background-color` ภายใน `body` element selector.

```js
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyle('body')?.backgroundColor);
```

You should give the `background-color` a value of `#1b1b32`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('body')?.backgroundColor, 'rgb(27, 27, 50)');
```

You should add the `color` within the `body` element selector.

```js
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyle('body')?.color);
```

You should give the `color` a value of `#f5f6f7`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('body')?.color, 'rgb(245, 246, 247)');
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
  margin: 0;
}
--fcc-editable-region--
```
