---
id: 60fadb18058e950c73925279
title: Part 40
challengeType: 0
dashedName: part-40
---

# --description--

ระหว่างการพัฒนา การมองเห็น `fieldset` default borders ได้ถือว่ามีประโยชน์
อย่างไรก็ตาม มันทำให้เนื้อหาที่ปรากฏดูห่างกันเกินไป

จงลบ `border` และเพิ่ม padding ขนาด `2rem` เฉพาะที่ด้านบนและล่างของแต่ละ `fieldset`
จงอย่าลืมที่จะลบ `padding` ออกจากด้านว้ายและขวา

# --hints--

คุณควรใช้ค่า `none` or `0` เพื่อลบ `border`

```js
assert.match(new __helpers.CSSHelp(document).getStyle('fieldset')?.border, /(none)|(0px)/);
```

You should add `padding` of `2rem` to the top and bottom of each `fieldset`.

```js
const fieldset = new __helpers.CSSHelp(document).getStyle('fieldset')
assert.equal(fieldset?.paddingTop, '2rem');
assert.equal(fieldset?.paddingBottom, '2rem');
```

You should remove the `padding` from the left and right of each `fieldset`.

```js
const fieldset = new __helpers.CSSHelp(document).getStyle('fieldset')
assert.equal(fieldset?.paddingLeft, '0px');
assert.equal(fieldset?.paddingRight, '0px');
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

h1, p {
  margin: 1em auto;
  text-align: center;
}

form {
  width: 60vw;
	max-width: 500px;
	min-width: 300px;
	margin: 0 auto;
}

--fcc-editable-region--

--fcc-editable-region--

label {
	display: block;
	margin: 0.5rem 0;
}

```
