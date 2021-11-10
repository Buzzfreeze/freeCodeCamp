---
id: 6140883f74224508174794c0
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

จงสร้าง `header` ที่ขนาดความกว้างเท่ากับขนาดกว้างของ parent container รวมถึงกำหนดให้ `height` เท่ากับ `50px` และ `background-color` เท่ากับ `#1b1b32`
หลังจากนั้น กำหนดให้ `display` ใช้ _Flexbox_.

# --hints--

คุณควรใช้ `header` element selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('header'));
```

You should give the `header` a `width` of `100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('header')?.width, '100%');
```

You should give the `header` a `height` of `50px`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('header')?.height, '50px');
```

You should give the `header` a `background-color` of `#1b1b32`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('header')?.backgroundColor, 'rgb(27, 27, 50)');
```

You should give the `header` a `display` of `flex`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('header')?.display, 'flex');
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

#logo {
  width: max(100px, 18vw);
	background-color: #0a0a23;
  aspect-ratio: 35 / 4;
	padding: 0.4rem;
}

```
