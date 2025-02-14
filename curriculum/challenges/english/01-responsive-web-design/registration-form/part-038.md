---
id: 60fad8e6148f310bba7890b1
title: Part 38
challengeType: 0
dashedName: part-38
---

# --description--

จงจัดให้ `h1` และ `p` element อยู่ตรงกลางโดยการกำหนดค่า `margin` เท่ากับ `1em auto` ให้มัน
หลังจากนั้น จงจัดให้ข้อความต่าง ๆ อยู่ตรงกลางเช่นเดียวกัน

# --hints--

คุณควรใช้ comma-separated element selector เพื่อตกแต่ง `h1` และ `p` elements.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('h1, p'));
```

You should use a `margin` of `1em auto` to center the `h1` and `p` elements.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('h1, p')?.margin, '1em auto');
```

You should use a `text-align` of `center` to center the `h1` and `p` text.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('h1, p')?.textAlign, 'center');
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
        <label>Enter Your First Name: <input type="text" name="first-name" required /></label>
        <label>Enter Your Last Name: <input type="text" name="last-name" required /></label>
        <label>Enter Your Email: <input type="email" name="email" required /></label>
        <label>Create a New Password: <input type="password" name="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
      <fieldset>
        <label><input type="radio" name="account-type" /> Personal Account</label>
        <label><input type="radio" name="account-type" /> Business Account</label>
        <label>
          <input type="checkbox" name="terms" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
			  </label>
      </fieldset>
      <fieldset>
        <label>Upload a profile picture: <input type="file" name="file" /></label>
        <label>Input your age (years): <input type="number" name="age" min="13" max="120" />
			  </label>
        <label>How did you hear about us?
          <select name="referrer">
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label>Provide a bio:
          <textarea name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
			  </label>
      </fieldset>
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
  font-family: Tahoma;
	font-size: 16px;
}

--fcc-editable-region--

--fcc-editable-region--

label {
	display: block;
	margin: 0.5rem 0;
}

```
