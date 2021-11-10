---
id: 60f8604682407e0d017bbf7f
title: Part 23
challengeType: 0
dashedName: part-23
---

# --description--

สำหรับ "terms and conditions", จงเพิ่ม `input` ที่มีค่า `type` เป็น `checkbox` ไปที่`label` element อันที่สาม
นอกจากนี้ เพื่อที่ผู้ใช้จะไม่สมัครโดยไม่ได้อ่าน "terms and conditions" อย่างถี่ถ้วน เราจะทำให้มัน `required`

# --hints--

คุณควรเพิ่ม`input` อันหนึ่งใน `label` element อันที่สาม

```js
assert.exists(document.querySelector('fieldset:nth-child(2) label:nth-child(3) input'));
```

You should add a `type` attribute of value `checkbox` to the `input` element.

```js
assert.equal(document.querySelector('fieldset:nth-child(2) label:nth-child(3) input')?.type, 'checkbox');
```

You should add a `required` attribute to the `input` element.

```js
assert.equal(document.querySelector('fieldset:nth-child(2) label:nth-child(3) input')?.required, true);
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
      <fieldset>
        <label>Enter Your First Name: <input type="text" required /></label>
        <label>Enter Your Last Name: <input type="text" required /></label>
        <label>Enter Your Email: <input type="email" required /></label>
        <label>Create a New Password: <input type="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
--fcc-editable-region--
      <fieldset>
        <label><input type="radio" /></label>
        <label><input type="radio" /></label>
        <label></label>
      </fieldset>
--fcc-editable-region--
      <fieldset></fieldset>
      <input type="submit" value="Submit" />
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
