---
id: 60f02e7361b68405e27b62a5
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

ภายใน `body`, จงเพิ่มเนื้อหาให้กับ heading โดยการใส่ `h1` ที่มีข้อความ `Registration Form`.

# --hints--

คุณควรเพิ่ม `h1` ภายใน `body`

```js
assert.exists(document.querySelector('body > h1'));
```

You should give the `h1` the text `Registration Form`.

```js
assert.equal(document.querySelector('body > h1')?.textContent, 'Registration Form');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>freeCodeCamp Registration Form Project</title>
	  <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
--fcc-editable-region--
</html>
```
