---
id: 6143610161323a081b249c19
title: Part 19
challengeType: 0
dashedName: part-19
---

# --description--

จงเติมเนื้อหาของ quiz ด้านล่าง `#student-info` และเพิ่ม `div` elements ที่มี `class` ของ `info` เข้าไป 3 อัน

หลังจากนั้นจงใส่ `label` element และ `input` element อย่างละอันลงไปใน `div`

# --hints--

คุณควรใส่ `div` elements ทั้ง 3 อันลงที่ด้านล่างของ `h2#student-info` element.

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.length, 3);
```

คุณควรกำหนดให้ `div` อันแรกมี `class` ชื่อ `info`.

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[0]?.className, 'info');
```

คุณควรกำหนดให้ `div` อันที่สองมี `class` ชื่อ `info`.

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[1]?.className, 'info');
```

คุณควรกำหนดให้ `div` อันที่สามมี `class` ชื่อ `info`.

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[2]?.className, 'info');
```

คุณควรเก้บ `label` element อันหนึ่งไว้ใน `div` อันแรก

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[0]?.querySelectorAll('label')?.length, 1);
```

คุณควรเก็บ `input` element อันหนึ่งไว้ใน `div` อันแรกต่อจาก `label`

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[0]?.querySelectorAll('input')?.length, 1);
assert.exists(document.querySelectorAll('h2#student-info ~ div')?.[0]?.querySelector('label + input'));
```

คุณควรเก็บ `label` element อันหนึ่งไว้ใน `div` อันที่สอง

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[1]?.querySelectorAll('label')?.length, 1);
```

คุณควรเก็บ `input` element อันหนึ่งไว้ใน `div`อันที่สองต่อจาก `label`

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[1]?.querySelectorAll('input')?.length, 1);
assert.exists(document.querySelectorAll('h2#student-info ~ div')?.[1]?.querySelector('label + input'));
```

คุณควรเก็บ `label` element อันหนึ่งไว้ใน `div` อันที่สาม

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[2]?.querySelectorAll('label')?.length, 1);
```

คุณควรเก็บ `input` element อันหนึ่งไว้ใน `div` อันที่สามต่อจาก `label`.

```js
assert.equal(document.querySelectorAll('h2#student-info ~ div')?.[2]?.querySelectorAll('input')?.length, 1);
assert.exists(document.querySelectorAll('h2#student-info ~ div')?.[2]?.querySelector('label + input'));
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
