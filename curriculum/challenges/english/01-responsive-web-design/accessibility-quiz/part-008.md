---
id: 613e275749ebd008e74bb62e
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

คุณสมบัติสำคัญของ _SVG_ (scalable vector graphics) คือการที่มันเก็บ `path` attribute ไว้ซึ่งจะทำให้เราสามารถเพิ่ม-ลดขนาดของรูปภาพได้โดยไม่ต้องกังวลเรื่องของ resolution ของภาพ.

ตอนนี้ `img` นั้นใช้ขนาด default ของมันเป็นแต่พบว่าขนาดใหญ่เกินไป
จงปรับขนาดของรูปให้เหมาะสมโดยใช้ `id` เป็น selector, และตั้งค่าให้ `width` เป็น `max(100px, 18vw)`

# --hints--

คุณควรใช้ `#logo` selector เพื่อ target `img` element.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('#logo'));
```

You should give the `img` a `width` of `max(100px, 18vw)`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('#logo')?.width, 'max(100px, 18vw)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <title>freeCodeCamp: Accessibility Quiz</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <img id="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
      <h1>HTML/CSS Quiz</h1>
      <nav></nav>
    </header>
    <main></main>
  </body>
</html>

```

```css
body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}

--fcc-editable-region--

--fcc-editable-region--

```
