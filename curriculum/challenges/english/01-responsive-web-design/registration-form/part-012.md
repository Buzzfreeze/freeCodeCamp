---
id: 60f5d2776c854e069560fbe6
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

`fieldset`อันแรกจะมีช่องสำหรับใส่ชื่อ, อีเมล และรหัสผ่าน
จงเริ่มด้วยการใส่ `label` element 4 อันใน `fieldset`.

# --hints--

คุณควรเพิ่ม `label` elements 4 อัน

```js
assert.equal(document.querySelectorAll('label')?.length, 4);
```

You should add the `label` elements to the first `fieldset`.

```js
assert.equal(document.querySelector('fieldset')?.querySelectorAll('label')?.length, 4);
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
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
--fcc-editable-region--
    <form action='https://fcc-registration-form.com'>
      <fieldset>

      </fieldset>
      <fieldset></fieldset>
      <fieldset></fieldset>
    </form>
--fcc-editable-region--
  </body>
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
