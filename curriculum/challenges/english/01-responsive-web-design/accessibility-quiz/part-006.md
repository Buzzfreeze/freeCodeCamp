---
id: 6133d11ef548f51f876149e3
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

Navigation เป็นหัวในสำคัฯของการเช้าถึง (accessibility) และ screen readers ก็ต้องการให้คุณกำหนดโครงสร้างใน  page ของคุณ
โดยสิ่งนี้จะทำงานร่วมกับ semantic HTML elements.

จงเพิ่ม `header` และ `main` element ลงใน page ของคุณ.

`header` element จะถูกใช้เพื่อแนะนำ page รวมถึงเป็นที่อยู่อยู่ของ navigation menu.

`main` element จะประกอบไปด้วยเนื้อหาหลักของ page ของคุณ

# --hints--

คุณควรเพิ่ม `header` element อันหนึ่งลงใน `body`.

```js
assert.exists(document.querySelector('body > header'));
```

คุณควรเพิ่ม `main` element อันหนึ่งให้กับ `body`

```js
assert.exists(document.querySelector('body > main'));
```

`header` element ควรจะมาก่อน `main` element.

```js
assert.exists(document.querySelector('header + main'));
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
--fcc-editable-region--
  <body>
    
  </body>
--fcc-editable-region--
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
