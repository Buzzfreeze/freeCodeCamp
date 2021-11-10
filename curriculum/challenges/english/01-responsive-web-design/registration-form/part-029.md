---
id: 60fac4095512d3066053d73c
title: Part 29
challengeType: 0
dashedName: part-29
---

# --description--

การเพิ่ม dropdown ให้การแบบฟอร์มนั้นสามารถทำได้ง่าย ๆ ด้วยการใช้ `select` element
`select` element คือ container สำหรับ `option` elements ชุดหนึ่ง และ `option` element จะทำหน้าที่เสมอห้ายกำกับของแต่ละตัวเลือกใน dropdown
 element ทั้งสองอันต้องการแท็กปิด (closing tags)

จงเริ่มโดยการเพิ่ม  `select` element อันหนึ่งข้างล่าง `input` element 2 ัอัน
หลังจากนั้น จงเก็บ 5 `option` elements ไว้ใน `select` element.

# --hints--

คุณควรเพิ่ม `select` element ให้กับ `fieldset` อันที่สาม

```js
assert.exists(document.querySelector('fieldset:nth-child(3) > select'));
```

You should nest 5 `option` elements inside the `select` element.

```js
assert.equal(document.querySelectorAll('fieldset:nth-child(3) > select > option')?.length, 5);
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
      <fieldset>
        <label><input type="radio" name="account-type" /> Personal Account</label>
        <label><input type="radio" name="account-type" /> Business Account</label>
        <label>
          <input type="checkbox" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
			  </label>
      </fieldset>
--fcc-editable-region--
      <fieldset>
        <label>Upload a profile picture: <input type="file" /></label>
        <label>Input your age (years): <input type="number" min="13" max="120" />
			  </label>

      </fieldset>
--fcc-editable-region--
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
