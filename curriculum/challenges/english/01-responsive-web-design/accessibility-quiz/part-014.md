---
id: 6141fabd6f75610664e908fd
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

กำหนดให้มีการสอบ คุณต้องมีฟอร์มเพื่อให้ user สามารถส่งคำตอบได้
คุณสามารถแบ่งเนื้อหาของฟอร์มตามความหมายของมันโดยใช้ `section` elements.

จงสร้างฟอร์มที่ประกอบด้วย 3  `section` elements ภายใต้ `main` element 
หลังจากนั้น จงส่งฟอร์มเข้าไปที่ `https://freecodecamp.org/practice-project/accessibility-quiz` โดยทำตามขั้นตอนที่ถูกต้อง.

# --hints--

คุณควรใส่ `form` element ภายใต้ `main` element.

```js
assert.exists(document.querySelector('main > form'));
```

คุณควรเก็บ `section` element 3 อันไว้ใน `form` element.

```js
assert.equal(document.querySelectorAll('main > form > section')?.length, 3);
```

คุณควรกำหนดให้ `form` element มี `action` attribute อันหนึ่ง

```js
assert.notEmpty(document.querySelector('main > form')?.action);
```

คุณควรกำหนดให้ `action` attribute มีค่าเป็น `https://freecodecamp.org/practice-project/accessibility-quiz`.

```js
assert.equal(document.querySelector('main > form')?.action, 'https://freecodecamp.org/practice-project/accessibility-quiz');
```

คุณควรกำหนดให้ `form` element มี `method` attribute อันหนึ่ง

```js
assert.notEmpty(document.querySelector('main > form')?.method);
```

คุณควรกำหนดให้ `form` element มี `method` attribute ที่มีค่าเป็น `post`.

```js
assert.equal(document.querySelector('main > form')?.method?.toLowerCase(), 'post');
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
--fcc-editable-region--
    <main>

    </main>
--fcc-editable-region--
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
