---
id: 614396f7ae83f20ea6f9f4b3
title: Part 26
challengeType: 0
dashedName: part-26
---

# --description--

จงเพิ่ม `div` elements 2 อันที่มี `question-block` class ภายใต้ `section` element อันที่สอง
หลังจากนั้น จงเพิ่ม `p` element กับข้อความแสดงการเพิ่มของตัวเลข เริ่มจาก `1` รวมถึงเพิ่ม `fieldset` element 1 อัน ที่มี `question` class ภายในแต่ละ  `div.question-block` element

# --hints--

คุณควรเก็บ `div` elements  2 อันไว้ใน `section` element อันที่ 2.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div')?.length, 2);
```

คุณควรกำหนดให้  `div` element อันแรกที่สร้างใหม่มีคลาสชื่อ  `question-block`.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div')?.[0]?.className, 'question-block');
```

คุณควรกำหนดให้ `div` element อันที่สองที่สร้างใหม่มีคลาสที่ชื่อ `question-block`.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div')?.[1]?.className, 'question-block');
```

คุณควรเก็บ  `p` element ไว้ในแต่ละ `div.question-block` element.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div.question-block > p')?.length, 2);
```

คุณควรกำหนดให้ `p` element อันแรกมีข้อความที่เขียนว่า `1`.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div.question-block > p')?.[0]?.textContent, '1');
```

คุณควรกำหนดให้ `p` element อันที่สองมีข้อความที่เขียนว่า `2`

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div.question-block > p')?.[1]?.textContent, '2');
```

คุณควรใส่ `fieldset` element ไว้ในแต่ละ `div.question-block` element.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div.question-block > fieldset')?.length, 2);
```

คุณควรวาง `fieldset` element อันแรกไว้หลังจาก `p` element อันแรก

```js
assert.exists(document.querySelector('section:nth-of-type(2) > div.question-block > p + fieldset'));
```

คุณควรวาง `fieldset` element อันที่สองไว้หลังจาก `p` element อันที่สอง

```js
assert.exists(document.querySelector('section:nth-of-type(2) > div.question-block:nth-of-type(2) > p + fieldset'));
```

อคุณควรกำหนดให้ `fieldset` element อันแรกมีคลาสชื่อ `question`.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div.question-block > fieldset')?.[0]?.className, 'question');
```

คุณควรกำหนดให้ `fieldset` element อันที่สองมีคลาสชื่อ `question`.

```js
assert.equal(document.querySelectorAll('section:nth-of-type(2) > div.question-block > fieldset')?.[1]?.className, 'question');
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
          <li><a href="#student-info">INFO</a></li>
          <li><a href="#html-questions">HTML</a></li>
          <li><a href="#css-questions">CSS</a></li>
			  </ul>
      </nav>
    </header>
    <main>
      <form method="post" action="https://freecodecamp.org/practice-project/accessibility-quiz">
        <section role="region" aria-labelledby="student-info">
          <h2 id="student-info">Student Info</h2>
          <div class="info">
            <label for="student-name">Name:</label>
            <input type="text" name="student-name" id="student-name" />
          </div>
          <div class="info">
            <label for="student-email">Email:</label>
            <input type="email" name="student-email" id="student-email" />
          </div>
          <div class="info">
            <label for="birth-date">D.O.B.<span class="sr-only">(Date of Birth)</span></label>
            <input type="date" name="birth-date" id="birth-date" />
          </div>
        </section>
--fcc-editable-region--
        <section role="region" aria-labelledby="html-questions">
          <h2 id="html-questions">HTML</h2>

        </section>
--fcc-editable-region--
        <section role="region" aria-labelledby="css-questions">
          <h2 id="css-questions">CSS</h2>
        </section>
      </form>
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

h1,
h2 {
  font-family: Verdana, Tahoma;
}

h2 {
  border-bottom: 4px solid #dfdfe2;
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

```
