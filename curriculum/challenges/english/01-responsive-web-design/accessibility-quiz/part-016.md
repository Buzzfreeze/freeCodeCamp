---
id: 614202874ca576084fca625f
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

ทุก ๆ `region` role ต้องการ label ที่ชัดเจนและควรถูกอ้างอิงโดย `aria-labelledby` attribute.

กำหนด `aria-labelledby` attributes ตามที่เขียนไว้ด้านล่างให้กับ `section` elements:

- `student-info`
- `html-questions`
- `css-questions`

หลังกจากนั้น ใส่ `h2` element กับ an `id` ที่ตรงกับ `aria-labelledby` attribute เข้าไปในแต่ละ `section` element
จงเพิ่มข้อความที่เหมาะสมให้แต่ละ `h2`

# --hints--

คุณควรใส่ `aria-labelledby` attribute ของ `student-info` ลงไปใน `section` element อันแรก

```js
assert.equal(document.querySelectorAll('section')?.[0]?.getAttribute('aria-labelledby'), 'student-info');
```

คุณควรกำหนดให้ `section` element อันที่สองมี `aria-labelledby` attribute เป็น `html-questions`

```js
assert.equal(document.querySelectorAll('section')?.[1]?.getAttribute('aria-labelledby'), 'html-questions');
```

คุณควรกำหนดให้ `section` element อันที่สาม `aria-labelledby` attribute เป็น `css-questions`.

```js
assert.equal(document.querySelectorAll('section')?.[2]?.getAttribute('aria-labelledby'), 'css-questions');
```

คุณควรเก็บ `h2` element ไว้ใน `section` element อันแรก

```js
assert.equal(document.querySelectorAll('section')?.[0]?.querySelectorAll('h2')?.length, 1);
```

คุณควรก็บ `h2` element ไว้ใน `section` element อันที่สอง

```js
assert.equal(document.querySelectorAll('section')?.[1]?.querySelectorAll('h2')?.length, 1);
```

คุณควรเก็บ `h2` element ไว้ใน `section` element อันที่สาม

```js
assert.equal(document.querySelectorAll('section')?.[2]?.querySelectorAll('h2')?.length, 1);
```

คุณควรกำหนดให้ `h2` element อันแรกมี `id` attribute เป็น `student-info`.

```js
assert.equal(document.querySelectorAll('h2')?.[0]?.id, 'student-info');
```

คุณควรกำหนดให้ `h2` element อันที่สองมี `id` attribute เป็น `html-questions`.

```js
assert.equal(document.querySelectorAll('h2')?.[1]?.id, 'html-questions');
```

คุณควรกำหนดให้ `h2` element อันที่สาม `id` attribute เป็น `css-questions`.

```js
assert.equal(document.querySelectorAll('h2')?.[2]?.id, 'css-questions');
```

คุณควรกำหนดให้ `h2` element อันแรกมีข้อความที่เหมาะสม  _Hint: ฉันจะใช้ `Student Info`_

```js
assert.isAtLeast(document.querySelectorAll('h2')?.[0]?.textContent?.length, 1);
```

คุณควรกำหนดให้ `h2` element อันที่สองมีข้อความที่เหมาะสม _Hint: ฉันจะใช้ `HTML`_

```js
assert.isAtLeast(document.querySelectorAll('h2')?.[1]?.textContent?.length, 1);
```

คุณควรกำหนดให้ `h2` element อันที่สามมีข้อความที่เหมาะสม _Hint: ฉันจะใช้ `CSS`_

```js
assert.isAtLeast(document.querySelectorAll('h2')?.[2]?.textContent?.length, 1);
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
      <nav>
        <ul>
          <li><a>INFO</a></li>
          <li><a>HTML</a></li>
          <li><a>CSS</a></li>
			  </ul>
      </nav>
    </header>
    <main>
--fcc-editable-region--
      <form method="post" action="https://freecodecamp.org/practice-project/accessibility-quiz">
        <section role="region"></section>
        <section role="region"></section>
        <section role="region"></section>
      </form>
--fcc-editable-region--
    </main>
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

nav {
	width: 50%;
	max-width: 300px;
	height: 50px;
}

nav > ul {
	display: flex;
	justify-content: space-evenly;
}
```
