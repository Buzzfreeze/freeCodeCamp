---
id: 61408f155e798909b6908712
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

เพื่อที่จะให้การนำทาง (navigation) สามารถทำงานบน page ได้จะต้องเพิ่ unordered list อันหนึ่งพร้อมกับ list items 3 อันที่อยู่ข้างล่าง:

- `INFO`
- `HTML`
- `CSS`

ข้อความของ list items text ควรอยู่ใน anchor tags.

# --hints--

คุณควรใส่ `ul` element ใน `nav`

```js
assert.equal(document.querySelectorAll('nav > ul')?.length, 1);
```

คุณควรเก็บ `li` element 3 อันไว้ใน `ul` element.

```js
assert.equal(document.querySelectorAll('nav > ul > li')?.length, 3);
```

คุณควรเก็บ `a` element อันหนึ่งไว้ใน `li` element.

```js
assert.equal(document.querySelectorAll('nav > ul > li > a')?.length, 3);
```

คุณควรกำหนดให้ `a` element อันแรกมีข้อความที่เขียนว่า `INFO`

```js
assert.equal(document.querySelectorAll('nav > ul > li > a')?.[0]?.textContent, 'INFO');
```

คุณควรกำหนดให้ `a` element อันที่สองมีข้อความที่เขียนว่า `HTML`.

```js
assert.equal(document.querySelectorAll('nav > ul > li > a')?.[1]?.textContent, 'HTML');
```

คุณควรกำหนดให้ `a` element อันที่สามมีข้อความที่เขียนว่า `CSS`.

```js
assert.equal(document.querySelectorAll('nav > ul > li > a')?.[2]?.textContent, 'CSS');
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
--fcc-editable-region--
      <nav>

      </nav>
--fcc-editable-region--
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

h1 {
  color: #f1be32;
	font-size: min(5vw, 1.2em);
}
```
