---
id: 6143639d5eddc7094161648c
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

การเชื่อมแต่ละ `input` กับ `label` element ที่สัมพันะ์กันเป็นสิ่งจำเป็น
มันทำให้ assistive technology users มองเห็น reference ของ the input

ซึ่งขั้นตอนนี้สามารถทำได้โดยการเพิ่ม `for` attribute ใน `label` โดย attribute จะเก็บ `id` ของ `input`เอาไว้

section นี้จะรับชื่อ, email address และวันเกิดของนักเรียน
จงใส่ `for` attributes ที่เหมาะสมลงไปใน `label` elements เช่นเดียวกันกับเนื้อหาที่เป็นตัวอักษร
หลังจากนั้น จงเชื่อม `input` elements เข้ากับ `label` elements ที่สัมพันธ์กัน

# --hints--

คุณควรกำหนดให้ `label` element อันแรกมี `for` attribute ที่เหมาะสม

```js
assert.isAtLeast(document.querySelectorAll('label')?.[0]?.htmlFor?.length, 1);
```

Yคุณควรกำหนดให้ `label` element อันที่สองมี `for` attribute ที่เหมาะสม

```js
assert.isAtLeast(document.querySelectorAll('label')?.[1]?.htmlFor?.length, 1);
```

คุณควรกำหนดให้ `label` element อันที่สามมี `for` attribute ที่เหมาะสม

```js
assert.isAtLeast(document.querySelectorAll('label')?.[2]?.htmlFor?.length, 1);
```

คุณควรกำหนดให้ `label` element อันแรกมีข้อความที่เหมาะสม

```js
assert.isAtLeast(document.querySelectorAll('label')?.[0]?.textContent?.length, 1);
```

Yคุณควรกำหนดให้ `label` element อันที่สองมีข้อความที่เหมาะสม

```js
assert.isAtLeast(document.querySelectorAll('label')?.[1]?.textContent?.length, 1);
```

คุณควรกำหนดให้ `label` element อันที่สามมีข้อความที่เหมาะสม

```js
assert.isAtLeast(document.querySelectorAll('label')?.[2]?.textContent?.length, 1);
```

คุณควรกำหนดให้ `input` element อันแรกมี `id` attribute ที่ตรงกับ `for` attribute ของ `label` อันแรก

```js
assert.equal(document.querySelectorAll('input')?.[0]?.id, document.querySelectorAll('label')?.[0]?.htmlFor);
```

คุณควรกำหนดให้ `input` element อันที่สองมี `id` attribute ที่ตรงกับ `for` attribute ของ `label` อันที่สอง

```js
assert.equal(document.querySelectorAll('input')?.[1]?.id, document.querySelectorAll('label')?.[1]?.htmlFor);
```

คุณควรกำหนดให้ `input` element อันที่สามมี `id` attribute ที่ตรงกับ `for` attribute ของ `label` อันที่สาม

```js
assert.equal(document.querySelectorAll('input')?.[2]?.id, document.querySelectorAll('label')?.[2]?.htmlFor);
```

คุณไม่ควรใช้ `id` attribute อันเดียวกันกับ  `input` element มากกว่า 1 อัน

```js
const id = (n) => document.querySelectorAll('input')?.[n]?.id;
assert.notEqual(id(0), id(1));
assert.notEqual(id(0), id(2));
assert.notEqual(id(1), id(2));
```

คุณไม่ควรใช้`for` attribute อันเดียวกันกับ `label` element มากกว่า 1 อัน

```js
const htmlFor = (n) => document.querySelectorAll('label')?.[n]?.htmlFor;
assert.notEqual(htmlFor(0), htmlFor(1));
assert.notEqual(htmlFor(0), htmlFor(2));
assert.notEqual(htmlFor(1), htmlFor(2));
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
--fcc-editable-region--
        <section role="region" aria-labelledby="student-info">
          <h2 id="student-info">Student Info</h2>
          <div class="info">
            <label></label>
            <input />
          </div>
          <div class="info">
            <label></label>
            <input />
          </div>
          <div class="info">
            <label></label>
            <input />
          </div>
        </section>
--fcc-editable-region--
        <section role="region" aria-labelledby="html-questions">
          <h2 id="html-questions">HTML</h2>
        </section>
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

```
