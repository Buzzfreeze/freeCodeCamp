---
id: 6141fed65b61320743da5894
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

เพื่อที่จะเพิ่มการเข้าถึง (accessibility) ของ page 
`role` attribute ต้องสามารถใช้เพื่อบอกจุดประสงค์ของแต่ละ element ที่อยู่บน page ในแง่ของ assistive technologies ได้
`role` attribute เป็นส่วนหนึ่งของ _Web Accessibility Initiative_ (WAI) และรับค่า preset
Give each of the `section` elements the `region` role.

# --hints--

คุณควรกำหนด `region` role เป็น`section` element อันแรก

```js
assert.equal(document.querySelectorAll('section')?.[0]?.getAttribute('role'), 'region');
```

คุณควรกำหนดให้ `section` element อันที่สองมี `region` role.

```js
assert.equal(document.querySelectorAll('section')?.[1]?.getAttribute('role'), 'region');
```

Yคุณควรกำหนดให้ `section` element อันที่สามมี `region` role.

```js
assert.equal(document.querySelectorAll('section')?.[2]?.getAttribute('role'), 'region');
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
        <section></section>
        <section></section>
        <section></section>
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
