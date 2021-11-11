---
id: 6143931a113bb80c45546287
title: Part 23
challengeType: 0
dashedName: part-23
---

# --description--

เป็นที่ถกเถียงกันว่า `D.O.B.` นั้นไม่ค่อยทำให้เห็นภาพชัดซักเท่าไหร่
ซึ่งมันก็ค่อนข้างจะจริงโดยเฉพาะกับ users ที่มีปัญหาด้านการมองเห็น
ทางหนึ่งที่จะช่วยแก้ปัญหานี้คือ ใส่ข้อความแค่บนหน้าจอที่ผู้อ่านสามารถอ่านได้โดยไม่เพิ่ม visible text ใน label

จงเพิ่ม `span` element ที่มีคลาส `sr-only` เข้าไปที่ text content ของ `label` element ที่สาม.

# --hints--

คุณควรเพิ่ม `span` element ข้างใน `label` element อันที่สาม.

```js
assert.exists(document.querySelector('.info:nth-of-type(3) > label > span'));
```

คุณควรกำหนดให้ `span` element มีคลาสชื่อ `sr-only`.

```js
assert.equal(document.querySelector('.info:nth-of-type(3) > label > span')?.className, 'sr-only');
```

คุณควรวาง `span` ไว้หลังข้อความที่เขียนว่า `D.O.B.`.

```js
assert.match(document.querySelector('.info:nth-of-type(3) > label')?.innerHTML, /D\.O\.B\.<span/);
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
--fcc-editable-region--
          <div class="info">
            <label for="birth-date">D.O.B.</label>
            <input type="date" name="birth-date" id="birth-date" />
          </div>
--fcc-editable-region--
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

h1,
h2 {
	font-family: Verdana, Tahoma;
}

h2 {
	border-bottom: 4px solid #dfdfe2;
}

```
