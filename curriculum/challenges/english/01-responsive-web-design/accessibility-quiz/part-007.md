---
id: 613e2546d0594208229ada50
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

ข้างใน `header` จะมี `img`, `h1`, and `nav` element ทีให้ข้อมูลเกี่ยวกับ page.

`img` ควรชี้ไปที่ `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`, และมี `id` ของ `logo` 1 อัน.

`h1` ควรมีข้อความ `HTML/CSS Quiz`.

# --hints--

คุณควรเพิ่ม `img` element เข้าไปใน `header` element.

```js
assert.exists(document.querySelector('header > img'));
```

คุณควรเพิ่ม `h1` element อันหนึ่งให้กับ `header` element.

```js
assert.exists(document.querySelector('header > h1'));
```

Yคุรควรเพิ่ม `nav` element อันหนึ่งให้กับ `header` element.

```js
assert.exists(document.querySelector('header > nav'));
```

คุณควรใส่ `img`, `h1`, และ `nav` elements ตามลำดับนั้น

```js
assert.exists(document.querySelector('img + h1 + nav'));
```

คุณควรกำหนดให้ `img` element มี `src` attribute เป็น `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`.

```js
assert.equal(document.querySelector('img')?.src, 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

คุณควรกำหนดให้ `img` element มี `id` attribute เป็น `logo`

```js
assert.equal(document.querySelector('img')?.id, 'logo');
```

คุณควรกำหนดให้ `h1` element ที่ข้อความที่เขียนว่า `HTML/CSS Quiz`.

```js
assert.include(document.querySelector('h1')?.innerText?.toLowerCase(), 'html/css quiz');
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
--fcc-editable-region--
    <header>

    </header>
--fcc-editable-region--
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
```
