---
id: 60f5c3e399ff1a05629964e4
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

อย่างที่บอกไปแล้ว คุณกำลังจะสร้างแบบฟอร์มขึ้นมาอันหนึ่ง
ดังนั้น, ต่อจาก `p` element, จงแทรก `form` ที่มี`action` attribute ชี้ไปที่ `https://fcc-registration-form.com`.

# --hints--

คุณควรเพิ่ม `form` element ข้างๆ `p` element.

```js
assert.exists(document.querySelector('p + form'));
```

You should give the `form` an `action` attribute.

```js
// Default action points to window location
assert.notEqual(document.querySelector('form')?.action, window?.location?.href);
```

You should give the `action` a value of `https://fcc-registration-form.com`.

```js
// TODO: Do we need to use an in-house (domain) URL - just-in-case
assert.equal(document.querySelector('form')?.action, 'https://fcc-registration-form.com/');
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
    <p>Please fill out this form with the required information</p>

  </body>
--fcc-editable-region--
</html>
```

```css
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #1b1b32;
	color: #f5f6f7;
}
```
