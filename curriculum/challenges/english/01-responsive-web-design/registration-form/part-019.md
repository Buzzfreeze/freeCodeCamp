---
id: 60f83e7bfc09900959f41e20
title: Part 19
challengeType: 0
dashedName: part-19
---

# --description--

ค่า `type` attribute หนึ่งจะมาพร้อมกับ built-in form validation
ยกตัวอย่างเช่น `type="email"` ต้องได้รับค่าที่ควรจะเป็นอีเมล

จงเพิ่ม custom validation ให้กับ `input` element ของรหัสผ่านโดยการเพิ่ม `minlength` attribute ที่มีค่า `8`
การทำแบบนี้ป้องกันไม่ให้ input ที่มีน้องกว่า 8 ตัวอักษรถูกส่งเข้ามา

# --hints--

คุณควรใส่ `minlength` attribute ให้กับ `input` element ของรหัสผ่าน

```js
assert.notEqual(document.querySelector('input[type="password"]')?.minLength, -1);
```

You should give the `minlength` attribute a value of `8`.

```js
assert.equal(document.querySelector('input[type="password"]')?.minLength, 8);
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
        <label>Enter Your First Name: <input type="text" required /></label>
        <label>Enter Your Last Name: <input type="text" required /></label>
        <label>Enter Your Email: <input type="email" required /></label>
        <label>Create a New Password: <input type="password" required /></label>
      </fieldset>
--fcc-editable-region--
      <fieldset></fieldset>
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
