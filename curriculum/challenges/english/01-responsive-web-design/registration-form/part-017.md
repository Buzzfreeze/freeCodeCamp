---
id: 60f81167d0d4910809f88945
title: Part 17
challengeType: 0
dashedName: part-17
---

# --description--

`input` element อันแรกที่มี `type` ที่มีค่าเป็น `submit` จะถูกตั้งให้  parent `form` element ที่ใกล้ที่สุดโดยอัตโนมัติ

เพิ่มจัดการกับการส่งแบบฟอร์ม ต่อจาก `fieldset` element อันสุดท้ายให้เพิ่ม `input` element 1 อันที่มี `type` attribute ที่ถูกกำหนดค่าเท่ากับ `submit` และมี`value` attribute ที่ถูกกำหนดค่าเป็น `Submit`

# --hints--

คุณควรเพิ่ม `input` element ต่อจาก `fieldset` element อันสุดท้าย

```js
assert.exists(document.querySelectorAll('fieldset')?.[2]?.nextElementSibling?.tagName, 'input');
```

You should give the `input` element a `type` attribute of `submit`.

```js
assert.exists(document.querySelector('fieldset + input[type="submit"]'));
```

You should give the `input` element a `value` attribute of `Submit`.

```js
assert.exists(document.querySelector('fieldset + input[value="Submit"]'));
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
    <form action='https://fcc-registration-form.com'>
--fcc-editable-region--
      <fieldset>
        <label>Enter Your First Name: <input type="text" /></label>
        <label>Enter Your Last Name: <input type="text" /></label>
        <label>Enter Your Email: <input type="email" /></label>
        <label>Create a New Password: <input type="password" /></label>
      </fieldset>
      <fieldset></fieldset>
      <fieldset></fieldset>

--fcc-editable-region--
    </form>
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

label {
	display: block;
	margin: 0.5rem 0;
}

```
