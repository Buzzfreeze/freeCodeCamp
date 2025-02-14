---
id: 60facf914c7b9b08d7510c2c
title: Part 34
challengeType: 0
dashedName: part-34
---

# --description--

ดูเหมือนว่า `textarea`  จะดูเล็กเกินไป
คุณสามารถเพิ่ม `rows` และ `cols` attributes เพื่อกำหนดขนาดเริ่มต้นให้กับมันได้

จงเพิ่มขนาดเริ่มต้นให้เป็น `3` rows และ `30` columns.

# --hints--

คุณควรเพิ่ม `rows` attribute ที่มีค่าเท่ากับ `3`ที่ `textarea`

```js
assert.equal(document.querySelector('fieldset:nth-child(3) > label:nth-child(4) > textarea')?.rows, 3);
```

You should give the textarea a `cols` attribute with value `30`.

```js
assert.equal(document.querySelector('fieldset:nth-child(3) > label:nth-child(4) > textarea')?.cols, 30);
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
        <label>How did you hear about us?
          <select>
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label>Provide a bio:
				  <textarea></textarea>
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
