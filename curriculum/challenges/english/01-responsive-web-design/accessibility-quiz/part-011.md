---
id: 61408e4ae3e35d08feb260eb
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

จงเปลี่ยนสีของฟ้อนต์ `h1` ให้เป็น `#f1be32`และกำหนดขนาดของฟ้อนต์ให้เป็น `min(5vw, 1.2em)`.

# --hints--

คุณควรใช้ `h1` element selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('h1'));
```

คุณควรกำหนดให้ `h1` มี `color` เท่ากับ `#f1be32`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('h1')?.color, 'rgb(241, 190, 50)');
```

คุณควรกำหนดให้ `h1` มี `font-size` เท่ากับ `min(5vw, 1.2em)`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('h1')?.fontSize, 'min(5vw, 1.2em)');
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

header {
  width: 100%;
	height: 50px;
	background-color: #1b1b32;
	display: flex;
}

#logo {
  width: max(100px, 18vw);
	background-color: #0a0a23;
  aspect-ratio: 35 / 4;
	padding: 0.4rem;
}

--fcc-editable-region--

--fcc-editable-region--
```
