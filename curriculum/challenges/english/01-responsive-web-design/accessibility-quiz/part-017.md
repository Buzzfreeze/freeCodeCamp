---
id: 614206033d366c090ca7dd42
title: Part 17
challengeType: 0
dashedName: part-17
---

# --description--

Typeface มีบทบาทสำคัญในการเข้าถึง page
ฟ้อนต์บางชนิดอ่านง่าายกว่าชนิดอื่น ๆ โดยเฉพาะหน้าจอที่มี resolution ต่ำมาก ๆ 

จงเปลี่ยนฟ้อนต์ของ `h1` and `h2` elements ให้เป็น `Verdana` และใช้ sans-serif _web safe_ font ตัวอื่นเป็น fallback
และจงเพิ่ม `border-bottom` ที่มีคุณสมบัติ `4px solid #dfdfe2` ใน `h2` elements เพื่อให้ section นี้ดูเด่นยิ่งขึ้น
# --hints--

คุณควรใช้ element selector หลาย ๆ ตัวเพื่อระบุ `h1` และ `h2` elements.

```js
const gs = (s) => new __helpers.CSSHelp(document).getStyle(s);
assert.exists(gs('h1, h2') || gs('h2, h1'));
```

You should set the first value of the `font-family` property to `Verdana`.

```js
const gs = (s) => new __helpers.CSSHelp(document).getStyle(s);
const style = gs('h1, h2') || gs('h2, h1');
assert.include(style?.fontFamily, 'Verdana');
```

You should set the second value of the `font-family` property to another sans-serif, web safe font. _Hint: I would choose Tahoma_.

```js
// Acceptable fonts: Arial, sans-serif, Helvetica, Tahoma, Trebuchet MS.
const gs = (s) => new __helpers.CSSHelp(document).getStyle(s);
const style = gs('h1, h2') || gs('h2, h1');
assert.match(style?.fontFamily, /(Tahoma)|(Arial)|(sans-serif)|(Helvetica)|(Trebuchet MS)/);
```

You should use an `h2` element selector to target the `h2` elements.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('h2'));
```

You should give `h2` a `border-bottom` property of `4px solid #dfdfe2`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('h2')?.borderBottom, '4px solid rgb(223, 223, 226)');
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
      <form method="post" action="https://freecodecamp.org/practice-project/accessibility-quiz">
        <section role="region" aria-labelledby="student-info">
          <h2 id="student-info">Student Info</h2>
        </section>
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

--fcc-editable-region--

--fcc-editable-region--

```
