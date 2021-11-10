---
id: 60f852f645b5310a8264f555
title: Part 21
challengeType: 0
dashedName: part-21
---

# --description--

ต่อมาต่อกันนี้ส่วนที่สองของแบบฟอร์มรับสมัคร
section นี้จะถามประเภทของบัญชีที่ผู้ใช้อยากสมัคร และต้องการให้ผู้ใช้ยืนยันว่าได้อ่าน "terms and conditions" แล้ว

จงเริ่มโดยการเพิ่ม 3 `label` elements ที่ `fieldset` อันที่สอง

# --hints--

คุณควรเพิ่ม 3 `label` elements ที่ `fieldset` อันที่สอง

```js
assert.equal(document.querySelectorAll('fieldset')?.[1]?.querySelectorAll('label')?.length, 3);
```

The `label` elements should be siblings.

```js
assert.exists(document.querySelector('fieldset:nth-child(2)')?.querySelector('label + label + label'));
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
