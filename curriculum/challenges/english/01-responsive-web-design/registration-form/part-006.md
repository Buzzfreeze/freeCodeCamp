---
id: 60f030d388cb74067cf291c3
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

ข้างล่าง heading, จงใช้ข้อความต่อไปนี้ภายใน paragraph element เพื่อชักชวนให้ผู้ใช้ทำการลงทะเบียน :

```md
Please fill out this form with the required information
```

# --hints--

คุณควรเพื่อ `p` element 1 อันภายใน `body`.

```js
assert.exists(document.querySelector('body > p'));
```

You should add the `p` element below the `h1`.

```js
assert.exists(document.querySelector('h1 + p'));
```

You should give the `p` element a text of `Please fill out this form with the required information`.

```js
assert.equal(document.querySelector('p')?.innerText, 'Please fill out this form with the required information');
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
    <h1>Registration Form</h1>

  </body>
--fcc-editable-region--
</html>
```
